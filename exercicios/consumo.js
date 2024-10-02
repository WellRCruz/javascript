/**
 * Cáculo do consumo de combustível
 * @author Wellington R. Cruz
 */

const input = require ('readline-sync')

//variáveis
let distancia, litros, consumo

console.clear()
console.log("Cálculo do consumo de combustível")

// entrada
distancia = Number(input.question("Distância percorrida em km: "))
litros = Number(input.question("Quantidade de litros de combustível: "))

// processamento 
consumo = distancia / litros

// saída
console.log(`Consumo do veículo: ${consumo.toFixed(1)} km/l`)
