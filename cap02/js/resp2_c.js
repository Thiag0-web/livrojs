// cria referência ao form e ao elemento h3 ( onde será exibida a resposta)
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")


// cria um "ouvinte" de evento, acionado quando o botão submite for clicado
frm.addEventListener("submit", (e) => {
    const produto = (frm.inProduto.value) // obtém conteúdo dos campos
    const preco = Number(frm.inPreco.value)

    const total = (preco * 2) + (preco / 2) // Calculo 
    const desconto = preco / 2 

    resp1.innerText = `${produto} - Promoção: Leve 3 por ${total}` // exibe resposta
    resp2.innerText = `O 3° produto custa apenas R$: ${desconto}`
    e.preventDefault()  // evita envio do form
})

