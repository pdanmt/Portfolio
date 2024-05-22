import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home/homeIndex"
import { About } from "./pages/About/AboutIndex"
import { Contact } from "./pages/Contacts/contactIndex"
import { Projects } from "./pages/Projects/projectsIndex"
import { NotFound } from "./pages/NotFound/notFoundIndex"
import { PageBase } from "./pages/PageBase/pageBaseIndex"

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageBase />}>
                    <Route index exact element={<Home />} />
                    <Route path="/about" exact element={<About />} />
                    <Route path="/projects" exact element={<Projects />} />
                    <Route path="/contacts" exact element={<Contact />} />
                    <Route path="*" exact element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}