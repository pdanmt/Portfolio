import styles from "./Projects.module.css"

import { Card } from "../../Components/Card/cardIndex"
import { useEffect, useState } from "react"
import { Container } from "../../Components/Container/containerIndex"

export function Projects() {
    const [repository, setRepository] = useState([])
    useEffect(() => {
        const searchReposit = async () => {
            const response = await fetch('https://api.github.com/users/PedroMatos12/repos')
            const data = await response.json()
            setRepository(data)
        }
        searchReposit()
    }, [])

    return (
        <Container>
            <h2 className={styles.top}>Projetos:</h2>
            {
                repository.length == 0 ?
                    <p>Carregando repositórios...</p> :
                    <div className={styles.divProjects}>
                        {repository.map((rep) =>
                            <Card title={rep.name}
                                description={rep.description}
                                url={rep.homepage}
                                languages={rep.languages_url}
                                key={rep.id} />)}
                    </div>
            }
        </Container>
    )
}