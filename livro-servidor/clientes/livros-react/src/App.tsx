import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom"
import "./App.css"
import LivroLista from "./LivroLista"
import LivroDados from "./LivroDados"

function App() {
    return (
        <BrowserRouter>
            <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/" className={"nav-link"}>
                                    Catálogo
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/dados" className={"nav-link"}>
                                    Novo
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<LivroLista />} />
                <Route path="dados" element={<LivroDados />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
