import { NextApiRequest, NextApiResponse } from "next/types";
import { ControleLivro } from "../../../classes/controle/ControleLivros";

export const controleLivro = new ControleLivro();

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            const livros = controleLivro.obterLivros();
            res.status(200).json(livros);
        } else if (req.method === "POST") {
            const novoLivro = req.body;
            controleLivro.incluir(novoLivro);
            res.status(200).json({ message: 'Livro adicionado com sucesso' });
        } else {
            res.status(405).json({ message: 'Método não permitido' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Exceção ocorrida no servidor' });
    }
}