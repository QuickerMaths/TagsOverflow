import { Meta, StoryObj } from '@storybook/react';

import QueryError from '@/components/query-error';
import Container from '@/components/container';
import Typography from '@/components/typography';
import { Button } from '@/components/ui/button';
import { ComponentProps, FunctionComponent } from 'react';

type CustomArgs = {
    error_name: string;
    error_message: string;
    resetErrorBoundary: () => void;
};

type QueryErrorWithCustomArgs = ComponentProps<typeof QueryError> & CustomArgs;

const meta: Meta<QueryErrorWithCustomArgs> = {
  component: QueryError,
  subcomponents: {
    Container: Container as FunctionComponent<unknown>,
    Typography: Typography as FunctionComponent<unknown>,
    Button: Button as FunctionComponent<unknown>,
  },
  tags: ['autodocs'],
  argTypes: {
    error_name: { control: { type: 'text' } },
    error_message: { control: { type: 'text' } },
    resetErrorBoundary: { control: { type: 'function' } },
    error: {
        table: {
          disable: true,
        },
      },
  },
};

export default meta;
type Story = StoryObj<QueryErrorWithCustomArgs>;

export const Default: Story = {
  args: {
    error_name: 'Type_Error',
    error_message: 'This is an error message',
    resetErrorBoundary: () => console.log('Reset error boundary'),
  },
  render: ({ error_message, error_name, resetErrorBoundary }) => {
    return <QueryError error={{
        message: error_message,
        name: error_name,
    }} resetErrorBoundary={resetErrorBoundary} />;
  },
};