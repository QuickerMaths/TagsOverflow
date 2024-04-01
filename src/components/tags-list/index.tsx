import { useLoaderData } from "react-router"
import Tag from "../tag"
import { z } from 'zod'

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
  items: z.array(TagSchema)
})


const TagsList = () => {
  const data = useLoaderData() as { data: unknown }

  const tags = TagsSchema.parse(data.data)

  return (  
    <ul className="mt-5 grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
      {tags.items.map((tag: TagType) => (
        <Tag key={tag.name} tag={tag} />
      ))}
    </ul>
  )
}

export default TagsList

