import Button from './Button.vue';

export default { title: 'Button' };

export const ButtonWithIcon = () => ({
  components: { Button },
  template: '<Button text="Botao"> text</Button>'
});