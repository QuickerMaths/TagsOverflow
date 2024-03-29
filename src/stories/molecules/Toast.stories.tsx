import { Meta, StoryObj } from '@storybook/react';

import { Toaster } from "@/components/ui/toaster"
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const meta: Meta<typeof Toaster> = {
    component: Toaster,
    tags: ['autodocs'],
    argTypes: {
        children: { table: { disable: true } }, 
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
type Story = StoryObj<typeof Toaster> ;

export const Default: Story = {
    render: () => {
        const { toast } = useToast()

        return (
        <>
          <Toaster />
          <Button
          onClick={() => {
            toast({
              title: "Scheduled: Catch up",
              description: "Friday, February 10, 2023 at 5:57 PM",
            })
          }}
          >
            Show Toast
          </Button>
        </>        
        )
    }
}


