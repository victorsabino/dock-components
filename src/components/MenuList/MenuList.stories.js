import MenuList from "./MenuList.vue";
import ButtonIcon from "../ButtonIcon/ButtonIcon.vue";
import { withKnobs, text, boolean, number, array } from '@storybook/addon-knobs';

export default { title: "Components/MenuList", component: MenuList, decorators: [withKnobs] };

export const MenuListStory = () => ({
  components: { MenuList, ButtonIcon },
  template:
  '<MenuList :items="items" :zIndex="zIndex" :isButton="isButton" :width="width"> <div slot="button" style="position: relative; height: 10px"> <ButtonIcon icon="more_vert" bgcolor="transparent" color="#103a4f" width="45px" height="90px" /> </div> </MenuList>',
  props: {
    items: {
      default: array('Items', [{ name: 'Edit', onClick: () => {}},{ name: 'See transactions', onClick: () => {}}, { name: 'Delete', onClick: () => {}}])
    },
    zIndex: {
      default: number('Z-Index', 2, {
        range: true,
        min: 0,
        max: 99,
        step: 1
      })
    },
    isButton: {
      deafult: boolean('IsButton', true),
    },
    width: {
      default: `${number('Width', 150, {
        range: true,
        min: 0,
        max: 500,
        step: 1
      })}px ; left: 0px`
    }
  }
});
