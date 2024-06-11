import { NextApiRequest, NextApiResponse } from "next/types";
import { controleEditora } from '.';

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            const codEditora = Number(req.query.codEditora);
            const nomeEditora = controleEditora.getNomeEditora(codEditora);
            res.status(200).json({ nome: nomeEditora });
        } else {
            res.status(405).json({ message: 'Método não permitido' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'exceção ocorrida no servidor' });
    }
};