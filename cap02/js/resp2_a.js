// cria referência ao form e ao elemento h3 ( onde será exibida a resposta)
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp2")
const resp2 = document.querySelector("#outResp1")


// cria um "ouvinte" de evento, acionado quando o botão submite for clicado
frm.addEventListener("submit", (e) => {
    const medicamento = frm.inMedicamento.value // obtém conteúdo dos campos
    const preco = parseFloat(frm.inPreco.value)

    promocao = Math.floor(preco) * 2

    resp2.innerText = `Promoção de ${medicamento}` // exibe resposta
    resp1.innerText = `Valor a pagar R$: ${promocao.toFixed(2)}` 
  
    e.preventDefault()  // evita envio do form
})