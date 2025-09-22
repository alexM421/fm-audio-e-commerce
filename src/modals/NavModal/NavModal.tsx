    //CSS
    import { useEffect, useRef, type Dispatch, type RefObject, type SetStateAction } from "react"
    import CategoryLinks from "../../layouts/CategoryLinks/CategoryLinks"
    import styles from "./NavModal.module.css"

    type NavModalProps = {
        buttonRef: RefObject<HTMLButtonElement | null>,
        setShowNav: Dispatch<SetStateAction<boolean>>
    }

    export default function NavModal ({ buttonRef, setShowNav }: NavModalProps) {

        const navRef = useRef<HTMLDivElement | null>(null)

        useEffect(() => {
            const handleClickOutside = (e: MouseEvent) => {
                const clickTarget = e.target as Node
                if(!navRef.current || !buttonRef.current) return 
                if(!navRef.current.contains(clickTarget) && !buttonRef.current.contains(clickTarget)){
                    setShowNav(false)
                }
            }

            document.body.addEventListener("mousedown", handleClickOutside)
            return () => document.body.removeEventListener("mousedown", handleClickOutside)
        },[])

        return(
            <>
                <div className={styles["nav-modal"]} ref={navRef}>
                    <CategoryLinks/>
                </div>
                <div className={styles["nav-modal-background"]}></div>
            </>
        )
    }