import { Meta, StoryObj } from '@storybook/react';

import TagsList from '@/components/tags-list';
import Tag from '@/components/tag';
import TagsListSkeleton from '@/components/tag-list-skeleton';
import Pagination from '@/components/pagination';
import { FunctionComponent } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TagsProvider from '@/context/tags-context';

type TagsListProps = {
};

const meta: Meta<TagsListProps> = {
  component: TagsList,
  subcomponents: {
    Tag: Tag as FunctionComponent<unknown>,
    TagsListSkeleton: TagsListSkeleton as FunctionComponent<unknown>,
    Pagination: Pagination as FunctionComponent<unknown>,
  },
  tags: ['autodocs'],
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
type Story = StoryObj<TagsListProps>;

export const Default: Story = {
  render: () => {
    return <TagsList />;
  },
};

