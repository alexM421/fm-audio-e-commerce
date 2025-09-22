import { useEffect, useState } from "react"

export default function useIsMobile (desiredWidth: number) {

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth<= desiredWidth)
        }
        handleResize()
        window.addEventListener("resize",handleResize)
        return () => window.removeEventListener("resize",handleResize)
    },[])

    return { isMobile }
}