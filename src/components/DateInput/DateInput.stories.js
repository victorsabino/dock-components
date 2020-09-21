import DateInput from "./DateInput.vue";

export default { title: "Components/Input/DateInput", component: DateInput };
let model = 'teste3eee';
export const DateInputBasic = () => ({
  components: { DateInput },
  template:
    "<DateInput label=\"teste\" />"
});
