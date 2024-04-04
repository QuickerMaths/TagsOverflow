import { ComponentType, Suspense, useEffect, useState } from 'react';
import { tagsQueryOptions } from "@/services/tagsLoader"
import { useLoaderData } from "react-router"
import { useSuspenseQuery } from '@tanstack/react-query';
import TagsListSkeleton from '@/components/tag-list-skeleton';
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
  
  export const TagsSchema = z.object({
    has_more: z.boolean(),
    items: z.array(TagSchema),
    quota_max: z.number(),
    quota_remaining: z.number(),
    error_message: z.string().optional(),
    error_name: z.string().optional(),
    error_id: z.number().optional(),
    total: z.number()
  })
  

type WithQueryDataProps = {
  isFetching: boolean;
  data: unknown;
  safeTags: z.infer<typeof TagsSchema>
};

export const withQueryData = (WrappedComponent: ComponentType<any & WithQueryDataProps>) => (props: any) => {

  const initialTags = useLoaderData() as { data: unknown }
  
  const { data, error, isFetching } = useSuspenseQuery({
    ...tagsQueryOptions,
    initialData: initialTags
  })

  if(error) {
    throw error
  }

  const safeTags = TagsSchema.parse(data.data)


  return (
    <Suspense fallback={<TagsListSkeleton />}>
        <WrappedComponent {...props} isFetching={isFetching} data={data} safeTags={safeTags} />
    </Suspense>
  );
}
