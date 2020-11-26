import Pagination from "./Pagination.vue";
import { withKnobs, text, number } from '@storybook/addon-knobs';

export default { title: "Components/Pagination", component: Pagination, decorators: [withKnobs] };

export const PaginationStory = () => ({
  components: { Pagination },
  template:
    '<Pagination :name="name" :width="width">',
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
