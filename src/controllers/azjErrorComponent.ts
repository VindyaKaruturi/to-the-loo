import { Vue, Component, Prop } from 'vue-property-decorator';
import constants from '@/constants';

@Component
export default class AzjButton extends Vue {
    @Prop({ default: constants.ERROR_MESSAGE })
    message! : string;
}
