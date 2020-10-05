import EditableField from "./EditableField.vue";
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';

export default { title: "Components/Input/EditableField", component: EditableField, decorators: [withKnobs] };

export const EditableFieldStory = () => ({
  components: { EditableField },
  template:
    '<div style="width: 120px; margin-left: 20px; margin-top:20px"> <EditableField :value="value" :isToggled="isToggled" :maxlength="maxlength" :width="width"> </EditableField> </div>',
    props: {
      isToggled: {
        default: boolean('isToggled',false),
      },
      value: {
        default: text('Value','Editable Field'),
      },
      maxlength: {
        default: `${number('Maxlength', 100, {
          range: true,
          min: 0,
          max: 999,
          step: 1
        })}px`
      },
      width: {
        default: `${number('Width', 200, {
          range: true,
          min: 0,
          max: 500,
          step: 1
        })}px`
      },
    }
});

