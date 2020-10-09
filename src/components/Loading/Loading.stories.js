import Loading from './Loading.vue';
import { withKnobs, boolean } from '@storybook/addon-knobs';

export default { title: 'Components/Loading', component: Loading, decorators: [withKnobs] };

export const LoadingBasic = () => ({
  components: { Loading },
  template: '<Loading :darkMode="darkMode"/>',
  props: {
    darkMode: {
      default: boolean("DarkMode", true)
    }
  }
});