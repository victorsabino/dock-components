import Select from "./Select.vue";

export default { title: "Select" };

export const SelectBasic = () => ({
  components: { Select },
  template:
  "<Select :options=\"['teste']\" label='teste'/>"
});

export const SelectObjKey = () => ({
  components: { Select },
  template:
  "<Select :options=\"[{id: 'teste'}]\" objKey=\"id\" label='teste'/>"
});