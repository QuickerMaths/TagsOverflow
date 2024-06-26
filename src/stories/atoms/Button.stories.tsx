import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from '@storybook/test'

import { IoSearchOutline } from "react-icons/io5";

import { Button } from "@/components/ui/button";
import { ComponentProps } from "react";

type CustomArgs = {
  icon: React.ReactNode;
};

type ButtonWithCustomArgs = ComponentProps<typeof Button> & CustomArgs;

const meta: Meta<ButtonWithCustomArgs> = {
  component: Button,
  tags: ['autodocs'],
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
      control: { type: "disabled" },
    },
    disabled: { control: { type: "boolean" } },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<ButtonWithCustomArgs>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
    children: "Button",
    disabled: false,
    onClick: fn()
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
  play: async ({ canvasElement, args }) => {
  const canvas = within(canvasElement)

  const button = await canvas.findByRole('button')

  await userEvent.click(button)

  expect(args.onClick).toHaveBeenCalledOnce()
  }
};

export const WithIcon: Story = {
  args: {
    variant: "default",
    size: "icon",
    icon: <IoSearchOutline />,
    disabled: false,
    onClick: fn(),
    onFocus: fn(),
  },
  render: (args) => <Button {...args} aria-label="button-with-icon">{args.icon}</Button>,
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
  
    const button = await canvas.findByRole('button')
  
    await userEvent.click(button)
  
    expect(args.onClick).toHaveBeenCalledOnce()
  }
};