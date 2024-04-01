import Container from '../container'
import { Skeleton } from '../ui/skeleton'

const FormSkeleton = () => {
  return (
    <Container>
      <div className="grid grid-cols-6 md:grid-cols-10 grid-rows-3 md:grid-rows-2 gap-2 lg:gap-x-10">
        <Skeleton className="h-[40px] col-start-1 md:col-start-3 col-end-7 md:col-end-9 row-start-1 row-end-1"/> 
        <Skeleton className="h-[40px] col-start-1 col-end-4 md:col-end-3 row-start-2 md:row-start-1 row-end-2 md:row-end-1"/>
        <Skeleton className="h-[40px] col-start-4 md:col-start-9 col-end-7 md:col-end-11 row-start-2 md:row-start-1 row-end-3 md:row-end-1"/>
        <Skeleton className="h-[40px] col-start-3 md:col-start-5 col-end-5 md:col-end-7 row-start-3 md:row-start2 row-end-3 md:row-end-2" />
      </div>
    </Container>  
  )
}

export default FormSkeleton