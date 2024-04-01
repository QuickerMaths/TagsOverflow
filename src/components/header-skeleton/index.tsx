import { Skeleton } from '../ui/skeleton' 
import Container from '../container'

const HeaderSkeleton = () => {
  return (
    <header className='w-full border-b border-primary'>
        <Container className="flex-between">
            <Skeleton className='h-[28px] w-[160px] md:h-[40px] md:w-[280px] lg:h-[48px] lg:w-[383px]' />
            <Skeleton className='h-[40px] w-[40px]' />
        </Container>
    </header>
  )
}

export default HeaderSkeleton