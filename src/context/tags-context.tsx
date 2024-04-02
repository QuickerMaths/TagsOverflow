import { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import { FormType } from "@/components/form";
import { useQueryClient } from "@tanstack/react-query";
import useTagsUrl from "@/hooks/useTagsUrl";
import axios from "axios";
import { tagsQueryOptions } from "@/services/tagsLoader";

type Actions = 
| { type: 'SET_FROM_STATE', payload: FormType }
| { type: 'SET_PAGE', payload: number }

const reducer = (state: FormType, action: Actions) => {
    switch(action.type){
        case 'SET_FROM_STATE':
            return {
	    		...state,
	    		...action.payload
			}
        case 'SET_PAGE':
            return {
                ...state,
                page: action.payload
            }
        default:
            return state
    }
}

export type TagsContextType = {
	tagsContextApi: {
        setFromState: (payload: FormType) => void
        setPage: (payload: number) => void
    }, 
    state: FormType
}

const TagsContext = createContext<TagsContextType | undefined>(undefined)

interface TagsProviderProps {
    children: React.ReactNode
}

const TagsProvider = ({ children }: TagsProviderProps) => {
    const queryClient = useQueryClient()
    const [state, dispatch] = useReducer(reducer, {
        page: 1,
		inname: "",
		order: 'desc',
		pagesize: 50,
		date: {
			fromdate: undefined,
			todate: undefined
		}
	} as FormType);

    const tagsContextApi = useMemo(() => {
        const setFromState = (payload: FormType) => {
            dispatch({ type: 'SET_FROM_STATE', payload })
        }

        const setPage = (payload: number) => {
            dispatch({ type: 'SET_PAGE', payload })
        }

        return { setFromState, setPage }
    }, [])

    useEffect(() => {
        queryClient.fetchQuery({
            ...tagsQueryOptions,
            queryFn: () => axios(useTagsUrl({ formState: state }))
        })
    }, [state])

    return (
			<TagsContext.Provider value={{ tagsContextApi, state }}>
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