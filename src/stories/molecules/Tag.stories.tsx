import { Meta, StoryObj } from '@storybook/react';

import Tag from '@/components/tag';
import Typography from '@/components/typography';
import { TagType } from '@/components/tags-list';
import { FunctionComponent } from 'react';

type TagProps = {
    tag: TagType;
};

const meta: Meta<TagProps> = {
  component: Tag,
  subcomponents: {
    Typography: Typography as FunctionComponent<unknown>,
  },
  tags: ['autodocs'],
  argTypes: {
      tag: { 
        description: 'Tag object with the following properties: name, count, last_activity_date (timestamp format), is_moderator_only, is_required, has_synonyms',
        table: {
            type: {
                summary: 'TagType',
            },
        },
    },
  },
  decorators: (Story) => {
    return (
      <ul className='w-1/5 list-none'>
        <Story />
      </ul>
    );
  }
};

export default meta;
type Story = StoryObj<TagProps>;

export const Default: Story = {
  args: {
    tag: {
        name: 'Tag Name',
        count: 10,
        last_activity_date: 1631452800,
        is_moderator_only: false,
        is_required: false,
        has_synonyms: false,
    },
  },
  render: ({ tag }) => {
    return <Tag tag={tag} />;
  },
};