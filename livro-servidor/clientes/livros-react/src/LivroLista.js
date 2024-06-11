import {useEffect, useState} from "react"
import {ControleEditora} from "./controle/ControleEditora"
import {ControleLivro} from "./controle/ControleLivros"

export default function LivroLista() {
    var controlador = new ControleLivro()
    var editoras = new ControleEditora()

    function LinhaLivro(props) {
        const nomeEditora = editoras.getNomeEditora(props.codEditora)
        return (
            <tr key={`${props._id}`}>
                <td style={{height: "100px"}}>{props.titulo}</td>
                <td style={{height: "100px"}}>{props.resumo}</td>
                <td style={{height: "100px"}}>{nomeEditora}</td>
                <td style={{height: "100px"}}>
                    <ul>
                        {props.autores.map((autor, index) => (
                            <li key={index}>{autor}</li>
                        ))}
                    </ul>
                </td>
                <td className="align-self-stretch align-middle">
                    <button
                        className="btn btn-danger btn-sm"
                        onClick={() => {
                            controlador.excluir(props._id).then(() => {
                                setCarregado(false)
                            })
                        }}
                    >
                        Excluir
                    </button>
                </td>
            </tr>
        )
    }

    const [livros, setLivros] = useState([])
    const [carregado, setCarregado] = useState(false)

    useEffect(() => {
        controlador.obterLivros().then((livros) => {
            setLivros(livros)
            setCarregado(true)
        })
    }, [carregado])

    return (
        <main className="p-4">
            <h1>Catálogo de Livros</h1>
            <table className="table table-striped">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Título</th>
                        <th scope="col">Resumo</th>
                        <th scope="col">Editora</th>
                        <th scope="col">Autores</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {livros.length > 0 ? (
                        livros.map((livro, index) => <LinhaLivro key={index} {...livro} index={index} />)
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center">
                                Nenhum livro encontrado
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </main>
    )
}
