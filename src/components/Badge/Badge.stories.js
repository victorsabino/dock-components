import Badge from './Badge.vue';

export default { title: 'Components/Badge', component: Badge };

export const BadgeBasic = () => ({
  components: { Badge },
  template: '<Badge name="Badge"/>'
});