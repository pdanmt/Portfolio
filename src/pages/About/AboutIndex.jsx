import styles from "./About.module.css"
import img from "../../images/me-image.jpg"

import { IoLogoJavascript } from "react-icons/io5"
import { IoLogoHtml5 } from "react-icons/io"
import { IoLogoCss3 } from "react-icons/io"
import { IoLogoReact } from "react-icons/io5"
import { RiNextjsFill } from "react-icons/ri"
import { BiLogoTypescript } from "react-icons/bi"

export function About() {
    return (
        <main className={styles.mainAbout}>
            <div className={styles.divFlex}>
                <img src={img} alt="picture of me" />
                <section className={styles.sectionSobre}>
                    <h2>Sobre</h2>
                    <p><strong>Sou <span>Pedro Daniel</span></strong></p>
                    <p className={styles.pBlue}>Desenvolvedor Front End</p>
                    <p>Estudo desenvolvimento Web desde 2024</p>
                    <p>Sou apaixonado em transformar ideias em realidade digital</p>
                    <p>Estudante de desenvolvimento Web Front-End, com foco em criação de aplicações úteis para resolução de problemas diversos.</p>
                </section>
            </div>
            <section className={styles.sectionTechs}>
                <h2>Techs</h2>
                <div>
                    <span title="Javascript"><IoLogoJavascript /></span>
                    <span title="Typescript" className={styles.typescript}>
                        <BiLogoTypescript />
                    </span>
                    <span title="HTML5"><IoLogoHtml5 /></span>
                    <span title="CSS3"><IoLogoCss3 /></span>
                    <span title="React"><IoLogoReact /></span>
                    <span title="Next.JS"><RiNextjsFill /></span>
                </div>
            </section>
        </main>
    )
}
