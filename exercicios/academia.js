/**
 * APP - Calculadora saúde
 * @Author Wellington R. Cruz
 */

//bibliotecas
const input = require('readline-sync')
const colors = require('colors')

// variáveis
let nome, idade, peso, altura, fcm, imc, consumo

// Limpar a tela antes de uma nova entrada
console.clear()

// Banner
console.log ("  _   _            _ _   _                 _            _       _              ")
console.log (" | | | |          | | | | |               | |          | |     | |             ")
console.log (" | |_| | ___  __ _| | |_| |__     ___ __ _| | ___ _   _| | __ _| |_ ___  _ __  ")
console.log (" |  _  |/ _ \\/ _` | | __| '_ \\   / __/ _` | |/ __| | | | |/ _` | __/ _ \\| '__| ")
console.log (" | | | |  __/ (_| | | |_| | | | | (_| (_| | | (__| |_| | | (_| | || (_) | |    ")
console.log (" \\_| |_/\\___|\\__,_|_|\\__|_| |_|  \\___\\__,_|_|\\___|\\__,_|_|\\__,_|\\__\\___/|_|    ")

// entrada de dados
nome = input.question("Digiteo seu nome: ")
idade = Number(input.question("Digite sua idade: "))
peso = Number(input.question("Digite o seu peso: "))
altura = Number(input.question("Digite sua altura em metros: "))

// processamento
fcm = 208 - (0.7 * idade)
imc = peso / (altura * altura)
consumo = peso * 0.035

//saída
console.log("")
console.log("ficha do aluno")
console.log("______________________")
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`FCM: ${fcm}`)
console.log(`IMC: ${imc.toFixed(2)}`)

//tabela IMC
if (imc < 18.5) {
    console.log("Abaixo do peso".cyan)
} else if (imc < 25){
    console.log("Peso normal".green)
} else if (imc < 30){
    console.log("Levemente acima do peso".yellow)
} else if (imc < 35){
    console.log("Obesidade Grau I".magenta)
} else if (imc < 40){
    console.log("Obesidade Grau II".red)
} else {
    console.log("Obesidade Grau III (mórbida)".bgRed)
}

// consumo de água
console.log(`Consumir por dia ${consumo.toFixed(3)} litros de água`)