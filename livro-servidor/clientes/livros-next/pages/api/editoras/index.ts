import { NextApiRequest, NextApiResponse } from "next/types";
import { ControleEditora } from "../../../classes/controle/ControleEditora";

export const controleEditora = new ControleEditora();

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            const editoras = controleEditora.getEditoras();
            res.status(200).json(editoras);
        } else {
            res.status(405).json({ message: 'Método não permitido' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Exceção ocorrida no servidor' });
    }
}