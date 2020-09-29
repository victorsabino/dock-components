import CustomInput from "./CustomInput.vue";
import { withKnobs, text, number, boolean, array } from '@storybook/addon-knobs';

export default { title: "Components/Input/CustomInput", component: CustomInput, decorators: [withKnobs] };
export const CustomInputBasic = () => ({
  components: { CustomInput },
  template: '<CustomInput :label="label" :icon="icon" :value="value" :disabled="disabled" :maxlength="maxlength" :mask="mask" :error="error" :pattern="pattern" :placeholder="placeholder" :step="step" :maxDecimal="maxDecimal" :type="type"/>',
  props: {
    label: {
      default: text('Label', '')
    },
    icon: {
      default: text('Icon', '')
    },
    value: {
      default: text('Value', '')
    },
    disabled: {
      default: boolean('Disabled',false)
    },
    pattern: {
      default: text('Pattern','')
    },
    step: {
      default: text('Step','')
    },
    maxDecimal: {
      default: `${number('MaxDecimal', 999, {
          range: true,
          min: 0,
          max: 999,
          step: 1
      })}px`
    },
    type: {
      default: text('Type','')
    },
    maxlength: {
      default: `${number('Maxlength', 50, {
        range: true,
        min: 0,
        max: 999,
        step: 1
      })}px`
    },
    placeholder: {
      default: text('Placeholder','')
    },
    error: {
      default: boolean('error',false)
    },
    mask: {
      default: array('Mask', [])
    },
    counter: {
      default: boolean('Counter', false)
    }
  }
});