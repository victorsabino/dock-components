import CustomInput from "./CustomInput.vue";

export default { title: "CustomInput" };
export const CustomInputBasic = () => ({
  components: { CustomInput },
  template:
    "<CustomInput label=\"teste\"/>"
});
export const CustomInputNumber = () => ({
  components: { CustomInput },
  template:
    "<CustomInput label=\"teste\" type=\"number\"/>"
});


export const CustomInputDisabled = () => ({
  components: { CustomInput },
  template:
    "<CustomInput :disabled=\"true\" label=\"teste\"/>"
});
