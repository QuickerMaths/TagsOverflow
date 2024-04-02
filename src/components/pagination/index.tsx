import { 
    Pagination as PaginationUI,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
} from "../ui/pagination"
import { Button } from "../ui/button"
import { useTagsProvider } from "@/context/tags-context"

interface PaginationProps {
    has_more: boolean
    total: number
}

const Pagination = ({ has_more, total }: PaginationProps) => {
  const { tagsContextApi, state } = useTagsProvider()

  const lastPage = Math.ceil(total / state.pagesize)

  return (
    <PaginationUI className="mb-10">
        <PaginationContent>
          <PaginationItem>
            <Button 
              variant="ghost" 
              onClick={() => tagsContextApi.setPage(state.page - 1)}
              disabled={state.page === 1}
            >
              Previous
            </Button>
          </PaginationItem>
          <PaginationItem>
            <Button 
              variant={state.page === 1 ? "default" : "outline"}
              onClick={() => tagsContextApi.setPage(1)} 
            >
              1
            </Button>
          </PaginationItem>
          <PaginationItem>
              <PaginationEllipsis />
          </PaginationItem>
          {state.page >= 2 && (
          <>
            <PaginationItem>
              <Button 
                variant="default"
                onClick={() => tagsContextApi.setPage(state.page)}
              >
                {state.page}
              </Button>
            </PaginationItem>
            {has_more && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
          </>
          )}
          <PaginationItem>
            <Button 
              variant="ghost" 
              onClick={() => tagsContextApi.setPage(lastPage)}
              disabled={!has_more}
            >
              {lastPage}
            </Button>
          </PaginationItem>
          <PaginationItem>
            <Button 
              variant="ghost" 
              onClick={() => tagsContextApi.setPage(state.page + 1)}
              disabled={!has_more}
            >
              Next
            </Button>
          </PaginationItem>
        </PaginationContent>
    </PaginationUI>
  )
}

export default Pagination