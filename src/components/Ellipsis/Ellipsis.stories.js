import Ellipsis from "./Ellipsis.vue";
import { withKnobs, text, number } from '@storybook/addon-knobs';

export default { title: "Components/Modifier/Ellipsis", component: Ellipsis, decorators: [withKnobs] };

export const EllipsisStory = () => ({
  components: { Ellipsis },
  template:
    '<Ellipsis :name="name" :width="width">',
  props: {
    name: {
      default: text('Name', ''),
    },
    // width: {
    //   default: `${number('Width', 50, {
    //     range: true,
    //     min: 0,
    //     max: 500,
    //     step: 1
    //   })}`      
    // },
  }
});
