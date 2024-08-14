import type { Meta, StoryObj } from '@storybook/react';
import { Nextlib } from './nextlib';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Nextlib> = {
  component: Nextlib,
  title: 'Nextlib',
};
export default meta;
type Story = StoryObj<typeof Nextlib>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Nextlib!/gi)).toBeTruthy();
  },
};
