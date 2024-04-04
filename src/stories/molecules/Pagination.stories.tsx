import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from '@storybook/test'

import Pagination from "@/components/pagination";
import { Button } from "@/components/ui/button";
import { FunctionComponent } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TagsProvider from "@/context/tags-context";

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  tags: ["autodocs"],
  subcomponents: {
    Button: Button as FunctionComponent<unknown>,
  },
  argTypes: {
    has_more: { 
      control: { type: "boolean" },
      description: "Coming from stackoverflow API. If there are more pages to show it displays the next button.",
    },
    total: { 
      control: { type: "number" },
      description: "Total number of items. Used to calculate the last page.",
    },
  },
  decorators: (Story) => {
    const queryClient = new QueryClient()
    return (
      <QueryClientProvider client={queryClient}>
          <TagsProvider>
              <Story />
          </TagsProvider>
      </QueryClientProvider>
    )
  }
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    has_more: true,
    total: 1000,
  },
  render: (args) => <Pagination {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const nextButton = canvas.getByRole('button', { name: /next/i })

    await userEvent.click(nextButton)
    await userEvent.click(nextButton)
    await userEvent.click(nextButton)

    const previousButton = await canvas.findByRole('button', { name: /previous/i })

    await userEvent.click(previousButton)

    const activeButton = await canvas.findByRole('button', { name: /3/i })

    expect(activeButton).toBeInTheDocument()
  }
};

