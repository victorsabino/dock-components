import Badge from './Badge.vue';
import { withKnobs, text } from '@storybook/addon-knobs';

export default { title: 'Components/Badge', component: Badge, decorators: [withKnobs] };

export const BadgeBasic = () => ({
  components: { Badge },
  template: '<Badge :name="name"/>',
  props: {
    name: {
      default: text("Name","Badge")
    }
  }
});