// cria referência ao form e ao elemento h3 ( onde será exibida a resposta)
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")


// cria um "ouvinte" de evento, acionado quando o botão submite for clicado
frm.addEventListener("submit", (e) => {
    const uso = Number(frm.inUso.value) // obtém conteúdo dos campos
    const tempo = Number(frm.inTempo.value)

    const periodos = Math.ceil(tempo / 15)
    valorTotal = periodos * uso

    resp1.innerText = `Valor a Pagar R$ ${valorTotal.toFixed(2)}` // exibe resposta

    e.preventDefault()  // evita envio do form
})

