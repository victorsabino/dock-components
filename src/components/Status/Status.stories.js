import Status from './Status.vue';
import { withKnobs, text, number } from '@storybook/addon-knobs';

export default { title: 'Components/Status', component: Status, decorators: [withKnobs] };

export const StatusBasic = () => ({
  components: { Status },
  template: '<Status :status="status" :proposalCount="proposalCount"/>',
  props: {
    status: {
      default: text("Status", "Status")
    }
  }
});