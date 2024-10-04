/**
 * Cálculo do PDV
 * @author Wellington R. Cruz
 */

// importar a biblioteca read-linesync
const input = require ('readline-sync')

console.clear()


                 
console.log("          | |        ")
console.log(" _ __   __| |_   _   ")
console.log("| '_ \\ / _` \\ \\ / /  ")
console.log("| |_) | (_| |\\ V /   ")
console.log("| .__/ \\__,_| \\_/    ")
console.log("| |                  ")
console.log("|_|                  ")

// variáveis
let total, desconto, totalDesconto, valorDesconto, valorPago, troco

// entrada 1
total = Number (input.question("Digite o valor total da compra: R$ "))
desconto = Number (input.question("Digite o valor total do esconto em %: "))

// processamento 1
valorDesconto = (desconto * total) / 100

// processamento 2
totalDesconto = total - valorDesconto

//saída 1
console.log("") 
console.log("--------------------------------------------------")
console.log(`Total: R$ ${total.toFixed(2)}`)
console.log(`Desconto: ${desconto}%`)
console.log(`Valor do desconto: R$ ${valorDesconto.toFixed(2)}`)
console.log(`Total com desconto: R$ ${totalDesconto.toFixed(2)}`)
console.log("")

// entrada 2
valorPago = Number(input.question("Valor em dinheiro pago pelo cliente: R$ "))

// processamento 3
troco = valorPago - totalDesconto

//saída 2 (CUPOM FISCAL)

console.log("")
console.log(`Valor pago em dinheiro: R$ ${valorPago.toFixed(2)}`)
console.log(`Troco R$ ${troco.toFixed(2)}`)
console.log("--------------------------------------------------")
