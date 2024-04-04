import { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'

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
                   {options.map((option, index) => (
                    <div className="flex items-center space-x-2" key={index}>
                        <RadioGroupItem aria-label={option} value={option} id={option} />
                        <Label className='capitalize' htmlFor={option}>{option}</Label>
                    </div>
                   ))}
                </RadioGroup>
            </>
        )
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)

        const radioGroup = canvas.getByRole('radiogroup')

        const radioItems = canvas.getAllByRole('radio')

        expect(radioGroup).toBeInTheDocument()
        expect(radioItems).toHaveLength(3)

        const radioItem = radioItems[1]

        await userEvent.click(radioItem)

        expect(radioItem).toBeChecked()
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
                   {options.map((option, index) => (
                        <div className="flex items-center space-x-2" key={index}>
                            <RadioGroupItem aria-label={option} value={option} id={option} />
                            <Label className='capitalize' htmlFor={option}>{option}</Label>
                        </div>
                   ))}
                </RadioGroup>
            </>
        )
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)

        const radioGroup = canvas.getByRole('radiogroup')

        const radioItems = canvas.getAllByRole('radio')

        expect(radioGroup).toBeInTheDocument()
        expect(radioItems).toHaveLength(3)

        const radioItem = radioItems[2]

        await userEvent.click(radioItem)

        expect(radioItem).toBeChecked()
    }
}
