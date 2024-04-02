import Container from '@/components/container'
import FormSkeleton from '@/components/form-skeleton'
import Typography from '@/components/typography'
import { Suspense, lazy } from 'react'
import TagsListSkeleton from '@/components/tag-list-skeleton'
import { ErrorBoundary } from 'react-error-boundary'
import { QueryErrorResetBoundary } from '@tanstack/react-query'
import QueryError from '@/components/query-error'

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
        <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary
              fallbackRender={({ error, resetErrorBoundary }) => (
                <QueryError error={error} resetErrorBoundary={resetErrorBoundary} />
              )}
              onReset={reset}
            >
            <Suspense fallback={<TagsListSkeleton />}>
              <TagsList />
            </Suspense>
           </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
      </Container>
    </main> 
  )
}

export default Tags
