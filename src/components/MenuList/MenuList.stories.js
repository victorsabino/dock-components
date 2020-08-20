import MenuList from "./MenuList.vue";

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
