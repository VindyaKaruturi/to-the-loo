import { Vue, Component, Prop } from 'vue-property-decorator';
import Constants from '@/constants';
import { capitalize } from '@/utility/genericUtility';
import { groupedLooList } from '@/models/looListModel';

@Component({
  filters: {
    capitalize,
  },
})
export default class Amenities extends Vue {
    private constants = Constants;

    private isAvailable: boolean = true;

    @Prop({ default: false })
    private showUpdate!: boolean

    @Prop()
    private amenityDetails!: groupedLooList
}
