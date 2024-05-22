import styles from "./NotFound.module.css"

export function NotFound() {
    return (
        <main className={styles.mainNotFound}>
            <h2>Ops... Página não encontrada!</h2>
            <h1><span>404</span></h1>
        </main>
    )
}