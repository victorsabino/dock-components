import ButtonIcon from "./ButtonIcon.vue";
import { withKnobs, text, number, color } from '@storybook/addon-knobs';

export default { title: "Components/Botões/ButtonIcon", component: ButtonIcon, decorators: [withKnobs] };

export const ButtonIconBasic = () => ({
  components: { ButtonIcon },
  template:
  '<ButtonIcon :icon="icon" :bgcolor="bgcolor" :width="width" slot="button" :color="color" :radius="radius" :marginLeft="marginLeft" />',
    props:{
    icon: {
      default: text('Icon', 'account_box')
    },
    bgcolor: {
      default: color('BgColor','#4eb9b1')
    },
    radius: {
      default: `${number('Radius', 40, {
        range: true,
        min: 0,
        max: 99,
        step: 1
      })}px`
    },
    width: {
      default: text('Width','') 
    },
    height: {
      default: text('Height','')
    },
    color: {
      default: color('Color', '#10434F')
    },
    marginLeft: {
      default: `${number('MarginLeft', 7.5, {
        range: true,
        min: 0,
        max: 20,
        step: 0.5
      })}px`
    },
  }
});

