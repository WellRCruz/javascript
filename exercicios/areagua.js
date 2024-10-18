/**
 * Calculo do consumo de ar e de água
 * @author  Wellington R. Cruz
 */

//importar a biblioteca
const input = require ('readline-sync')

// Limpar a tela antes de uma nova entrada
console.clear()

//variáveis
let consumo, peso

//Entrada - Atriburi valores as varáveis
peso = Number(input.question("Digite seu peso: (em kg)"))

//Processamento - Fórmula para cáculo do código
consumo = peso * 0.035 // (35 ml de água por cada kg)

// Saída - Resultado do processamento
console.log = (`Consumo diário de água deve ser: ${consumo.toFixed(3)} litros`) // toFixed para deixar limitado à 2 caracteres de ml