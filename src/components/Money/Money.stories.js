import Money from "./Money.vue";
import { withKnobs, text, boolean, number, color, array } from '@storybook/addon-knobs';

export default { title: "Components/Modifier/Money", component: Money, decorators: [withKnobs]};

export const MoneyBasic = () => ({
  components: { Money },
  template:
  '<Money :value="value" :currency="currency"/>',
  props: {
    value: {
      default: text('Value','0'),
    },
    currency: {
      default: text('Currency','USD'),
    }
  },
});
