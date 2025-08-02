import styles from "./Projects.module.css"

import { Card } from "../../Components/Card/cardIndex"
import { useEffect, useState } from "react"
import { Container } from "../../Components/Container/containerIndex"

export function Projects() {
    const [repository, setRepository] = useState([])

    useEffect(() => {
        const searchReposit = async () => {
            try {
                const response = await fetch('https://api.github.com/users/pdanmt/repos')
                const data = await response.json()
                if (response.status === 200) {
                    setRepository(data)
                } else {
                    throw new Error()
                }
            } catch (error) {
                console.error(`Erro ao buscar repositórios: ${error}`)
            }
        }

        searchReposit()
    }, [])

    function CardsReturn() {
        if (repository.length === 0) {
            return (
                <p>Carregando repositórios...</p>
            )
        } else {
            return (
                <div className={styles.divProjects}>
                    {repository.map((rep) => {
                        if (rep.homepage === null) {
                            return (
                                <Card title={rep.name}
                                description={rep.description}
                                url={rep.html_url}
                                languages={rep.languages_url}
                                key={rep.id} />
                            )
                        } else {
                            return (
                                <Card title={rep.name}
                                description={rep.description}
                                url={rep.homepage}
                                languages={rep.languages_url}
                                key={rep.id} />
                            )
                        }
                    })}
                </div>
            )
        }
    }

    return (
        <Container>
            <h2 className={styles.top}>Projetos:</h2>
            {CardsReturn()}
        </Container>
    )
}
