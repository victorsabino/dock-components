import DateForm from "./DateForm.vue";
import { withKnobs, text, date, boolean } from '@storybook/addon-knobs';

export default { title: "Components/Input/DateForm", component: DateForm, decorators: [withKnobs]  };

export const DateFormBasic = () => ({
  components: { DateForm },
  template:
  '<div style="width: 170px ; margin-left:20px"> <DateForm :disableDate="disableDate" :row="row" :right="right" /> </div>',
  props:{
    row: {
      default: text('Row','Row'),
    },
    right: {
      default: boolean('Right', false),
    },
    disableDate: {
      default: date('DisableDate', '')
    }
  }
});
