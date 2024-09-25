/**
 * Ficha de um aluno de academia
 * @Author Wellington R. Cruz
 */

// variáveis
let nome 
let idade
let peso
let altura
let vip
let fcm
let imc

console.clear()

// entrada de dados
nome = "Wellington R. Cruz"
idade = 28
peso = 81
altura = 1.81
vip = true
fcm = 208 - (0.7 * idade)

// processamento
fcm = 208 - (0.7 * idade)
imc = peso / (altura * altura)

//saída
console.log("ficha do aluno")
console.log("______________________")
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`VIP: ${vip}`)
console.log(`FCM: ${fcm}`)
console.log(`IMC: ${imc.toFixed(2)}`)