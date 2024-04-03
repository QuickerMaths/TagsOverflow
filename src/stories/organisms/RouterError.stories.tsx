import { Meta, StoryObj } from '@storybook/react';

import RouterError from '@/components/router-error';
import Container from '@/components/container';
import Typography from '@/components/typography';
import { FunctionComponent } from 'react';

const meta: Meta = {
  component: RouterError,
  subcomponents: {
    Container: Container as FunctionComponent<unknown>,
    Typography: Typography as FunctionComponent<unknown>,
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RouterError>;

export const Default: Story = {
  render: () => <RouterError />,
};