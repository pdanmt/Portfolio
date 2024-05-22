import styles from "./Home.module.css"
import img from "../../images/main-man-img.jpg"

import { Link } from "react-router-dom"

export function Home() {
    return (
        <main className={styles.main}>
            <section className={styles.mainHome}>
                <h1>Olá, sou <br /> <span>Pedro Daniel</span> <br /> dev Front-End</h1>
                <Link to={"/about"}>Saiba mais sobre mim</Link>
            </section>
            <img src={img} alt="image-main-man" />
        </main>
    )
}