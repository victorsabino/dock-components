import TopTab from "./TopTab.vue";
import { withKnobs, array } from '@storybook/addon-knobs';

export default { title: "Components/TopTab", component: TopTab, decorators:[withKnobs] };

export const TopTabWithIcon = () => ({
  components: { TopTab },
  template:
    '<TopTab :tabs="tabs"> text</TopTab>',
    props: {
      tabs: {
        default: array('Tabs',[{title: ' Request ', icon: ' attach_money '}, {title: 'Proposals ', icon: 'swap_horiz'}])
      }
    }
});

