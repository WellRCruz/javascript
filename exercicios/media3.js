/**
 * Cálculo da média aritmética de valores
 * @author Wellington R. Cruz
 */

// importar a biblioteca read-linesync
const input = require('readline-sync')
const colors = require('colors')  // biblioteca de cores

// variáveis
let num1, num2, num3, media

console.clear()
console.log("calculo da média aritmética de 3 números")

// entrada 
// No console entradas (input) númericas precisam ser convertidas com uso do método Number()
num1 = Number(input.question("Digite o primeiro numero: "))
num2 = Number(input.question("Digite o segundo numero: "))
num3 = Number(input.question("Digite o terceiro numero: "))

// processamento
media = (num1 + num2 + num3) / 3

// saída
console.log(`Média: ${media.toFixed(1)}`)

if (media >= 5) {
    console.log("Aprovado > 5".blue)   //cores
} else {
    console.log("Reprovado < 5".red)   //cores
}
