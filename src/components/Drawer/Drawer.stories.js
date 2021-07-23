import Drawer from './Drawer.vue';
import { withKnobs, boolean, text, array } from '@storybook/addon-knobs';

export default { title: 'Components/Drawer', component: Drawer, decorators: [withKnobs] };

export const DrawerBasic = () => ({
  components: { Drawer },
  template: '<Drawer :name="name"/>',
  props: {
    links: {
      default: array("Links", [
        {
          action: () => {},
          label: 'INÍCIO',
          icon: 'home',
        },
        {
          action: () => {},
          label: 'LOGIN',
          icon: 'login',
        }
      ])
    },
    hover: {
      default: boolean("Hover", true)
    },
    logo: {
      default: text("Logo", '../../assets/logo.svg')
    }
  }
});