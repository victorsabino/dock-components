import Temperature from "./Temperature.vue";
import { withKnobs, array } from '@storybook/addon-knobs';

export default { title: "Components/Temperature", component:Temperature, decorators:[withKnobs] };

export const TemperatureStorie = () => ({
  components: { Temperature },
  template:
    '<Temperature :max="max" :min="min" />',
    props: {
        min: { default: 20},
        max: { default: 45}
      }
});

