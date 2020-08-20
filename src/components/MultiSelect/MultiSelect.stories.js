import MultiSelect from "./MultiSelect.vue";

export default { title: "MultiSelect" };

export const MultiSelectDateForm = () => ({
  components: { MultiSelect },
  template:
    "<div style='width: 195px; margin-left: 20px; margin-top:20px'> <MultiSelect label='testao'> </MultiSelect> </div>"
});