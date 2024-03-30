import { Meta, StoryObj } from '@storybook/react';

import Container from '@/components/container'
import { Button } from '@/components/ui/button';
import { ComponentProps } from 'react';

type CustomArgs = {
    className?: string
}

type ContainerWithCustomArgs = ComponentProps<typeof Container> & CustomArgs

const meta: Meta<ContainerWithCustomArgs> = {
    component: Container,
    tags: ['autodocs'],
    argTypes: {
        className: { control: { type: 'disabled' } },
        children: { control: { type: 'disabled' } }
    }
}

export default meta
type Story = StoryObj<ContainerWithCustomArgs>

export const Default: Story = {
    args: {
        children: <Button>Button</Button>,
        className: ''
    },
    render: ({ children }) => (
        <Container className={'border flex-center border-black dark:border-white'}>
            {children}
        </Container>
    )
}