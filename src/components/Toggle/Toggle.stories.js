import Toggle from "./Toggle.vue";

export default { title: "Toggle" };

export const ToggleBasic = () => ({
  components: { Toggle },
  template:
    "<Toggle title=\"Toggle\"> <div slot=\"content\"> Content </div> </Toggle>"
});
