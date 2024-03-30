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
  align: "start" | "end" | "center";
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
    align: {
      control: {
        type: "radio",
      },
      options: ["start", "end", "center"],
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
type Story = StoryObj<DropdownMenuWithCustomArgs>;

export const Default: Story = {
  args: {
    triggerChildren: "Dropdown Menu",
    labelChildren: "Dropdown Menu Label",
    itemChildren: "Dropdown Menu Item",
    disabled: true,
    align: "center",
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
    align: "center",
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

import { Moon, Sun } from "lucide-react"


export const  ModeToggle: Story = {
  args: {
    triggerChildren: "Dropdown Menu",
    labelChildren: "Dropdown Menu Label",
    itemChildren: "Dropdown Menu Item",
    disabled: true,
    align: "end",
  } satisfies DropdownMenuWithCustomArgs,
  render: ({
    align
  }: DropdownMenuWithCustomArgs) => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align={align}>
          <DropdownMenuItem>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
}
