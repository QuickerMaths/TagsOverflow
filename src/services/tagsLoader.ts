import { QueryClient } from "@tanstack/query-core"
import axios from 'axios'

const API_URL = 'https://api.stackexchange.com/2.3/tags?include=tag.last_activity_date;.total'

export const tagsQueryOptions = {
    queryKey: ['tags'],
    queryFn: () => axios(`${API_URL}&page=1&pagesize=50&order=desc&sort=popular&site=stackoverflow`)
  }

export const tagsLoader = 
    (queryClient: QueryClient) => 
    async () => {
        await queryClient.prefetchQuery(tagsQueryOptions)

        return queryClient.getQueryData(tagsQueryOptions.queryKey)
    }
