import { Children, createContext } from "react"
import React from 'react'

const context = () => {
    const INITIAL_VALUES={
        category:''
    }
    const context = createContext(INITIAL_VALUES)
    const Provider = ({Children}) =>{
        return (
          <context.Provider>
            {Children}
          </context.Provider>
        )
    }
}

export default context