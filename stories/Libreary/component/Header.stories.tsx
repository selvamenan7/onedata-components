import React from 'react';
import { Story, Meta } from '@storybook/react';
import { HeaderProps } from '../../../src/components/header/HeaderInterface';
import { Header } from '../../../src/components/header/Header';

export default {
  title: 'Library/component/Header',
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};