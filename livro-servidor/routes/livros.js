const { obterLivros, incluir, excluir } = require('../modelo/livros-dao.js');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const livros = await obterLivros();
        res.json(livros);
    } catch (err) {
        res.status(500).json({ mensagem: 'Erro ao obter livros', erro: err });
    }
});

router.post('/', async (req, res) => {
    const livro = req.body;
    try {
        await incluir(livro);
        res.status(201).json({ mensagem: 'Inclusao efetuada' });
    } catch (err) {
        res.status(500).json({ mensagem: 'Erro ao incluir livro', erro: err });
    }
});

router.delete('/:codigo', async (req, res) => {
    const { codigo } = req.params;
    try {
        const resultado = await excluir(codigo);
        if (resultado.deletedCount > 0) {
            res.json({ mensagem: 'Livro excluído com sucesso' });
        } else {
            res.status(404).json({ mensagem: 'Livro não encontrado' });
        }
    } catch (err) {
        res.status(500).json({ mensagem: 'Erro ao excluir livro', erro: err });
    }
});

module.exports = router;
