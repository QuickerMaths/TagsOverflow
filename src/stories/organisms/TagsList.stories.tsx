import { Meta, StoryObj } from '@storybook/react';

import TagsList from '@/components/tags-list';
import Tag from '@/components/tag';
import TagsListSkeleton from '@/components/tag-list-skeleton';
import Pagination from '@/components/pagination';
import { FunctionComponent, lazy } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TagsProvider from '@/context/tags-context';
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router';




const meta: Meta<typeof TagsList> = {
  component: TagsList,
  subcomponents: {
    Tag: Tag as FunctionComponent<unknown>,
    TagsListSkeleton: TagsListSkeleton as FunctionComponent<unknown>,
    Pagination: Pagination as FunctionComponent<unknown>,
  },
  parameters: {
    reactRouter: reactRouterParameters({
      routing: {
        path: '/',
        Component: lazy(() => import('../../components/tags-list/index')),
        loader: () => import('../../services/tagsLoader'),
        ErrorBoundary: () => (<div>Router Error</div>),
      }
    }),
  },
  tags: ['autodocs'],
  decorators: [
    withRouter,
    (Story) => {
      const queryClient = new QueryClient()

      return (
        <QueryClientProvider client={queryClient}>
            <TagsProvider>
                <Story />
            </TagsProvider>
        </QueryClientProvider>
      )
  }]
};

export default meta;
type Story = StoryObj<typeof TagsList>;

export const Default: Story = {
  render: () => {
    return <TagsList />;
  },
};

