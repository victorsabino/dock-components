import Rain from "./Rain.vue";
import { withKnobs, array } from '@storybook/addon-knobs';

export default { title: "Components/Rain", component:Rain, decorators:[withKnobs] };

export const RainStorie = () => ({
  components: { Rain },
  template:
    '<Rain :quantity="quantity" :percentage="percentage"/>',
    props: {
			quantity: { default: 10},
      percentage: { default: 60}
    }
});

