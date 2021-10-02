import Toggle from "./Toggle.vue";
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default { title: "Components/Toggle", component: Toggle, decorators: [withKnobs] };

export const ToggleBasic = () => ({
  components: { Toggle },
  template:
    '<Toggle :title="title" :defaultToggle="defaultToggle"> <div slot="content"> Content </div> </Toggle>',
    props: {
      title: {
        default: text('Title','Title'),
      },
      defaultToggle: {
        default: boolean('DefaultToggle',false),
      }
    },
});
