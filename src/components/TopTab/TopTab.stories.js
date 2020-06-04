import TopTab from './TopTab.vue';

export default { title: 'TopTab' };

export const TopTabWithIcon = () => ({
  components: { TopTab },
  template: '<TopTab :tabs="[{title: \' Request \', icon: \' attach_money \'}, {title: \'Proposals \', icon: \'swap_horiz\'} ]"> text</TopTab>'
});