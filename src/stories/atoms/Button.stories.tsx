import type { Meta, StoryObj } from "@storybook/react";

import { IoSearchOutline } from "react-icons/io5";

import { Button } from "@/components/ui/button";
import { ComponentProps } from "react";

type CustomArgs = {
  icon: React.ReactNode;
};

type ButtonWithCustomArgs = ComponentProps<typeof Button> & CustomArgs;

const meta: Meta<ButtonWithCustomArgs> = {
  component: Button,
  argTypes: {
    variant: {
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      control: { type: "select" },
    },
    size: {
      options: ["default", "sm", "lg", "icon"],
      control: { type: "select" },
      if: { arg: "size", neq: "icon" },
    },
    children: {
      control: { type: "text" },
      if: { arg: "size", neq: "icon" },
    },
    icon: {
      control: { type: "text" },
    },
    disabled: { control: { type: "boolean" } },
    asChild: {
      table: {
        disable: true,
      },
    },
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
type Story = StoryObj<ButtonWithCustomArgs>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
    children: "Button",
    disabled: false,
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

export const WithIcon: Story = {
  args: {
    variant: "default",
    size: "icon",
    icon: <IoSearchOutline />,
    disabled: false,
  },
  render: (args) => <Button {...args}>{args.icon}</Button>,
};