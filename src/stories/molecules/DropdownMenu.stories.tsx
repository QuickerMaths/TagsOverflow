import { Meta, StoryObj } from "@storybook/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ComponentProps } from "react";
import { Button } from "@/components/ui/button";

type CustomArgs = {
  triggerChildren: string;
  labelChildren: string;
  itemChildren: string;
  disabled: boolean;
};

type DropdownMenuWithCustomArgs = ComponentProps<typeof DropdownMenu> &
  CustomArgs;

const meta: Meta<DropdownMenuWithCustomArgs> = {
  component: DropdownMenu,
  tags: ["autodocs"],
  argTypes: {
    triggerChildren: { control: { type: "text" } },
    labelChildren: { control: { type: "text" } },
    itemChildren: { control: { type: "text" } },
    disabled: { control: { type: "boolean" } },
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
type Story = StoryObj<DropdownMenuWithCustomArgs>;

export const Default: Story = {
  args: {
    triggerChildren: "Dropdown Menu",
    labelChildren: "Dropdown Menu Label",
    itemChildren: "Dropdown Menu Item",
    disabled: true,
  } satisfies DropdownMenuWithCustomArgs,
  render: ({
    triggerChildren,
    labelChildren,
    itemChildren,
    disabled,
  }: DropdownMenuWithCustomArgs) => (
    <DropdownMenu>
      <DropdownMenuTrigger>{triggerChildren}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{labelChildren}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>{itemChildren}</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>{itemChildren}</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled={disabled}>{itemChildren}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const WithButton: Story = {
  args: {
    triggerChildren: "Dropdown Menu",
    labelChildren: "Dropdown Menu Label",
    itemChildren: "Dropdown Menu Item",
    disabled: true,
  } satisfies DropdownMenuWithCustomArgs,
  render: ({
    triggerChildren,
    labelChildren,
    itemChildren,
    disabled,
  }: DropdownMenuWithCustomArgs) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>{triggerChildren}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{labelChildren}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>{itemChildren}</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>{itemChildren}</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled={disabled}>{itemChildren}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};
