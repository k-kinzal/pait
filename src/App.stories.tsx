import { StoryObj } from '@storybook/react';
import App from './App';

type Story = StoryObj<void>;

export default {
  title: 'App',
  component: App,
};

export const Default: Story = {
  args: undefined,
};
