import TopTab from "./TopTab.vue";
import { withKnobs, array } from '@storybook/addon-knobs';

export default { title: "Components/TopTab", component: TopTab, decorators:[withKnobs] };

export const TopTabWithIcon = () => ({
  components: { TopTab },
  template:
    '<div style="background: #10434F; padding: 10px"><TopTab :tabs="tabs"/></div>',
    props: {
      tabs: {
        default: array('Tabs',[{title: 'ESCALAS', icon: 'view_week'}, {title: 'PORTOS', img: '../../src/assets/hook.svg'}])
      }
    }
});

