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

// const mock = {
//     "items": [
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 2529138,
//         "name": "javascript"
//       },
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 2192723,
//         "name": "python"
//       },
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 1917446,
//         "name": "java"
//       },
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 1615224,
//         "name": "c#"
//       },
//       {
//         "collectives": [
//           {
//             "tags": [
//               "php"
//             ],
//             "external_links": [
//               {
//                 "type": "support",
//                 "link": "https://stackoverflow.com/contact?topic=15"
//               }
//             ],
//             "description": "A collective where developers working with PHP can learn and connect about the open source scripting language.",
//             "link": "/collectives/php",
//             "name": "PHP",
//             "slug": "php"
//           }
//         ],
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 1464530,
//         "name": "php"
//       },
//       {
//         "collectives": [
//           {
//             "tags": [
//               "android",
//               "ios"
//             ],
//             "external_links": [
//               {
//                 "type": "support",
//                 "link": "https://stackoverflow.com/contact?topic=15"
//               }
//             ],
//             "description": "A collective for developers who want to share their knowledge and learn more about mobile development practices and platforms",
//             "link": "/collectives/mobile-dev",
//             "name": "Mobile Development",
//             "slug": "mobile-dev"
//           }
//         ],
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 1417309,
//         "name": "android"
//       },
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 1187435,
//         "name": "html"
//       },
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 1034811,
//         "name": "jquery"
//       },
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 806810,
//         "name": "c++"
//       },
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 804304,
//         "name": "css"
//       },
//       {
//         "collectives": [
//           {
//             "tags": [
//               "android",
//               "ios"
//             ],
//             "external_links": [
//               {
//                 "type": "support",
//                 "link": "https://stackoverflow.com/contact?topic=15"
//               }
//             ],
//             "description": "A collective for developers who want to share their knowledge and learn more about mobile development practices and platforms",
//             "link": "/collectives/mobile-dev",
//             "name": "Mobile Development",
//             "slug": "mobile-dev"
//           }
//         ],
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 687292,
//         "name": "ios"
//       },
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 670828,
//         "name": "sql"
//       },
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 662035,
//         "name": "mysql"
//       },
//       {
//         "collectives": [
//           {
//             "tags": [
//               "stringr",
//               "r-raster",
//               "r",
//               "shinyapps",
//               "readr",
//               "ggplot2",
//               "knitr",
//               "r-caret",
//               "shinydashboard",
//               "quantmod",
//               "zoo",
//               "tibble",
//               "rlang",
//               "data.table",
//               "dtplyr",
//               "forcats",
//               "tidyr",
//               "plyr",
//               "shiny-server",
//               "lubridate",
//               "shiny",
//               "dplyr",
//               "purrr",
//               "tidyverse",
//               "rstudio",
//               "rvest",
//               "r-package"
//             ],
//             "external_links": [
//               {
//                 "type": "support",
//                 "link": "https://stackoverflow.com/contact?topic=15"
//               }
//             ],
//             "description": "A collective where data scientists and AI researchers gather to find, share, and learn about R and other subtags like knitr and dplyr.",
//             "link": "/collectives/r-language",
//             "name": "R Language",
//             "slug": "r-language"
//           }
//         ],
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 505716,
//         "name": "r"
//       },
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 476843,
//         "name": "reactjs"
//       },
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 472080,
//         "name": "node.js"
//       },
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 416733,
//         "name": "arrays"
//       },
//       {
//         "has_synonyms": false,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 404011,
//         "name": "c"
//       },
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 374628,
//         "name": "asp.net"
//       },
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 360359,
//         "name": "json"
//       },
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 343677,
//         "name": "python-3.x"
//       },
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 338059,
//         "name": "ruby-on-rails"
//       },
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 337941,
//         "name": ".net"
//       },
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 334572,
//         "name": "sql-server"
//       },
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 333447,
//         "name": "swift"
//       },
//       {
//         "has_synonyms": false,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 311867,
//         "name": "django"
//       },
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 304168,
//         "name": "angular"
//       },
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 292330,
//         "name": "objective-c"
//       },
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 286682,
//         "name": "pandas"
//       },
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 286539,
//         "name": "excel"
//       },
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 262755,
//         "name": "angularjs"
//       },
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 260269,
//         "name": "regex"
//       },
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 229829,
//         "name": "typescript"
//       },
//       {
//         "has_synonyms": false,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 229053,
//         "name": "ruby"
//       },
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 227515,
//         "name": "linux"
//       },
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 222027,
//         "name": "ajax"
//       },
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 220730,
//         "name": "iphone"
//       },
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 214696,
//         "name": "xml"
//       },
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 214064,
//         "name": "vba"
//       },
//       {
//         "has_synonyms": false,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 211457,
//         "name": "laravel"
//       },
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 211112,
//         "name": "spring"
//       },
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 201259,
//         "name": "asp.net-mvc"
//       },
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 195133,
//         "name": "database"
//       },
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 192354,
//         "name": "wordpress"
//       },
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 184449,
//         "name": "string"
//       },
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 176339,
//         "name": "flutter"
//       },
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 175937,
//         "name": "mongodb"
//       },
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 175913,
//         "name": "postgresql"
//       },
//       {
//         "has_synonyms": false,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 169630,
//         "name": "wpf"
//       },
//       {
//         "has_synonyms": true,
//         "is_moderator_only": false,
//         "is_required": false,
//         "count": 168756,
//         "name": "windows"
//       }
//     ],
//     "has_more": true,
//     "quota_max": 10000,
//     "quota_remaining": 9695
//   }

export const withQueryData = (WrappedComponent: ComponentType<any & WithQueryDataProps>) => (props: any) => {

// const [isFetching, setFetching] = useState(true)

// useEffect(() => {
//     setFetching(true)
//     setTimeout(() => {
//         setFetching(false)
//     }, 2000)
// }, [])

// const data = mock

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
