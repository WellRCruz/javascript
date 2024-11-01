/**
 * Tabuada usando a estrutura while
 * @author Wellington R. Cruz
 */

// Importr biblioteca
const input = require ('readline-sync')

// Variável
let valor
let i = 1 // apoio a lógica e laço while

// Limpar tela
console.clear()

// Cabeçalho
console.log("Tabuada While")

valor = Number(input.question("Digite o valor da tabuada: ")) //Questiona o usuário, para digitar o número

while (i < 11) {
    console.log(`${valor} x ${i} = ${valor * i}`)
    i++
}