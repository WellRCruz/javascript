/**
 * Exemplo de uso do método para gerar números aleatórios e uso da estrutura do-while
 * Jogo do dado
 * @author Wellington R. Cruz
 */

//Importar biblioteca
const input = require('readline-sync')

//variáveis
let face, opcao

do {
    //Limpar tela antes de uma nova entrada
    console.clear()

    console.log("Jogo do dado")
    input.question("Pressione a tecla [Enter] para jogar o dado: ")
    
    // Sorteio da face de um dado
    // Math classe matemática
    // floor() conversão para números inteiros
    // random()* (gerador de números aleatórios)

    face = Math.floor(Math.random() * 6 + 1) // 0 1 2 3 4 5
    console.log(`Face do dado: ${face}`)

    opcao = input.question("Deseja jogar novmente(s/n") // a variavel "opcao" recebe um caracter 
} while (opcao === 's')



