import { Meta, StoryObj } from "@storybook/react";
import { Title, Stories, Controls } from '@storybook/addon-docs';

import { Toaster } from "@/components/ui/toaster";
import { Toast, ToastAction } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ComponentProps } from "react";


type CustomArgs = {
  description: string;
  duration: number;
  action: string;
}

type ToastWithCustomArgs = ComponentProps<typeof Toast> & CustomArgs;

const meta: Meta<ToastWithCustomArgs> = {
  component: Toaster,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Stories />
          <Controls />
          <Toaster />
        </>
      ) 
    },
  },
  argTypes: {
    children: { table: { disable: true } },
    variant: { 
      control: { type: "select" },
      options: ["default", "destructive"]
    },
    title: { control: { type: "text" } },
    description: { control: { type: "text" } },
    duration: { control: { type: "number" } },
    action: { control: { type: "text" } },
  },
};

export default meta;
type Story = StoryObj<ToastWithCustomArgs>;

export const Default: Story = {
  args: {
    title: "Scheduled: Catch up",
    description: "Friday, February 10, 2023 at 5:57 PM",
    duration: 5000,
    action: "Dismiss",
  },
  render: ({
    title,
    description,
    variant,
    duration,
  }) => {
    const { toast } = useToast();
    const urlParams = new URLSearchParams(document.location.search)
    const viewMode = urlParams.get("viewMode");

    return (
      <>
        {/* 
        This is expression only renders Toaster component when user is in Story view. 
        This prevents toast from appearing in Docs.
         */}
        {viewMode === "story" && <Toaster />}
        <Button
          onClick={() => {
            toast({
              title,
              description,
              variant,
              duration,
            });
          }}
        >
          Show Toast
        </Button>
      </>
    );
  }
};

export const WithAction: Story = {
  args: {
    title: "Scheduled: Catch up",
    description: "Friday, February 10, 2023 at 5:57 PM",
    duration: 5000,
    action: "Dismiss",
  },
  render: ({
    title,
    variant,
    description,
    duration,
    action,
  }) => {
    const { toast } = useToast();
    const urlParams = new URLSearchParams(document.location.search)
    const viewMode = urlParams.get("viewMode");

    return (
      <>
        {/* 
        This is expression only renders Toaster component when user is in Story view. 
        This prevents toast from appearing in Docs.
         */}
        {viewMode === "story" && <Toaster />}
        <Button
          onClick={() => {
            toast({
              title,
              description,
              variant,
              duration,
              action: (
                <ToastAction altText="Dismiss" onClick={() => {}}>
                  {action}
                </ToastAction>
              )
            });
          }}
        >
          Show Toast
        </Button>
      </>
    );
  }
};