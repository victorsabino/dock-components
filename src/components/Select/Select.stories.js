import Select from "./Select.vue";

export default { title: "Select" };
const mockFunc = () => {
  console.log('testing ');
}

export const SelectBasic = () => ({
  components: { Select },
  template:
  "<div style='width: 330px'> <Select :options=\"['teste1', 'teste2']\" label='testao'/> </div>"
});

export const SelectObjKey = () => ({
  components: { Select },
  template:
  "<Select :options=\"[{id: 'teste'}]\" objKey=\"id\" label='testao' @change='() => console.log()'/>"
});