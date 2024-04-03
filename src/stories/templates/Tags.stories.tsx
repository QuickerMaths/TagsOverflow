import { Meta, StoryObj } from '@storybook/react'

import Tags from '@/pages/tags'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import TagsProvider from '@/context/tags-context'

const meta: Meta<typeof Tags> = {
    component: Tags,
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
}

export default meta
type Story = StoryObj<typeof Tags>

export const Default: Story = {
    render: () => {
        return <Tags />
    },
}