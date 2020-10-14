import Checkbox from './Checkbox.vue';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default { title: 'Components/Checkbox', component: Checkbox, decorators: [withKnobs] };

export const CheckboxBasic = () => ({
  components: { Checkbox },
  template: '<Checkbox :label="label" :value="value" :disabled="disabled"/>',
  props: {
    label: {
      default: text("Label", "Label"),
    },
    value: {
      default: boolean('Value', false),
    },
    disabled: {
      default: boolean('Disabled', false),
    }
  }
});