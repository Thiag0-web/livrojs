const frm = document.querySelector("form")                   // obtém elementos da página
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()                                       // evita envio do form
    const valor = parseFloat(frm.inValor.value)
    
    if(valor < 1){
        resp1.innerText = `Valor insuficiente`
        resp2.innerText = ""

    } else if (valor < 1.75) {
         resp1.innerText = `Tempo: 30 min`
         resp2.innerText = `Troco R$: ${(valor - 1).toFixed(2)}`
    } else if (valor < 3) {
         resp1.innerText = `Tempo: 60 min`
         resp2.innerText = `Troco R$: ${(valor - 1.75).toFixed(2)}`
    } else {
         resp1.innerText = `Tempo: 120 min`
         resp2.innerText = `Troco R$: ${(valor - 3).toFixed(2)}`
    }
})