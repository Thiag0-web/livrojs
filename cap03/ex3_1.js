const prompt = require("prompt-sync")()       // adiciona pacote para entrada de dados
const num1 = Number(prompt("1° Número: "))   // lê o número
const num2 = Number(prompt("2° Número: "))   
const soma = num1 + num2                     // calcula a soma
console.log(`Soma é: ${soma}`)               // exibe resultado
