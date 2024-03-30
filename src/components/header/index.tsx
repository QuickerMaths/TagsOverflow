import Container from '../container'
import { ModeToggle } from '../mode-toggle'
import Typography from '../typography'

const Header = () => {
  return (
    <div className='w-full border-b border-primary'>
        <Container className="flex-between">
            <Typography tag='h2' variant='h1'>TagsOverflow</Typography>
            <ModeToggle />
        </Container>
    </div>
  )
}

export default Header