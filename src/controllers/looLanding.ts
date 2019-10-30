import { Vue, Component } from 'vue-property-decorator';
import { UserModel } from '@/models/userModel';
import Amenities from '@/components/amenities.vue';
import AzjButton from '@/components/azjButton.vue';
import AzjSpinner from '@/components/azjSpinner.vue';
import AzjErrorComponent from '@/components/azjErrorComponent.vue';
import AzjMenu from '@/components/azjMenu.vue';
import { LooListModel, groupedLooList, groupedByLocation } from '@/models/looListModel';
import { groupBy, orderBy } from '@/utility/genericUtility';
import LandingService from '@/helpers/landingService';
import constants from '@/constants';

@Component({
  components: {
    Amenities,
    'azj-button': AzjButton,
    'azj-spinner': AzjSpinner,
    'azj-menu': AzjMenu,
    'azj-error-component': AzjErrorComponent,
  },
})
export default class Landing extends Vue {
  /** variables declaration */
  private constants = constants;

  private isActive: boolean = false;

  private looList: Array<LooListModel> = [];

  private amenitiesLabel: string = this.constants.landing.ALL_AMENITIES;

  private loadContent: boolean = false;

  private groupedLooList: Array<groupedLooList> = [];

  private usersList: Array<UserModel> = [];

  private errorMessage: string = '';

  /** fetch the loo list near to location */
  private async created() {
    this.fetchUserList();
    try {
      await this.$store.dispatch('looListModule/fetchLooList');
      this.looList = this.$store.state.looListModule.looList;
      this.groupedLooList = LandingService.groupLooData(this.looList);
      this.groupedLooList = orderBy(this.groupedLooList, 'level');
      this.errorMessage = '';
    } catch (err) {
      this.errorMessage = constants.ERROR_MESSAGE;
    }
    this.loadContent = true;
  }

  /** User list declaration */
  private fetchUserList() {
    const userList = constants.landing.USERS_LIST;
    userList.forEach((user) => {
      this.usersList.push({ titleName: user, isActive: false });
    });
  }

  /**
   * Activates the gender selected
   * @param selectedGender
   */
  private selectAmenities(selectedGender: UserModel) {
    this.isActive = true;
    this.loadContent = false;
    this.amenitiesLabel = `${selectedGender.titleName} ${this.constants.landing.ROOM_AMENITIES}`;
    this.usersList.forEach((ele) => {
      if (ele.titleName === selectedGender.titleName) {
        ele.isActive = true;
      } else {
        ele.isActive = false;
      }
    });
    this.selectedUserAmenities(selectedGender);
    this.loadContent = true;
  }

  /**
   * filters the loo list based on the gender selected
   * @param selectedGender
   */
  private selectedUserAmenities(selectedGender: UserModel) {
    this.looList = this.$store.state.looListModule.looList;
    const groupedByCategory = groupBy(this.looList, 'gender');
    this.looList = groupedByCategory[selectedGender.titleName];
    this.groupedLooList = LandingService.groupLooData(this.looList);
    this.groupedLooList = orderBy(this.groupedLooList, 'level');
  }

  /**
   * Navigates to show the way to the nearest loo.
   */
  private showWay() {
    console.log(`Button Clicked !!!!! + ${this.isActive}`);
  }

  /**
   * Resets the user selection fuction
   */
  private resetUserSelection() {
    this.isActive = false;
    this.usersList.forEach((ele) => {
      ele.isActive = false;
    });
    this.looList = this.$store.state.looListModule.looList;
    this.groupedLooList = LandingService.groupLooData(this.looList);
    this.amenitiesLabel = `${this.constants.landing.ALL_AMENITIES}`;
    this.groupedLooList = orderBy(this.groupedLooList, 'level');
  }
}
