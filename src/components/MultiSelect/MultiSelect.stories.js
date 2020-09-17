import MultiSelect from "./MultiSelect.vue";

export default { title: "MultiSelect", component: MultiSelect };

export const MultiSelectDateForm = () => ({
  components: { MultiSelect },
  template:
    "<div style='width: 195px; margin-left: 20px; margin-top:20px'> <MultiSelect label='testao' :options='[{row:\"teste1 teste1 teste1teste1 teste1 teste1 teste1\"},{row:\"teste2\"},{row:\"teste3\"},{ dateForm: true, row: \"Period\", slot:true}]'> </MultiSelect> </div>"
});