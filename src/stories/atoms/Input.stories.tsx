import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from '@storybook/test'

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
    onChange: fn(),
    onFocus: fn(),
  },
  render: (args) => <Input {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = canvas.getByRole("textbox");

    await userEvent.type(input, "Hello, World!");

    expect(input).toHaveValue("Hello, World!");
  }
};
