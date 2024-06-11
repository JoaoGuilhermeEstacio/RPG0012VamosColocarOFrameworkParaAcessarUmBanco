import {useState} from "react"
import Head from "next/head"
import {useRouter} from "next/router"
import {ControleEditora} from "../classes/controle/ControleEditora"
import {Menu} from "../componentes/Menu"
import {Livro} from "../classes/modelo/Livro"
import {ControleLivro, LivroMongo} from "../classes/controle/ControleLivros"

const controleEditora = new ControleEditora()
const controleLivros = new ControleLivro()

const LivroDados: React.FC = () => {
    const [titulo, setTitulo] = useState<string>("")
    const [resumo, setResumo] = useState<string>("")
    const [autores, setAutores] = useState<string>("")
    const [codEditora, setCodEditora] = useState<string>("0")

    const opcoes = controleEditora.getEditoras().map((editora) => ({value: String(editora.codEditora), text: editora.nome}))

    const navigate = useRouter().push

    const incluirLivro = async (livro: any): Promise<boolean> => {
        const response = await controleLivros.incluir(livro)
        return response
    }

    const tratarCombo = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCodEditora(e.target.value)
    }

    const incluir = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const autoresArray = autores.split("\n")
        const livro: LivroMongo = {
            titulo,
            resumo,
            autores: autoresArray,
            codEditora: Number(codEditora),
            _id: null,
        }
        const sucesso = await incluirLivro(livro)
        if (sucesso) {
            navigate("/LivroLista")
        } else {
            console.error("Falha ao incluir o livro")
        }
    }

    return (
        <div>
            <Head>
                <title>Livro Dados</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Menu />

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
        </div>
    )
}

export default LivroDados
