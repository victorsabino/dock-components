import Button from './Button.vue';
import { withKnobs, text, boolean, number, color, array } from '@storybook/addon-knobs';

export default { title: 'Components/Botões/Button', component: Button, decorators: [withKnobs] };

export const ButtonWithIcon = () => ({
  components: { Button },
  template: '<Button :text="text" :disabled="disabled" :bgcolor="bgcolor" :fontSize="fontSize" :width="width" :listButtons="listButtons" :shadow="shadow" :color="color" :icon="icon" :fontWeight="fontWeight" :borderRadius="borderRadius" :paddingLeft="paddingLeft" :textAlign="textAlign" :hasOverlay="hasOverlay" :border="border"></Button>',
  props: {
    text: {
      default: text("Text","Botão")
    },
    disabled: {
      default: boolean("Disabled", false)
    },
    bgcolor: {
      default: color('BgColor','#4eb9b1')
    },
    fontSize: {
      default: `${number('FontSize', 20, {
        range: true,
        min: 0,
        max: 99,
        step: 1
      })}px`
    },
    width: {
      default: text('Width', 'fit-content')
    },
    shadow: {
      default: color('Shadow', '#388e88')
    },
    color: {
      default: color('Color','')
    },
    fontWeight: {
      default: `${number('FontWeight', 500, {
        range: true,
        min: 300,
        max: 900,
        step: 100
      })}`
    },
    borderRadius: {
      default: `${number('BorderRadius', 50, {
        range: true,
        min: 0,
        max: 50,
        step: 1
      })}px`
    },
    paddingLeft: {
      default: `${number('PaddingLeft', 0, {
        range: true,
        min: 0,
        max: 99,
        step: 1
      })}px`
    },
    textAlign: {
      default: text('TextAlign','center')
    },
    hasOverlay: {
      default: boolean('HasOverlay',true)
    },
    border: {
      default: text('Border','')
    },
    icon: {
      default: text('Icon','add_circle_outline')
    },
    listButtons: {
      default: array('ListButtons', [])
    }
  }
});
