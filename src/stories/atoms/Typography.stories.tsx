import { Meta, StoryObj } from '@storybook/react';
import { Title, Stories, Controls } from '@storybook/addon-docs';

import Typography from '@/components/typography';
import { ComponentProps } from 'react';

type CustomArgs = {
    className?: string
}

export type TypographyWithCustomArgs = ComponentProps<typeof Typography> & CustomArgs

const meta: Meta<TypographyWithCustomArgs> = {
    component: Typography,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title />
                    <Stories />
                    <Controls />
                </>
            )
        }
    },
    argTypes: {
        className: { 
            control: { type: 'disabled' },
        },
        children: { 
            control: { type: 'text' }
        },
        variant: {
            control: 'radio',
            options: ['h1', 'h2', 'h3', 'subtitle', 'paragraph', 'span']
        },
        tag: {
            control: 'radio',
            options: ['h1', 'h2', 'h3', 'h3', 'p', 'span']
        }
    }
}

export default meta
type Story = StoryObj<TypographyWithCustomArgs>

export const Default: Story = {
    render: () => (
        <div className='flex-col-center gap-y-5'>
            <Typography variant='h1' tag='h1'>
                h1.heading
            </Typography>
            <Typography variant='h2' tag='h2'>
                h2.heading
            </Typography>
            <Typography variant='h3' tag='h3'>
                h3.heading
            </Typography>
            <Typography variant='subtitle' tag='h4'>
                h4.heading
            </Typography>
            <Typography variant='paragraph' tag='p'>
                p.paragraph
            </Typography>
            <Typography variant='span' tag='span'>
                span.span
            </Typography>
        </div>
    )
}


export const Playground: Story = {
    args: {
        children: 'Typography',
        className: '',
        variant: 'h1',
        tag: 'h1'
    },
    render: ({ children, tag, variant, className} ) => {
        return (
            <Typography tag={tag} className={className} variant={variant}>
                {children}
            </Typography>
        )
    }
}
