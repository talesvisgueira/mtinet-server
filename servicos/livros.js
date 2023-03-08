const fs = require("fs")
const fileName = "livros.json"

function getLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync(fileName));
    const livroFiltrado = livros.filter( livro => livro.id === id) [0]
    return livroFiltrado
}

function getTodosLivros() {
    return JSON.parse(fs.readFileSync(fileName));
}

function insereLivro(novoLivro) {
    const livros = JSON.parse(fs.readFileSync(fileName));
    const novaLista = [ ... livros, novoLivro]
    fs.writeFileSync(fileName,JSON.stringify(novaLista))
    
}

function updateLivro(id,modificacoes) {
    let livrosAtuais = JSON.parse(fs.readFileSync(fileName));
    const livroIndex = livrosAtuais.findIndex( livro => livro.id === id)
    const modificado = { ... livrosAtuais[livroIndex], ...modificacoes}
    livrosAtuais[livroIndex] = modificado
    fs.writeFileSync(fileName,JSON.stringify(livrosAtuais))
}

function deleteLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync(fileName));
    console.log(livros)
    const livrosFiltrados = livros.filter( livro => livro.id !== id )
    fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados))
}

module.exports = { 
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    updateLivro,
    deleteLivroPorId
}