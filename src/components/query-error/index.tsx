import Container from '../container'
import Typography from '../typography'
import { Button } from '../ui/button'

interface QueryErrorProps {
    error: Error
    resetErrorBoundary: () => void
}
const QueryError = ({error, resetErrorBoundary}: QueryErrorProps) => {
  return (
        <Container className='py-20 flex-col-center gap-2'>
          <Typography variant='h2' tag='h1' className='flex items-end gap-2'>
            Ops! We have an
            <Typography variant='h1' tag='span' className='text-red-500'>
                Error
            </Typography>
          </Typography>
          {error.message && error.name && (
            <Typography variant='subtitle' tag='p' className='text-red-500 text-center'>
              {error.name}: <Typography variant='span' tag='span'>{error.message}</Typography>
            </Typography>
          )}
          <Button onClick={resetErrorBoundary} variant="outline" className='mt-5'>Try again</Button>
        </Container>
  )
}

export default QueryError