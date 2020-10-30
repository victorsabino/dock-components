import InputLabel from './InputLabel.vue';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default { title: 'Components/InputLabel', component: InputLabel, decorators: [withKnobs] };

export const InputLabelBasic = () => ({
  components: { InputLabel },
  template: '<InputLabel :label="label" :labelInput="labelInput" :description="description" :value="value" :editing="editing" :type="type"/>',
  props: {
    label: {
      default: text("Label","Teste")
    },
    labelInput: {
      default: text("LabelInput","TesteInput")
    },
    description: {
      default: text("Description","TesteDescription")
    },
    value: {
      default: text("Value","TesteValue")
    },
    editing: {
      default: boolean("Editing", true)
    },
    type: {
      default: text("Type", "password")
    },
  }
});