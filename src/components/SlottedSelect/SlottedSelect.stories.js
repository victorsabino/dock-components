import DateSelect from "./DateSelect.vue";

export default { title: "DateSelect" };
const mockFunc = () => {
  console.log("testing ");
};

export const DateSelectDateForm = () => ({
  components: { DateSelect },
  template:
    "<div style='width: 195px'> <DateSelect label='testao'> </DateSelect> </div>"
});