import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "@/components/ui/input";

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: { type: "text" },
    },
    type: {
      options: ["text", "password", "email", "number"],
      control: { type: "select" },
    },
    disabled: { control: { type: "boolean" } },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Input",
    disabled: false,
    type: "text",
  },
  render: (args) => <Input {...args} />,
};
