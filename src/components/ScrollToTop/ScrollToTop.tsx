import React from "react"
//React Router
import { useLocation } from "react-router-dom"



export default function ScrollToTop () {

    const location = useLocation()
    React.useEffect(() => {
        window.scroll(0,0)
    },[location])

    return null
}