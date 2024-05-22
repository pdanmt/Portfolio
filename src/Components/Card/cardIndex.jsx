import styles from "./Card.module.css"

import { BsArrowRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Icons } from "../Icons/iconsIndex";

export function Card({ title, description, url, languages }) {
    const [usedLanguages, setUsedLanguages] = useState([])

    useEffect(() => {
        const usedLang = async () => {
            const response = await fetch(languages)
            const data = await response.json()
            setUsedLanguages(data)
        }
        usedLang()
    }, [])

    return (
        <div className={styles.card}>
            <a href={url} target="_blank" className={styles.title}><h3>{title}</h3></a>
            <p>{description}</p>
            <div className={styles.cardFooter}>
                <section className={styles.icons}>
                    {Object.keys(usedLanguages).map((keyLang) => <Icons lang={keyLang}/>)}
                </section>
                <a href={url} target="_blank"><BsArrowRight /></a>
            </div>
        </div>
    )
}