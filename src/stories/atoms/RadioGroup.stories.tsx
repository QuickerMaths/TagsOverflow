import { Meta, StoryObj } from '@storybook/react'

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

import { ComponentProps } from 'react'
import { Label } from '@/components/ui/label'

type CustomArgs = {
    label: string
    options: string[]
}

type RadioGroupWithCustomArgs = ComponentProps<typeof RadioGroup> & CustomArgs

const meta: Meta<RadioGroupWithCustomArgs> = {
    component: RadioGroup,
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: { type: 'text' },
        },
        options: {
            control: { type: 'array' },
        },
    },
}

export default meta
type Story = StoryObj<RadioGroupWithCustomArgs>


export const Vertical: Story = {
    args: {
        label: 'Radio Group',
        options: ['popular', 'activity', 'name'],
    },
    render: ({ label, options}) => {
        return (
            <>
                <Label>{label}</Label>
                <RadioGroup defaultValue="popular">
                   {options.map((option) => (
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem aria-label={option} value={option} id={option} />
                        <Label className='capitalize' htmlFor={option}>{option}</Label>
                    </div>
                   ))}
                </RadioGroup>
            </>
        )
    }
}


export const Horizontal: Story = {
    args: {
        label: 'Radio Group',
        options: ['popular', 'activity', 'name'],
    },
    render: ({ label, options}) => {
        return (
            <>
                <Label>{label}</Label>
                <RadioGroup defaultValue="popular" className='flex gap-2'>
                   {options.map((option) => (
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem aria-label={option} value={option} id={option} />
                            <Label className='capitalize' htmlFor={option}>{option}</Label>
                        </div>
                   ))}
                </RadioGroup>
            </>
        )
    }
}
