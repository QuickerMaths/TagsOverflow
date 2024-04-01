import { Skeleton } from "../ui/skeleton"
import { useTagsProvider } from "@/context/tags-context"

const TagsListSkeleton = () => {
  const { state } = useTagsProvider()
  return (  
    <ul className="mt-5 grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
      {Array.from({ length: state.pagesize }).map((_, i) => (
        <Skeleton key={i} className="h-[110px] sm:h-[114px] md:h-[118px] lg:h-[122px] border border-ring " />
      ))}
    </ul>
  )
}

export default TagsListSkeleton