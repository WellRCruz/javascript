/**
 * Sistema de votos (obrigatoriedade)
 * @author  Wellington R. Cruz
 */

const input = ('readline-sync')

let idade 

console.clear()


idade = Number(input.question("Digite a sua idade: "))

//procesamento e saída
if (idade < 16) {
    console.log("Proibir votar")
} else if (idade > 17 && idade < 71) {
    console.log("Voto obrigatório")
} else {
    console.log("Voto facultativo")
}