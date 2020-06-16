import Select from "./Select.vue";

export default { title: "Select" };

export const SelectBasic = () => ({
  components: { Select },
  template:
  "<Select :options=\"['teste']\" label='testao'/>"
});

export const SelectObjKey = () => ({
  components: { Select },
  template:
  "<Select :options=\"[{id: 'teste'}]\" objKey=\"id\" label='testao'/>"
});