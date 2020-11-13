import TimeInput from "./TimeInput.vue";
import { withKnobs, date, boolean } from '@storybook/addon-knobs';

export default { title: "Components/Input/TimeInput", component: TimeInput, decorators: [withKnobs] };

export const TimeInputBasic = () => ({
  components: { TimeInput },
  template:
    '<TimeInput/>',
    
});
