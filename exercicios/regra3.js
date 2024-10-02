/**
 * Cálculo regra de 3 , X e Y
 * @author Wellington R. Cruz
 */

// importar a biblioteca read-linesync
const input = require('readline-sync')

// variáveis
let x, y, valor

console.clear()
console.log("Cálculo regra de 3")

// entrada
x = Number(input.question("Digite o valor de X: "))
y = Number(input.question("Digite o valor de Y: "))

// processamento
valor = (x * y ) / 100

// saída
console.log (`${x}% de ${y} = ${valor.toFixed(2)}`)
