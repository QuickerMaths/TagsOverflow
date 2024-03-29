import type { Meta, StoryObj } from '@storybook/react';

import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';
import { DateRange } from "react-day-picker"


const meta: Meta<typeof Calendar> = {
  component: Calendar,
  tags: ['autodocs'],
  argTypes: {
    showOutsideDays: { control: { type: 'boolean' } },
    pagedNavigation: { control: { type: 'boolean' } },
    numberOfMonths: { control: { type: 'number' } },
    fixedWeeks: { control: { type: 'boolean' } },
    ISOWeek: { control: { type: 'boolean' } },
    defaultMonth: { control: { type: 'date' } },
    disableNavigation: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
  },
  decorators: [
    (Story) => (
      <div className='flex justify-center items-center'>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const SingleMode: Story = {
  args: {
    showOutsideDays: true,
    pagedNavigation: false,
    numberOfMonths: 1,
    fixedWeeks: false,
    defaultMonth: new Date(),
    ISOWeek: false,
    disableNavigation: false,
    disabled: false,
  },
  render: (args) => {
    const [date, setDate] = useState<Date | undefined>(new Date())

    return (
      <Calendar
        {...args}
        mode='single'
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    )
  }
};

export const MultipleMode: Story = {
  args: {
    showOutsideDays: true,
    pagedNavigation: false,
    numberOfMonths: 1,
    fixedWeeks: false,
    defaultMonth: new Date(),
    ISOWeek: false,
    disableNavigation: false,
    disabled: false,
  },
  render: (args) => {
    const initialDays: Date[] = [];
    const [days, setDays] = useState<Date[] | undefined>(initialDays);

    return (
      <Calendar
        {...args}
        mode='multiple'
        selected={days}
        onSelect={setDays}
        className="rounded-md border"
      />
    )
  }
};

export const RageMode: Story = {
  args: {
    showOutsideDays: true,
    pagedNavigation: false,
    numberOfMonths: 1,
    fixedWeeks: false,
    defaultMonth: new Date(),
    ISOWeek: false,
    disableNavigation: false,
    disabled: false,
  },
  render: (args) => {
    const [range, setRange] = useState<DateRange | undefined>();

    return (
      <Calendar
        {...args}
        mode='range'
        selected={range}
        onSelect={setRange}
        className="rounded-md border"
      />
    )
  }
};