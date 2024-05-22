import styles from "./Contact.module.css"

import { GoMail } from "react-icons/go";
import { RiGithubFill } from "react-icons/ri";

export function Contact() {
    return (
        <main className={styles.mainContact}>
            <h2>Entre em contato para que possamos conversar.</h2>
            <h2>Contatos:</h2>
            <div className={styles.divFlex}>
                <a href="mailto:pedddann@gmail.com" target="_blank"><GoMail /></a>
                <a href="https://github.com/PedroMatos12" target="_blank"><RiGithubFill /></a>
            </div>
        </main>
    )
}