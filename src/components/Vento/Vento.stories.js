import Vento from "./Vento.vue";
import { withKnobs, array } from '@storybook/addon-knobs';

export default { title: "Components/Vento", component:Vento, decorators:[withKnobs] };

export const VentoStorie = () => ({
  components: { Vento },
  template:
    '<Vento :min="min" :max="max"/>',
    props: {
      min: { default: 10},
      max: { default: 60}
    }
});

