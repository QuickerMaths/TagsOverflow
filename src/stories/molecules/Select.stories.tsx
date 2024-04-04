import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from '@storybook/test'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ComponentProps } from "react";

type CustomArgs = {
  selectValuePlaceholder: string;
  options: string[];
};

type SelectWithCustomArgs = ComponentProps<typeof Select> & CustomArgs;

const meta: Meta<SelectWithCustomArgs> = {
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    children: { table: { disable: true } },
    options: { control: { type: "array" } },
    selectValuePlaceholder: { control: { type: "text" } },
  },
};

export default meta;
type Story = StoryObj<SelectWithCustomArgs>;

export const Default: Story = {
  args: {
    selectValuePlaceholder: "Placeholder...",
    options: ["optionOne", "optionTwo", "optionThree"],
  },
  render: ({ selectValuePlaceholder, options }) => (
    <Select>
      <SelectTrigger aria-label={selectValuePlaceholder}>
        <SelectValue placeholder={selectValuePlaceholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const selectTrigger = canvas.getByRole('combobox')

    await userEvent.click(selectTrigger)

    expect(selectTrigger).toHaveAttribute("aria-expanded", "true")
  }
};
