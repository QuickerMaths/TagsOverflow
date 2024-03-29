import { Meta, StoryObj } from "@storybook/react";

import { Label } from "@/components/ui/label";

const meta: Meta<typeof Label> = {
    component: Label,
    tags: ["autodocs"],
    argTypes: {
        children: { control: { type: "text" } },
    },
    decorators: [
        (Story) => (
        <div className="flex justify-center items-center">
            <Story />
        </div>
        ),
    ],
}

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
    args: {
        children: "Label",
    },
    render: ({ children }) => (
        <Label>{children}</Label>
    ),
};
