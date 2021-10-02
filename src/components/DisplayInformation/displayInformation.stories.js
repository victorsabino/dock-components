import DisplayInformation from './DisplayInformation.vue';
import { withKnobs, text, boolean, number, color, array } from '@storybook/addon-knobs';

export default { title: 'Components/DisplayInformation/Default', component: DisplayInformation, decorators: [withKnobs] };

export const displayInformation = () => ({
  components: { DisplayInformation },
  template: '<DisplayInformation :title="title" :informations="informations" :footerInfo="footerInfo"/>',
  props: {
    title: {
      default: text("Title","ETB")
    },
    informations: {
      default: array("Informations", ['DD/MM H'])
    },
    footerInfo: {
      default: text("FooterInfo", "Data prevista de atracação")
    }
  }
});
