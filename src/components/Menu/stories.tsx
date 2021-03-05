import { Story, Meta } from '@storybook/react/types-6-0'
import Menu, { UseNameProps } from '.'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Default: Story<UseNameProps> = (args) => <Menu {...args} />

Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
}
