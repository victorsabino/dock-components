import Umidade from "./Umidade.vue";
import { withKnobs, array } from '@storybook/addon-knobs';

export default { title: "Components/Umidade", component:Umidade, decorators:[withKnobs] };

export const UmidadeStorie = () => ({
  components: { Umidade },
  template:
    '<Umidade :min="min" :max="max"/>',
    props: {
      min: { default: 10},
      max: { default: 60}
    }
});

