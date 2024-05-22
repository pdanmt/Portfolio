import { Header } from "../../Components/Header/headerIndex"
import { Container } from "../../Components/Container/containerIndex"
import { Outlet } from "react-router-dom";
import { Footer } from "../../Components/Footer/footerIndex"

export function PageBase() {
    return (
        <>
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </>
    )
}