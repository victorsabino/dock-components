import ButtonIcon from "./ButtonIcon.vue";

export default { title: "ButtonIcon" };

export const ButtonIconBasic = () => ({
  components: { ButtonIcon },
  template:
  "<ButtonIcon icon=\"more_horizon\" slot=\"button\" bgColor=\"transparent\" color=\"red !important\" width=\"90px\" height=\"40px\"/>"
});

export const ButtonIconObjKey = () => ({
  components: { ButtonIcon },
  template:
  "<ButtonIcon :options=\"[{id: 'teste'}]\" objKey=\"id\" label='testao' @change='() => console.log()'/>"
});