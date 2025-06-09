const prompt = require("prompt-sync")()  // adiciona pacote prompt-sync
let pessoas = Number(prompt("Número de pessoas por família: "))
let peixes = Number(prompt("Digite o número de peixes: "))

let pagar
if (peixes <= pessoas) {
    pagar = pessoas * 20
} else {
    pagar = (pessoas * 20) + ((peixes - pessoas) * 12)
}
console.log(`Pagar R$: ${pagar.toFixed(2)}`)
