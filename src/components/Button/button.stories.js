import Button from './Button.vue';

export default { title: 'Button', component: Button };

export const ButtonWithIcon = () => ({
  components: { Button },
  template: '<Button text="Botao"> text</Button>'
});

export const ButtonDisabled = () => ({
  components: { Button },
  template: '<Button text="Botao" :disabled="true"> text</Button>'
});
