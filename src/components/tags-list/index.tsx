import { useLoaderData } from "react-router"
import Tag from "../tag"
import { z } from 'zod'
import { useQuery } from "@tanstack/react-query"
import { tagsQueryOptions } from "@/services/tagsLoader"
import TagsListSkeleton from "../tag-list-skeleton"

const TagSchema = z.object({
  count: z.number(),
  name: z.string(),
  has_synonyms: z.boolean(),
  is_moderator_only: z.boolean(),
  is_required: z.boolean(),
  last_activity_date: z.number().optional(),
  collectives: z.unknown().optional()
})

export type TagType = z.infer<typeof TagSchema>

const TagsSchema = z.object({
  has_more: z.boolean(),
  items: z.array(TagSchema),
  quota_max: z.number(),
  quota_remaining: z.number(),
  error_message: z.string().optional(),
  error_name: z.string().optional(),
  error_id: z.number().optional(),
  total: z.number().optional()
})

const TagsList = () => {
  const initialTags = useLoaderData() as { data: unknown }

  const { data, isFetching } = useQuery({
    ...tagsQueryOptions,
    initialData: initialTags
  })

  if(isFetching) {
    return <TagsListSkeleton />
  }
 

  const safeTags = TagsSchema.parse(data.data)

  return (  
    <ul className="mt-5 grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
      {safeTags.items.map((tag: TagType) => (
        <Tag key={tag.name} tag={tag} />
      ))}
    </ul>
  )
}

export default TagsList

