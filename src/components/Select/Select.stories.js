import Select from "./Select.vue";

export default { title: "Select" };

export const SelectBasic = () => ({
  components: { Select },
  template:
  "<Select :options=\"['teste']\" label='teste'/>"
});