import EditableField from "./EditableField.vue";

export default { title: "Components/Input/EditableField", component: EditableField };

export const EditableFieldIsToggledFalse = () => ({
  components: { EditableField },
  template:
    "<div style='width: 120px; margin-left: 20px; margin-top:20px'> <EditableField value='texto' :isToggled='false'> </EditableField> </div>"
});
export const EditableFieldIsToggledTrue= () => ({
    components: { EditableField },
    template:
      "<div style='width: 120px; margin-left: 20px; margin-top:20px'> <EditableField value='texto' :isToggled='true'> </EditableField> </div>"
  });