/**
 * Cálculo do troco para o cliente
 * @author Wellington R. Cruz
 */

// importar a biblioteca read-linesync
const input = require ('readline-sync')

// variáveis
let troco, valorPago, total

console.clear()
console.log("Cálculo do troco para o cliente")

// entrada
total = Number(input.question ("Total da compra: R$ "))
valorPago = Number(input.question("Valor pago pelo cliente: R$ "))

// processamento
troco = valorPago - total

//saída
console.log (`Valor do troco: R$ ${troco.toFixed(2)}`)