/**
 * Minecraft - Fundamentos da programação orientada a objetos
 * Abstração, Herança, e polimorfismo
 * @author Vitor de Assis
 */

console.clear()

// Criando a classe modelo
class Bloco {
    // Atributos
    constructor(textura, resistencia) {
        this.textura = textura
        this.resistencia = resistencia
    }
    // Métodos
    criarBloco() {
        console.log("-----------------------------------------------")
        console.log("┌─┐")
        console.log("└─┘")
        console.log(`Bloco de ${this.textura}`)
        console.log(`Resistência: ${this.resistencia}`)
    }

    construir() {
        console.log(`Bloco de ${this.textura} colocado`)
    }

    minerar() {
        console.log("□ □ □ □ Recursos obtidos!")
    }
}

// Herança a classe Enxada utiliza tudo que tem no Bloco caso queira/necessário
class Enxada extends Bloco {
    // aributos
    constructor(textura, resistencia, conquista) {
        super(textura, resistencia) // herança (O que está sendo herdado)
        this.conquista = conquista
    }

    // Métodos
    criarEnxada() {
        console.log("----------------------------------------------------------")
        console.log("-_")
        console.log(" /")
        console.log(`Enxada de ${this.textura}`)
        console.log(`Resistência ${this.resistencia}`)
    }

    arar() {
        console.log("._._._.")
        if (this.conquista === true) {
            console.log("☀ Conquista obtida!")
        }
    }

    // Polimorfismo: Mudança de comportamento de um método que já exite na classe pai(modelo) no exemplo Bloco
    // Atenção!!!! Obrigatório usar o mesmo nome do método

    minerar(){
        console.log("✞ Dano atribuído!")
    }

}



// MUNDO

console.log(" _____ _____ _____ _____ _____ _____ _____ _____ _____ ")
console.log("|     |     |   | |   __|     | __  |  _  |   __|_   _|")
console.log("| | | |-   -| | | |   __|   --|    -|     |   __| | |  ")
console.log("|_|_|_|_____|_|___|_____|_____|__|__|__|__|__|    |_|  ")


// Instanciando (criando) um objeto

const bloco1 = new Bloco("Terra", 1)
bloco1.criarBloco()

const bloco2 = new Bloco("Madeira", 2)
bloco2.criarBloco()
bloco2.construir

const bloco3 = new Bloco("Pedra", 5)
bloco3.criarBloco()
bloco3.minerar()

const enxada1 = new Enxada("Madeira", 2, false)
enxada1.criarEnxada()
enxada1.arar()

const enxada2 = new Enxada("ferro",5 , true)
enxada2.criarEnxada()
enxada2.arar()

const enxada3 = new Enxada("diamante", 10, false)
enxada3.criarEnxada()
enxada3.minerar()