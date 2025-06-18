const frm = document.querySelector("form")                   // obtém elementos da página
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()                                       // evita envio do form
    velocidadePermitida = Number(frm.inVelocidadePermitida.value)
    velocidadeCondutor = Number(frm.inVelocidadeCondutor.value)
    if (velocidadeCondutor <= velocidadePermitida) {
        resp.innerText = `Sem multa`
    } else if (velocidadeCondutor <= velocidadePermitida * 1.2) {
        resp.innerText = `até 20% a mais: Multa leve`
    } else {
        resp.innerText = "Acima de 20%: Multa grave"
    }

})