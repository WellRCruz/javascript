/**
 * Verificar maioridade
 * @author Wellington R. Cruz
 */

const input = require ('readline-sync') // (require readline-sync) > Importação da biblioteca

let idade 

console.clear()
console.log("Verificar maioridade")
idade = Number (input.question("Digite a idade: "))
console.log (`Idade: ${idade}`)  // ("${idade}") > ele sempre mostra a variável
if (idade < 18) {
    console.log("Menor de idade")
} else {
    console.log("Maior de idade")
}
