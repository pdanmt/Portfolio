import { useState } from "react"
import styles from "./Header.module.css"

import { Link } from "react-router-dom"

export function Header() {
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => { setShowMenu(!showMenu) }

    return (
        <header className={styles.header}>
            <Link to={"/"}><h3>PedroDaniel.dev</h3></Link>
            <nav className={`${styles.nav} ${showMenu ? styles.show : ''}`}>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>Sobre</Link>
                <Link to={"/projects"}>Projetos</Link>
                <Link to={"/contacts"}>Contatos</Link>
            </nav>
            <div className={styles.menuBtn} >
                <span onClick={toggleMenu} class="material-symbols-outlined">menu</span>
            </div>
        </header>
    )
}