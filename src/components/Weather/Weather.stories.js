import Weather from "./Weather.vue";
import { withKnobs, array } from '@storybook/addon-knobs';

export default { title: "Components/Weather", component: Weather, decorators:[withKnobs] };

export const WeatherStorie = () => ({
  components: { Weather },
  template:
    '<Weather/>',
    // props: {
    //   tabs: {
    //     default: array('Tabs',[{title: ' Request ', icon: ' attach_money '}, {title: 'Proposals ', icon: 'swap_horiz'}])
    //   }
    // }
});

