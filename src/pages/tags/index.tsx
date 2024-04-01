import Container from '@/components/container'
import FormSkeleton from '@/components/form-skeleton'
import Typography from '@/components/typography'
import { Suspense, lazy } from 'react'
import TagsListSkeleton from '@/components/tag-list-skeleton'

const Form = lazy(() => import('@/components/form'))
const TagsList = lazy(() => import('@/components/tags-list'))

const Tags = () => {
  return (
    <main>
      <Container>
        <Suspense fallback={<FormSkeleton />}>
          <Form />
        </Suspense>
        <Typography variant="h1" tag='h1' className="inline">Tags</Typography>
        <Suspense fallback={<TagsListSkeleton />}>
          <TagsList />
        </Suspense>
      </Container>
    </main> 
  )
}

export default Tags
