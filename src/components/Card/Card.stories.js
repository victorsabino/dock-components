import Card from './Card.vue';
import { withKnobs, text } from '@storybook/addon-knobs';

export default { title: 'Components/Card', component: Card, decorators: [withKnobs] };

export const CardBasic = () => ({
  components: { Card },
  template: '<Card>',
  props: {
  }
});