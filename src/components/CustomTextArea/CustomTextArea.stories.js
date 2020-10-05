import CustomTextArea from "./CustomTextArea.vue";
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';

export default { title: "Components/Input/CustomTextArea", component: CustomTextArea, decorators: [withKnobs] };

export const CustomTextAreaBasic = () => ({
  components: { CustomTextArea },
  template:
    '<CustomTextArea :label="label" :icon="icon" :value="value" :type="type" :height="height" :disabled="disabled" :maxLength="maxLength" v-model="model"/>',
    props: {
      label: {
        default: text('Label','')
      },
      icon: {
        default: text('Icon','')
      },
      value: {
        default: text('Value','')
      },
      type: {
        default: text('Value', undefined)
      },
      height: {
        default: number('Height', 100, {
          range: true,
          min: 0,
          max: 500,
          step: 1
        })
      },
      disabled: {
        default: boolean('Disabled',false)
      },
      maxLength: {
        default: number('MaxLength', 200, {
          range: true,
          min: 0,
          max: 999 ,
          step: 1
        })
      },
      model: {
        default: text('v-model', '')
      }
    }
});