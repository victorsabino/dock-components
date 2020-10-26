import PercentageBar from './PercentageBar.vue';
import { withKnobs, text } from '@storybook/addon-knobs';

export default { title: 'Components/PercentageBar', component: PercentageBar, decorators: [withKnobs] };

export const PercentageBarBasic = () => ({
  components: { PercentageBar },
  template: '<PercentageBar :percentage="percentage"/>',
  props: {
    percentage: {
      default: text("Percentage","20")
    }
  }
});