import type { Meta, StoryObj } from "@storybook/react";

import { Skeleton } from "@/components/ui/skeleton";
import HeaderSkeleton from "@/components/header-skeleton";
import FormSkeleton from "@/components/form-skeleton";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TagsProvider from "@/context/tags-context";


const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  tags: ["autodocs"],
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
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ),
};

export const Header: Story = {
  render: () => <HeaderSkeleton />,
};

export const Form: Story = {
  render: () => <FormSkeleton />,
};

export const TagsList: Story = {
  render: () => {
    return (
      <ul className="w-full my-5 grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {Array.from({ length: 10 }).map((_, i) => (
          <Skeleton key={i} className="h-[110px] sm:h-[114px] md:h-[118px] lg:h-[122px] border border-ring " />
        ))}
      </ul>
    )
  }
};