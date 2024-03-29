import { Meta, StoryObj } from "@storybook/react";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ComponentProps } from "react";
import { Button } from "@/components/ui/button";

type CustomArgs = {
  triggerChildren: string;
  align: "center" | "start" | "end";
  sideOffset: number;
}

type PopoverWithCustomArgs = ComponentProps<typeof Popover> & CustomArgs;

const meta: Meta<PopoverWithCustomArgs> = {
  component: Popover,
  tags: ["autodocs"],
  argTypes: {
    children: { control: { type: "text" } },
    triggerChildren: { control: { type: "text" } },
    align: { 
      options: ['center', 'start', 'end'],
      control: { type: 'select' },
    },
    sideOffset: { control: 
      { type: "range", min: 0, max: 20, step: 1 } 
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
type Story = StoryObj<PopoverWithCustomArgs> ;

export const Default: Story = {
    args: {
      children: "Popover content",
      triggerChildren: "Popover trigger",
      align: "center",
      sideOffset: 1,
    } satisfies PopoverWithCustomArgs,
    render: ({ children, triggerChildren, align, sideOffset }) => (
        <Popover>
            <PopoverTrigger>
                {triggerChildren}
            </PopoverTrigger>
            <PopoverContent align={align} sideOffset={sideOffset}>{children}</PopoverContent>
        </Popover>
    ),
}

export const WithButton: Story = {
  args: {
    children: "Popover content",
    triggerChildren: "Popover trigger",
    align: "center",
    sideOffset: 1,
  } satisfies PopoverWithCustomArgs,
  render: ({ children, triggerChildren, align, sideOffset }) => (
      <Popover>
          <PopoverTrigger asChild>
              <Button>{triggerChildren}</Button>
          </PopoverTrigger>
          <PopoverContent align={align} sideOffset={sideOffset}>{children}</PopoverContent>
      </Popover>
  ),
}