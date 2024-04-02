import { z } from 'zod'
import { formSchema } from '@/components/form'

interface TagsQueryParams {
    formState: z.infer<typeof formSchema>
}

const API_URL = 'https://api.stackexchange.com'

const useTagsUrl = ({ formState }: TagsQueryParams) => {
    const { inname, order, pagesize, date, minMax, sort, page } = formState
    const { fromdate, todate } = date

    const fromDate = fromdate ? Math.floor(fromdate.getTime()/1000) : undefined
    const toDate = todate ? Math.floor(todate.getTime()/1000) : undefined
    const min = minMax?.min || undefined
    const max = minMax?.max || undefined

    const url = new URL(`${API_URL}/2.3/tags?include=tag.last_activity_date;.total`)

    const setParam = (key: string, value: string | number | undefined) => {
        if (value !== undefined) {
            url.searchParams.set(key, value.toString())
        }
    }

    setParam('page', page)
    setParam('pagesize', pagesize)
    setParam('order', order)
    setParam('sort', sort)
    setParam('site', 'stackoverflow')
    setParam('inname', inname)
    setParam('fromdate', fromDate)
    setParam('todate', toDate)
    setParam('min', min)
    setParam('max', max)

    return url.toString()
}

export default useTagsUrl