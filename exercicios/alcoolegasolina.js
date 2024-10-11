/**
 * APP Alcool x Gasolina Qual a melhor opção?
 * @author Wellington R. Cruz
 */

const input = require ('readline-sync')

//variáveis
let alcool, gasolina

console.clear()
console.log("Alcool x Gasolina")

// entrada
alcool  = Number(input.question("Digite o preco do alcool: R$ "))
gasolina = Number(input.question("Digite o preco do gasolina: R$ "))

// processamento e saída
if (alcool <0.7 * gasolina) {
    console.log("Abastecer com alcool")
 } else {
    console.log("Abastecer com gasolina")
}