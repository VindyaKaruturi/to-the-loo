import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class AzjButton extends Vue {
    @Prop({ default: 'Button Text' })
    buttonText! : string;

    @Prop({ default: false, required: true })
    isDisabled! : boolean;

    @Prop()
    btnClick : any
}
