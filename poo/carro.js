/** 
 * Classe Carro Modelo
 * @author Wellington R. Cruz
 */

console.clear()

class Carro {
    constructor(ano, cor) {
        this.ano = ano
        this.cor = cor
    }

    criarcarro() {
        console.log("Criando Carro")
        console.log(`ano: ${this.ano}`)
        console.log(`cor: ${this.cor}`)
    }

    ligar() {
        console.log("ligando")

    }
    Acelerar() {
        console.log("acelerando")
    }
    desligar() {
        console.log("desligando")
    }
}

const carro1 = new Carro(2025, "Azul")
carro1.criarcarro()
carro1.ligar()
carro1.Acelerar()
carro1.desligar()

class Aviao extends Carro {
    constructor(cor, modelo, ano) {
        super(cor, ano)
        this.modelo = modelo
    }
    criarAviao() {
        console.log("--------------------------------------------")
        console.log("criando aviao")
        console.log(`cor: ${this.cor} `)
        console.log(`modelo: ${this.modelo} `)
        console.log(`ano: ${this.ano} `)
    }

    ligar() {
        console.log("ligando")
    }

    acelerar()  {
        console.log("decolar")
    }

    pousar() {
        console.log("pousar")
    }

    desligar() {
        console.log("desligando")
    }

}

// Polimorfismo: Mudança de comportamento de um método que já existe na classe pai (modelo) no exemplo Bloco
// Atenção! Obrigatório usar o mesmo nome do método

const aviao1 = new Aviao("Laranja", "237", "1973")

aviao1.criarAviao()
aviao1.ligar()
aviao1.acelerar() //Polimorfismo
aviao1.pousar()
aviao1.desligar()
aviao1.acelerar()

