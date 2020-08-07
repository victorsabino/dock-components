import DateForm from "./DateForm.vue";

export default { title: "DateForm" };

export const DateFormBasic = () => ({
  components: { DateForm },
  template:
  "<div style='width: 170px ; margin-left:20px'> <DateForm :options=\"['teste1', 'teste2']\" label='testao'/> </div>"
});
