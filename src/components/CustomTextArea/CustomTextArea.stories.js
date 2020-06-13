import CustomTextArea from "./CustomTextArea.vue";

export default { title: "CustomTextArea" };
let model = "tester";
export const CustomTextAreaBasic = () => ({
  components: { CustomTextArea },
  template:
    "<CustomTextArea label=\"teste\"/>"
});

export const CustomTextAreaDisabled = () => ({
  components: { CustomTextArea },
  template:
    "<CustomTextArea :disabled=\"true\" label=\"teste\"/>"
});

