import DateInput from "./DateInput.vue";
import { withKnobs, date, boolean } from '@storybook/addon-knobs';

export default { title: "Components/Input/DateInput", component: DateInput, decorators: [withKnobs] };

export const DateInputBasic = () => ({
  components: { DateInput },
  template:
    '<DateInput :right="right" :error="error" :value="value" :disableDate="disableDate" />',
    props: {
      right: {
        default: boolean('Right',false)
      },
      error: {
        default: boolean('Error',false)
      },
      value: {
        default: date('Value', '')
      },
      disableDate: {
        default: date('DisableDate', '')
      },
    }
});
