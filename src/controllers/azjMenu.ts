import { Vue, Component, Prop } from 'vue-property-decorator';
import constants from '@/constants';
import { UserModel } from '@/models/userModel';

@Component
export default class AzjButton extends Vue {
  @Prop()
  userList!: Array<UserModel>;

  @Prop()
  selectedUser!: Function;

  private constants = constants;

  private showNavContent: boolean = false;

  /**
   * show and hide the menu items
   */
  private showHideNavBar(): void {
    this.showNavContent = !this.showNavContent;
  }

  /**
   * on selection of any user shows nearest amenities available
   * @param item
   */
  private userSelected(item: UserModel) : void {
    this.showNavContent = false;
    this.$emit('selectedUser', item);
  }
}
