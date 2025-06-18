const frm = document.querySelector("form")                   // obtém elementos da página
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()                                       // evita envio do form
    numero = Number(frm.inNumero.value)
 /*
    if (numero % 2 === 0){
        resp.innerText = `${numero} é par`
    } else {
        resp.innerText = `${numero} é ímpar`
    }
        */

    const verificar = numero % 2 === 0 ? "Par" : "Impar"
    resp.innerText = (`${numero} é ${verificar}`) 
})