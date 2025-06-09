const prompt = require("prompt-sync")()
racao = Number(prompt(`Digite o peso de uma ração (kg): `) * 1000)
consumo = Number(prompt(`Consumo em (gr) por dia: `))
duracao = racao / consumo
sobra = racao % consumo

console.log(`Peso da Ração (kg): ${(racao / 1000)}`)
console.log(`Consumo Diário (gr): ${consumo}`)
console.log(`Duração: ${Math.floor(duracao)}`)
console.log(`sobra: ${sobra}gr`)

