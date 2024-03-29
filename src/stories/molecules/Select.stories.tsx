import { Meta, StoryObj } from "@storybook/react";

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
};

type SelectWithCustomArgs = ComponentProps<typeof Select> & CustomArgs;

const meta: Meta<SelectWithCustomArgs> = {
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    children: { table: { disable: true } },
    selectValuePlaceholder: { control: { type: "text" } },
  },
  decorators: [
    (Story) => (
      <div className="flex justify-center items-center">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<SelectWithCustomArgs>;

export const Default: Story = {
  args: {
    children: "Option 1",
    selectValuePlaceholder: "Placeholder...",
  },
  render: ({ selectValuePlaceholder }) => (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder={selectValuePlaceholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={"optionOne"}>Option 1</SelectItem>
        <SelectItem value={"optionTwo"}>Option 2</SelectItem>
        <SelectItem value={"optionThree"}>Option 3</SelectItem>
      </SelectContent>
    </Select>
  ),
};
