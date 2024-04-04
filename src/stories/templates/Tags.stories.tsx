import { Meta, StoryObj } from '@storybook/react'

import Tags from '@/pages/tags'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import TagsProvider from '@/context/tags-context'
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router'
import { lazy } from 'react'

const meta: Meta<typeof Tags> = {
    component: Tags,
    tags: ['autodocs'],
    parameters: {
        reactRouter: reactRouterParameters({
          routing: {
            path: '/',
            Component: lazy(() => import('../../components/layout/index')),
            children: [{
                index: true,
                loader: () => import('../../services/tagsLoader'),
                ErrorBoundary: () => (<div>Router Error</div>),
                Component: lazy(() => import('../../pages/tags/index'))
            },
            {
                path: '*',
                Component: lazy(() => import('../../pages/not-found/index'))
            }]
            
          },
        }),
      },
    decorators:[
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
        }
    ]
}

export default meta
type Story = StoryObj<typeof Tags>

export const Default: Story = {
    render: () => {
        return <Tags />
    },
}