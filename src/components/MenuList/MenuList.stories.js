import MenuList from "./MenuList.vue";
import ButtonIcon from "../ButtonIcon/ButtonIcon.vue";

export default { title: "MenuList" };

export const MenuListStory = () => ({
  components: { MenuList },
  template:
    "<MenuList>"
});


export const MenuListStoryWidth = () => ({
  components: { MenuList },
  template:
    "<MenuList width='100px'>"
});

export const MenuListStoryItems = () => ({
  components: { MenuList, ButtonIcon },
  template:
    "<MenuList width='100px' :items=\"[{ name: 'Edit', onClick: () => {}},{ name: 'See transactions', onClick: () => {}}, { name: 'Delete', onClick: () => {}}]\"> <div slot='button' style='position: relative; height: 10px'> <ButtonIcon icon='more_vert' bgcolor='transparent' color='#103a4f' width='45px' height='90px' /> </div> </MenuList>"
});
