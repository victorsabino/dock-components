import MultiSelect from "./MultiSelect.vue";
import { withKnobs, text, boolean, array, object } from '@storybook/addon-knobs';

export default { title: "Components/Select/MultiSelect", component: MultiSelect, decorators: [withKnobs] };

export const MultiSelectDateForm = () => ({
  components: { MultiSelect },
  template:
    '<div style="width: 195px; margin-left: 20px; margin-top:20px"> <MultiSelect :label="label" :name="name" :disabled="disabled" :backgroundColor="backgroundColor" :options="options" :reset="reset" :placeholder="placeholder" :value="value"> </MultiSelect> </div>',
    props: {
      label: {
        default: text('Label','')
      },
      name: {
        default: text('Name','row')
      },
      backgroundColor: {
        default: text('BackgroundColor','black')
      },
      options: {
        default: array('Options', [{row:"teste1 teste1 teste1teste1 teste1 teste1 teste1"},{row:"teste2"},{row:"teste3"},{ dateForm: true, row: "Period", slot:true}])
      },
      reset: {
        default: boolean('Reset',false)
      },
      placeholder: {
        default: text('Placeholder', '')
      },
      value: {
        default: object('value', null)
      },
      disabled: {
        default: boolean('Disable', false)
      },
    },
});