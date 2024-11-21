/**
 * Atividade PROGRAMAÇÃO ORIENTADA A OBJETOS - POO
 * @author Vitor de Assis
 */

// Limpar tela
console.clear()


// Classe modelo
class Carro{
    // Atributos básicos do carro
    constructor(ano, cor){
        this.cor = cor
        this.ano = ano
    }

    // Métodos do carro   
    // Criar carro
    criarCarro(){
        console.log("🔧 Tic tic tic tic 🔧")
    }

    ligar(){
        console.log("🚙 TCHU GU DJUGU DJUGU 🚙")
    }

    acelerar(){
        console.log("🏎️ VRUM VRUM.... 🏎️")
    }

    desligar(){
        console.log(" Carro desligado ")
    }

    
}