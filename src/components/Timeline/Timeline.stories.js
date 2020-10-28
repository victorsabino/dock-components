import Timeline from './Timeline.vue';
import { withKnobs, text } from '@storybook/addon-knobs';

export default { title: 'Components/Timeline', component: Timeline, decorators: [withKnobs] };

export const TimelineBasic = () => ({
  components: { Timeline },
  template: '<Timeline>',
  props: {
  }
});