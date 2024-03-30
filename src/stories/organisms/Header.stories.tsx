import { Meta, StoryObj } from '@storybook/react'

import Header from '@/components/header'
import Typography from '@/components/typography'
import { ModeToggle } from '@/components/mode-toggle'
import Container from '@/components/container'
import { FunctionComponent } from 'react'

const meta: Meta<typeof Header>= {
    component: Header,
    subcomponents: { 
        Typography: Typography as FunctionComponent<unknown>,
        ModeToggle,
        Container: Container as FunctionComponent<unknown>,
    },
    tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof Header>

export const Default: Story = {
    render: () => <Header />,
}