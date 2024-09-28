/**
* 10) Cálculo do tempo de viagem:
* Desenvolva um programa que calcule o tempo necessário para uma viagem. 
* O usuário deve fornecer a distância a ser percorrida e a velocidade média do veículo. 
* O programa deve calcular e exibir o tempo de viagem.
*   
//variáveis
* tempoDaViagem
* distancia
* velocidadeMedia

//entrada
*3
*150
*50

//processamento
*tempoDaViagem = distancia/velocidadeMedia

//saída
*tempoDaViagem

* @author Wellington R. Cruz
 */

// importar a biblioteca read-linesync
const input = require('readline-sync')

// variáveis
let tempoDaViagem, distancia, velocidadeMedia

console.clear()
console.log("calculo do tempo da viagem")

// entrada
distancia = (input.question("Digite distancia que sera percorrida em Km:"))
velocidadeMedia = (input.question("Digite a velocidade media Km/h:"))

//processamento
tempoDaViagem = (distancia/velocidadeMedia)

//saída
console.log(`O tempo estimado e de ${tempoDaViagem} horas`)
