import React from "react";
import { useLocation } from "react-router";

export default function ScrollToTheTop () {
    const location = useLocation()

    React.useEffect(() => {
        window.scrollTo({top: 0})
    },[location])
    

    return null
}