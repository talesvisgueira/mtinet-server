const fs = require("fs")
const fileName = "livros.json"
const dadosAtuais = JSON.parse(fs.readFileSync(fileName))
const novoDado = "{ id: '5', nome: 'Livro 05'}"
fs.writeFileSync(fileName,JSON.stringify([...dadosAtuais,novoDado]))

console.log(JSON.parse(fs.readFileSync(fileName)))


