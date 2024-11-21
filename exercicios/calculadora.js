/**
 * Desenvolvimento de uma calculadora
 * @author Wellington R. Cruz
 */

const input = require ('readline-sync')

let a, b, opcao, novoCalculo

// Deseja realizar outro calculo?
do {

// Limpar tela    
console.clear()

console.log(" _____     _         _       _             ")
console.log("|     |___| |___ _ _| |___ _| |___ ___ ___ ")
console.log("|   --| .'| |  _| | | | .'| . | . |  _| .'|")
console.log("|_____|__,|_|___|___|_|__,|___|___|_| |__,|")

console.log("Calculadora")

a = Number(input.question("Digite o primeiro numero: "))
b = Number(input.question("Digite o segundo numero: "))

console.log("")
console.log("1. Somar: ")
console.log("2. Subtrair: ")
console.log("3. Multiplicar: ")
console.log("4. Dividir: ")
console.log("5. Calcular a %: ")
console.log("Digite a opção desejada: ")
console.log("")
opcao = Number(input.question("Digite a opcao desejada: "))

// Lógica do calculo

    switch (opcao) {
        case 1:   // O "case 1" chama a função.
            console.log(somar(a,b)) // Aqui eu chamei a função "somar".
            break
        case 2:
            console.log(subtrair(a,b))
            break
        case 3:
            console.log(multiplicar(a,b))
            break
        case 4:
            console.log(dividir(a,b))
            break
        case 5:
            console.log(porcentagem(a,b))
            break
        default:
            console.log("opção inválida")
            break
    }
    novoCalculo = input.question("Deseja jogar novamente? s/n              ")
    
} while (novoCalculo === 's');

// Explicação professor: Funções com parâmetros (não atribuídas) podem ser criadas em qualquer lugar
// Lógica para determinar o cálculo, resultado das operações

function somar(a,b) { // Aqui eu criei, a função somar, com as variáveis a,b.
    return console.log(`A soma de ${a} + ${b} = ${a + b}`) // Aqui eu coloquei o retorno que eu quero ao chamar a função.
}

function subtrair(a,b) {
    return console.log(`A subtração de ${a} - ${b} = ${a - b}`)
}

function multiplicar (a,b) {
    return console.log(`A multilicação de ${a} * ${b} = ${a * b}`)
}

function dividir(a,b) { 
    return console.log(`A divisão de ${a} / ${b} = ${a / b}`)
}

function porcentagem (a,b) {
    return console.log(`A porcentagem de ${a}% de ${b} = ${a * b / 100}`)
}