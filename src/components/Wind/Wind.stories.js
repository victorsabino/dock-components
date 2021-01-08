import Wind from "./Wind.vue";
import { withKnobs, array } from '@storybook/addon-knobs';

export default { title: "Components/Wind", component:Wind, decorators:[withKnobs] };

export const WindStorie = () => ({
  components: { Wind },
  template:
    '<Wind :min="min" :max="max"/>',
    props: {
      min: { default: 10},
      max: { default: 60}
    }
});

