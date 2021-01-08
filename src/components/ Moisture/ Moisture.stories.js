import Moisture from "./Moisture.vue";
import { withKnobs, array } from '@storybook/addon-knobs';

export default { title: "Components/Moisture", component:Moisture, decorators:[withKnobs] };

export const MoistureStorie = () => ({
  components: { Moisture },
  template:
    '<Moisture :min="min" :max="max"/>',
    props: {
      min: { default: 10},
      max: { default: 60}
    }
});

