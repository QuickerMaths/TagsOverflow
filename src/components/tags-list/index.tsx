import Tag from "../tag"
import TagsListSkeleton from "../tag-list-skeleton"
import { stagger, useAnimate } from "framer-motion"
import { useEffect } from "react"
import Pagination from "../pagination"
import { withQueryData } from "@/hoc/withQueryData"
import { TagType } from "@/hoc/withQueryData"

interface TagsListProps {
  isFetching: boolean
  data: any
  safeTags: any
}

const TagsList = ({ isFetching, data, safeTags }: TagsListProps) => {
    const [scope, animate] = useAnimate()
  
    useEffect(() => {
      if(scope.current === null) return
      animate('div', { opacity: [0, 1], scale: [1.1, 1] }, { duration: 0.5, delay: stagger(0.1) })
    }, [data, isFetching])
     
    return ( 
      <>
        {isFetching ? (
          <TagsListSkeleton />
        ) : (
          <ul 
            ref={scope} 
            className="my-5 grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2"
          >
            {safeTags.items.map((tag: TagType) => (
              <Tag key={tag.name} tag={tag} />
            ))}
          </ul>
        )}
        <Pagination has_more={safeTags.has_more} total={safeTags.total} />    
      </> 
    )
}

export default withQueryData(TagsList)