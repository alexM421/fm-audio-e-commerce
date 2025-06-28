import React, { type JSX } from "react"
import Data from "../../data.json"
import type { Product } from "../types/types"

type DataContextType = {data: Product[]}

const DataContext = React.createContext<DataContextType | undefined>(undefined)

type useDataProviderProps = { children: React.ReactNode}

export function DataProvider ({ children }: useDataProviderProps):JSX.Element {

    const value = {
        data: Data,
    }

    return(
        <DataContext.Provider value={value}>
            { children }
        </DataContext.Provider>
    )
}

export function useDataContext (): DataContextType {

    const context = React.useContext(DataContext)

    if(!context){
        throw new Error ("Data context is undefined")
    }

    return context
}