import { Meta, StoryObj } from '@storybook/react'

import Form from '@/components/form'
import { ComponentProps, FunctionComponent } from 'react'
import TagsProvider from '@/context/tags-context'
import {  
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { Drawer } from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import { RadioGroup } from '@/components/ui/radio-group'
import { Select } from '@/components/ui/select'
import DatePicker from '@/components/date-picker'
import { Input } from '@/components/ui/input'
import Typography from '@/components/typography'

type CustomArgs = {}

type FormWithCustomArgs = ComponentProps<typeof Form> & CustomArgs

const meta: Meta<FormWithCustomArgs> = {
    component: Form,
    subcomponents: {
        Drawer: Drawer as FunctionComponent<unknown>,
        Button: Button as FunctionComponent<unknown>,
        RadioGroup: RadioGroup as FunctionComponent<unknown>,
        Select: Select as FunctionComponent<unknown>,
        DatePicker: DatePicker as FunctionComponent<unknown>,
        Input: Input as FunctionComponent<unknown>,
        Typography: Typography as FunctionComponent<unknown>,
    },
    tags: ['autodocs'],
    decorators: (Story) => {
        const queryClient = new QueryClient()
        return (
            <div className='flex justify-center items-center'>
                <QueryClientProvider client={queryClient}>
                    <TagsProvider>
                        <Story />
                    </TagsProvider>
                </QueryClientProvider>
            </div>
        )
    }
}

export default meta
type Story = StoryObj<FormWithCustomArgs>

export const Default: Story = {
    render: () => {
        return (
            <Form />
        )
    },
}
