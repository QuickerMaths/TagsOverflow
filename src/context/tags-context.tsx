import { formSchema } from "@/components/form";
import { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import { z } from 'zod'

type State = z.infer<typeof formSchema>

type Actions = { type: 'SET_FROM_STATE', payload: State }

const reducer = (state: State, action: Actions) => {
    switch(action.type){
        case 'SET_FROM_STATE':
            return {
								...state,
								...action.payload
						}
        default:
            return state
    }
}

export type TagsContextType = {
	tagsContextApi: {
        setFromState: (payload: State) => void
    }
}

const TagsContext = createContext<TagsContextType | undefined>(undefined)

interface TagsProviderProps {
    children: React.ReactNode
}

const TagsProvider = ({ children }: TagsProviderProps) => {
    const [state, dispatch] = useReducer(reducer, {
				search: "",
				order: 'asc',
				tagsPerPage: 15,
				date: {
						fromDate: undefined,
						toDate: undefined
				}
		} as State);

    const tagsContextApi = useMemo(() => {
        const setFromState = (payload: State) => {
            dispatch({ type: 'SET_FROM_STATE', payload })
        }

        return { setFromState }
    }, [])
   


    // useEffect(() => {
    //     console.log(state)
    // }, [state])

    return (
				<TagsContext.Provider value={{ tagsContextApi }}>
						{children}
				</TagsContext.Provider>
		)
}

export const useTagsProvider = () => {
    const context = useContext(TagsContext)

    if(!context){
        throw new Error("useTagsProvider must be used within a TagsProvider")
    }

    return context
}

export default TagsProvider