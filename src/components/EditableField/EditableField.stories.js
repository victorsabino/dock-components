import EditableField from "./EditableField.vue";

export default { title: "EditableField" };

export const EditableFieldDateFormIsToggledTur = () => ({
  components: { EditableField },
  template:
    "<div style='width: 120px; margin-left: 20px; margin-top:20px'> <EditableField value='texto' :isToggled='false'> </EditableField> </div>"
});
export const EditableFieldDateFormIsToggledFalse= () => ({
    components: { EditableField },
    template:
      "<div style='width: 120px; margin-left: 20px; margin-top:20px'> <EditableField value='texto' :isToggled='true'> </EditableField> </div>"
  });