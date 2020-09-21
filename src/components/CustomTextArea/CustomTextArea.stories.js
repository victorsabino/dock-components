import CustomTextArea from "./CustomTextArea.vue";

export default { title: "Components/Input/CustomTextArea", component: CustomTextArea };
let model = 'teste3eee';
export const CustomTextAreaBasic = () => ({
  components: { CustomTextArea },
  template:
    "<CustomTextArea label=\"teste\"/>"
});
export const CustomTextTextLimit = () => ({
  components: { CustomTextArea },
  template:
    "<CustomTextArea label=\"teste\" maxLength=\"5\" v-model=\"model\"/>"
});

export const CustomTextAreaDisabled = () => ({
  components: { CustomTextArea },
  template:
    "<CustomTextArea :disabled=\"true\" label=\"teste\"/>"
});

