/**
 * 
 * @author Wellington R. Cruz
 */

console.clear()

const funcionario1 = {}
console.log(typeof (funcionario1))

// Adicionar dados a estrutura CREATE
funcionario1.nome = "Vitor"
funcionario1.cargo = "Desempregado"
funcionario1.email = "contato.vitorti@gmail.com"
funcionario1.salario = 150008
funcionario1.insta = "rrotivo"

// Listar os dados da estrutura READ
console.log(funcionario1)
console.log(funcionario1.cargo)

// Modificar os dados da estrutura 
funcionario1.nome = "Vitor de Assis"
console.log(funcionario1)

// Excluir dados da estrutura
delete funcionario1.insta
console.log(funcionario1)

const funcionario2 = {
    nome: "Bruce Wayne",
    cargo: "CEO",
    email: "batman@gmail.com",
    salario: 400000
}

console.log(funcionario2)

const endereco1 = {
    logradouro: "Bat Caverna",
    cidade: "Gothan City",
    estado: "Nova Jersey"

}

console.log(endereco1)

// Terceiro Funcionário

const funcionario3 = {
    nome: "Alfred Pennywort",
    cargo: "Mordomo",
    email: "alfred@gmail.com",
    salario: 20000,
    ...endereco1

}

console.log(funcionario3)


// Quarto Funcionário

const funcionario4 = {
    nome: "Dick Grayson",
    cargo: "Acrobata",
    email: "robin@gmail.com",
    salario: "2000",
    ...endereco1
}

console.log(funcionario4)

// Quinto funcionário

const funcionario5 = {
    nome: "Tony Stark",
    cargo: "Engenheiro",
    email: "ironman@gmail.com",
    salario: "375000",
    armadura: {
        versao: "Mark II",
        ano: 2010,
        reator: "Arc 01"

    },
    suitUp: () => {
        console.log("🤖")

    }

}

console.log(funcionario5)
console.log(funcionario5.cargo)
console.log(funcionario5.armadura.versao)
funcionario5.suitUp() // executar a função interna da estrutura