import React from "react"
import {Livro} from "../classes/modelo/Livro"
import {ControleEditora} from "../classes/controle/ControleEditora"
import { ControleLivro } from "../classes/controle/ControleLivros"

const controleEditora = new ControleEditora()

interface LinhaLivroProps {
    livro: Livro
    excluir: () => void
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
    return (
        <tr key={props.livro.codigo}>
            <td style={{height: "100px"}}>{props.livro.titulo}</td>
            <td style={{height: "100px"}}>{props.livro.resumo}</td>
            <td style={{height: "100px"}}>{controleEditora.getNomeEditora(props.livro.codEditora)}</td>
            <td style={{height: "100px"}}>
                <ul>
                    {props.livro.autores.map((autor, index) => (
                        <li key={index}>{autor}</li>
                    ))}
                </ul>
            </td>
            <td className="align-self-stretch align-middle">
                <button
                    className="btn btn-danger btn-sm"
                    onClick={props.excluir}
                >
                    Excluir
                </button>
            </td>
        </tr>
    )
}
