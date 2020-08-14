import DateInput from "./DateInput.vue";

export default { title: "DateInput" };
let model = 'teste3eee';
export const DateInputBasic = () => ({
  components: { DateInput },
  template:
    "<DateInput label=\"teste\" :startDate='undefined'/>"
});
