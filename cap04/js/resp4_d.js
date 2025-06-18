const frm = document.querySelector("form")                   // obtém elementos da página
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()                                       // evita envio do form
    const ladoA = parseFloat(frm.inLadoA.value)
    const ladoB = parseFloat(frm.inLadoB.value)
    const ladoC = parseFloat(frm.inLadoC.value)

    if (ladoA > (ladoB + ladoC)) {
        resp1.innerText = `Lado A maior que os outros`
        resp2.innerText = "Tipo: Erro"
    } else if (ladoB > (ladoA + ladoC)) {
        resp1.innerText = `Lado B maior que os outros`
        resp2.innerText = "Tipo: Erro"
    } else if (ladoC > (ladoA + ladoB)) {
        resp1.innerText = `Lado C maior que os outros`
        resp2.innerText = "Tipo: Erro"
    } else if (ladoA === ladoB && ladoB === ladoC) {
        resp1.innerText = `Lados podem formar um triângulo`
        resp2.innerText = "Tipo: Equilátero"
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        resp1.innerText = `Lados podem formar um triângulo`
        resp2.innerText = "Tipo: Isósceles"
    } else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
        resp1.innerText = `Lados podem formar um triângulo`
        resp2.innerText = "Tipo: Escaleno"
    }
})