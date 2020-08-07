import SlottedSelect from "./SlottedSelect.vue";

export default { title: "SlottedSelect" };
const mockFunc = () => {
  console.log("testing ");
};

export const SlottedSelectDateForm = () => ({
  components: { SlottedSelect },
  template:
    "<div style='width: 195px; margin-left: 20px; margin-top:20px'> <SlottedSelect label='testao'> </SlottedSelect> </div>"
});