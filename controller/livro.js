const { getTodosLivros, getLivroPorId, insereLivro, updateLivro, deleteLivroPorId } = require("../servicos/livros")


function getLivros(req,res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch (e) {
        res.status(500)
        res.send(e.message)
    }   
}

function getLivro(req,res) {
    try {
        const id = req.params.id
        if (id&&Number(id)) {
            const livro = getLivroPorId(id)
            res.send(livro)
        } else {
            res.status(422)
            res.send("ID inválido")
        }
    } catch (e) {
        res.status(500)
        res.send(e.message)
    }   
}


function postLivro(req,res) {
    try {
        const livro = req.body
        if (req.body.nome) {
            insereLivro(livro)
            res.status(201)
            res.send(livro)
        } else {
            res.status(422)
            res.send("Campo nome obrigatório")
        }
        
    } catch (e) {
        res.status(500)
        res.send(e.message)
    }   
}

function patchLivro(req,res) {
    try {
        const id = req.params.id
        if (id&&Number(id)) {
            const mudanca = req.body
            if (req.body.nome) {
                updateLivro(id,mudanca)
                res.send("Atualização realizada com sucesso")
            } else {
                res.status(422)
                res.send("Campo nome obrigatório")
            }
        } else {
            res.status(422)
            res.send("ID inválido")
        }
    } catch (e) {
        res.status(500)
        res.send(e.message)
    }   
}

function deleteLivro(req,res) {
    try {
        const id = req.params.id
        if (id&&Number(id)) {
            deleteLivroPorId(id)
            res.send("Livro deletado com sucesso")
        } else {
            res.status(422)
            res.send("ID inválido")
        }
    } catch (e) {
        res.status(500)
        res.send(e.message)
    }   
}

module.exports = { 
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}
