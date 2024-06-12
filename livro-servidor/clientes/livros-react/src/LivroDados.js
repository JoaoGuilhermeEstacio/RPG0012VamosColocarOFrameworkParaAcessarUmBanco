import {ControleLivro} from "./controle/ControleLivros"
import {ControleEditora} from "./controle/ControleEditora"
import {useNavigate} from "react-router-dom"
import {useState} from "react"

export default function LivroDados() {
    var controleLivro = new ControleLivro()
    var controleEditora = new ControleEditora()

    const opcoes = controleEditora.getEditoras().map(({codEditora, nome}) => {
        return {value: codEditora, text: nome}
    })

    const [titulo, setTitulo] = useState("")
    const [resumo, setResumo] = useState("")
    const [autores, setAutores] = useState("")
    const [codEditora, setCodEditora] = useState(opcoes[0].value)

    const navigate = useNavigate()

    const tratarCombo = (event) => {
        setCodEditora(Number(event.target.value))
    }

    const incluir = (event) => {
        event.preventDefault()

        const novoLivro = {
            titulo,
            resumo,
            autores: autores.split("\n"),
            codEditora: codEditora,
        }
        controleLivro.incluir(novoLivro).then(() => {
            navigate("/")
        })
    }

    return (
        <main className="px-5">
            <h1>Dados do Livro</h1>
            <form onSubmit={incluir}>
                <div className="mb-2">
                    <label className="form-label" htmlFor="titulo">
                        Título
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        id="titulo"
                        value={titulo}
                        onChange={(event) => setTitulo(event.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <label className="form-label" htmlFor="resumo">
                        Resumo
                    </label>
                    <textarea
                        className="form-control"
                        id="resumo"
                        draggable={false}
                        value={resumo}
                        onChange={(event) => setResumo(event.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <label className="form-label" htmlFor="editora">
                        Editora
                    </label>
                    <select className="form-select" id="editora" value={codEditora} onChange={tratarCombo}>
                        {opcoes.map((opcao) => (
                            <option key={opcao.value} value={opcao.value}>
                                {opcao.text}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-2">
                    <label className="form-label" htmlFor="autores">
                        Autores (1 por linha)
                    </label>
                    <textarea
                        className="form-control"
                        id="autores"
                        draggable={false}
                        value={autores}
                        onChange={(event) => setAutores(event.target.value)}
                    />
                </div>

                <button className="btn btn-primary" type="submit">
                    Salvar Dados
                </button>
            </form>
        </main>
    )
}
