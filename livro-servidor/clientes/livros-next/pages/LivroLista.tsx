import {useState, useEffect} from "react"
import Head from "next/head"
import {Menu} from "../componentes/Menu"
import {LinhaLivro} from "../componentes/LinhaLivro"
import {ControleLivro, LivroMongo} from "../classes/controle/ControleLivros"

interface Livro {
    codigo: string | null
    titulo: string
    resumo: string
    codEditora: number
    autores: string[]
}

const LivroLista: React.FC = () => {
    const [livros, setLivros] = useState<Livro[]>([])
    const [carregado, setCarregado] = useState<boolean>(false)

    const controleLivros = new ControleLivro()

    const excluirLivro = (codigo: string) => {
        controleLivros.excluir(codigo).then(() => {
            setCarregado(false)
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            controleLivros.obterLivros().then((livrosMongo: LivroMongo[]) => {
                const livros: Livro[] = livrosMongo.map((livroMongo) => ({
                    codigo: livroMongo._id,
                    titulo: livroMongo.titulo,
                    resumo: livroMongo.resumo,
                    codEditora: livroMongo.codEditora,
                    autores: livroMongo.autores,
                }))
                setLivros(livros)
                setCarregado(true)
            })
        }
        fetchData()
    }, [carregado])

    return (
        <div>
            <Head>
                <title>Livro Lista</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Menu />
            <main className="px-5">
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
                        {livros.map((livro) => (
                            <LinhaLivro key={livro.codigo} livro={livro} excluir={() => excluirLivro(livro.codigo as string)} />
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    )
}

export default LivroLista
