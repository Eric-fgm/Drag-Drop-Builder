import Button, { IButtonProps } from '@/features/Widgets/components/Button/Button'
import ButtonTools from '@/features/Widgets/components/Button/ButtonTools'
import SolidButton from '@/icons/SolidButton'

export default {
  icon: SolidButton,
  name: 'Przycisk',
  node: Button,
  nodeTools: ButtonTools,
  props: {
    css: {
      paddingTop: 12,
      paddingBottom: 12,
      paddingLeft: 16,
      paddingRight: 16,
      color: '#ffffff',
      backgroundColor: '#65d5fb',
    },
    containerCss: {},
    text: 'Kliknij tutaj',
  } as Omit<IButtonProps, 'id'>,
}
