import SlottedSelect from "./SlottedSelect.vue";

export default { title: "SlottedSelect" };
const mockFunc = () => {
  console.log("testing ");
};

export const SlottedSelectDateForm = () => ({
  components: { SlottedSelect },
  template:
    "<div style='width: 195px'> <SlottedSelect label='testao'> </SlottedSelect> </div>"
});