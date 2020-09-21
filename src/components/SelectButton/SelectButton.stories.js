import SelectButton from "./SelectButton.vue";

export default { title: "Components/Select/SelectButton", component: SelectButton };

export const SelectButtonDateForm = () => ({
  components: { SelectButton },
  template:
    "<div style='width: 120px; margin-left: 20px; margin-top:20px'> <SelectButton label='Set as'> </SelectButton> </div>"
});