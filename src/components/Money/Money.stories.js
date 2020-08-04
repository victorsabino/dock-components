import Money from "./Money.vue";

export default { title: "Money" };
const mockFunc = () => {
  console.log('testing ');
}

export const MoneyBasic = () => ({
  components: { Money },
  template:
  "<Money value=\"500\" currency='BRL'/>"
});
