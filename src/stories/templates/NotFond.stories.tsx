import { Meta, StoryObj } from '@storybook/react';

import NotFound from '@/pages/not-found';
import Container from '@/components/container';
import Typography from '@/components/typography';
import { Button } from '@/components/ui/button';
import { FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof NotFound> = {
    component: NotFound,
    subcomponents: {
        Container: Container as FunctionComponent<unknown>,
        Typography: Typography as FunctionComponent<unknown>,
        Button: Button as FunctionComponent<unknown>,
    },
    tags: ['autodocs'],
    decorators: (Story) => {
        return (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        );
    }
};

export default meta;
type Story = StoryObj<typeof NotFound>;

export const Default: Story = {
    render: () => {
        return <NotFound />;
    },
};