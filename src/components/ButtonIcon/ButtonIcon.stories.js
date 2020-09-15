import ButtonIcon from "./ButtonIcon.vue";

export default { title: "ButtonIcon", component: ButtonIcon };

export const ButtonIconBasic = () => ({
  components: { ButtonIcon },
  template:
  "<ButtonIcon icon=\"account_box\" slot=\"button\" color=\"#10434F\" radius=\"40px\" marginLeft=\"7.5px\" />"
});

export const ButtonIconObjKey = () => ({
  components: { ButtonIcon },
  template:
  "<ButtonIcon :options=\"[{id: 'teste'}]\" objKey=\"id\" label='testao' @change='() => console.log()'/>"
});
