import Container from '../container'
import Typography from '../typography'

const RouterError = () => {
  return (
    <main>
        <Container className='h-withoutHeader flex-col-center gap-2'>
          <Typography variant='h2' tag='h1' className='flex items-end gap-2'>
            Ops! Something went
            <Typography variant='h1' tag='span' className='text-red-500'>
                Wrong
            </Typography>
          </Typography>
          <Typography variant='subtitle' tag='p' className='text-center'>
            Please try again later
          </Typography>
        </Container>
    </main>
  )
}

export default RouterError