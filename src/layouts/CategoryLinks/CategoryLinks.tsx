//CSS
import styles from "./CategoryLinks.module.css"
//Types
import type { JSX } from "react"
//components
import CategoryLink from "../../components/CategoryLink/CategoryLink"

type CategoryLinkData = {
    category: string,
    imgSrc: string,
    imgAlt: string,
    link: string,
    id: number,
}

export default function CategoryLinks ():JSX.Element {

    const shopItemsLinksData: CategoryLinkData[] = [
        {
            category: "Headphones",
            imgSrc: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
            imgAlt: "Image category thumbnail earphones.",
            link: "/headphones",
            id: 1,
        },
        {
            category: "Speakers",
            imgSrc: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
            imgAlt: "Image category thumbnail speakers.",
            link: "/speakers",
            id: 2,
        },
        {
            category: "Earphones",
            imgSrc: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
            imgAlt: "Image category thumbnail earphones.",
            link: "/earphones",
            id: 3,
        },
    ]

    

    const categoryLinks: JSX.Element[] = shopItemsLinksData.map((categoryLinkData: CategoryLinkData):JSX.Element => {
        
        const {id, ...categoryLinkProps } = categoryLinkData 
        
        return(
            <CategoryLink
                {...categoryLinkProps}
                key={`category-link-${id}`}
            />
        )
    })           

    return(
        <div className={styles["category-links"]}>
            {categoryLinks}
        </div>
    )
}