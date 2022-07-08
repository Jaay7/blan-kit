import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/Button';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    buttonColor: {
      defaultValue: 'primary',
    },
    textColor: {
      defaultValue: '#fff',
    },
    variant: {
      defaultValue: 'contained',
    },
    iconPosition: {
      defaultValue: 'start',
    },
    onClick: { action: 'clicked' },
    children: {
      defaultValue: 'Default text',
    }
  }
}

export default meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Primary = Template.bind({});

export const Secondary = Template.bind({});

Primary.args = {
  buttonColor: 'primary',
  variant: 'contained',
  children: 'Primary',
  textColor: '#fff',
  iconPosition: 'start',
  onClick: action('clicked')
}


Secondary.args = {
  buttonColor: 'secondary',
  variant: 'contained',
  children: 'Secondary',
  textColor: '#fff',
  iconPosition: 'start',
  onClick: action('clicked')
}
