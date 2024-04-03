import { Meta, StoryObj } from '@storybook/react'
import { ComponentProps, FunctionComponent } from 'react'

import DatePicker from '@/components/date-picker'
import * as Calendar from '@/stories/molecules/Calendar.stories'
import { Popover } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { Form, FormLabel, FormField, FormItem, FormDescription, FormMessage } from '@/components/ui/form'
import { cn } from '@/utils/cn'

type CustomArgs = { 
  label: string,
  description: string,
  showDescription: boolean,
  showLabel: boolean,
  showOutsideDays: boolean,
}

type DatePickerWithCustomArgs = ComponentProps<typeof DatePicker> & CustomArgs

const meta: Meta<DatePickerWithCustomArgs> = {
  component: DatePicker,
  subcomponents: { 
    Calendar: Calendar as unknown as FunctionComponent<unknown>,
    Popover: Popover as FunctionComponent<unknown>,
    Button: Button as FunctionComponent<unknown>,
    From: Form as FunctionComponent<unknown>,
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
    showDescription: {
      control: { type: 'boolean' },
    },
    showLabel: {
      control: { type: 'boolean' },
    },
    showOutsideDays: {
      control: { type: 'boolean' },
    },
  },
}   

export default meta;

type Story = StoryObj<DatePickerWithCustomArgs>

export const Default: Story = {
  args: {
    label: 'Search Range',
    description: 'Select the date to see tags created within that time period.',
    showDescription: false,
    showLabel: true,
    showOutsideDays: Calendar.default.args?.showOutsideDays,
  },
  render: ({ label, description, showDescription, showLabel }) => {
    const form = useForm({
        defaultValues: { 
            date: { fromdate: null, todate: null }
        },
    })
    
    return (
        <Form {...form}>
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className='flex flex-col'>
                  <FormLabel className={cn(!showLabel && "sr-only")}>{label}</FormLabel>
                  {/* @ts-ignore */}
                  <DatePicker field={field} />
                  <FormDescription className={cn(!showDescription && "sr-only")}>
                    {description}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
        </Form>
    )
  },
}