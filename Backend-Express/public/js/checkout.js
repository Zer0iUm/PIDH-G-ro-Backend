window.addEventListener('load', () => {

const form = document.getElementById("form")
const nome = document.getElementById("nome--cartao");
const numero = document.getElementById("numero--cartao");
const validade = document.getElementById("validade--cartao");
const codigo = document.getElementById("cod--cartao");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (nome.value === ''){
        alert('Nome do cartão não informado.')
        nome.style.boxShadow = '0px 0px 5px #BD2D16'
    }
    else {
        nome.style.boxShadow = '0 0 0 white'
    }
    if (numero.value === '') {
        alert('Numero do cartão não informado.')
        numero.style.boxShadow = '0px 0px 5px #BD2D16'
    } else { 
        numero.style.boxShadow = '0 0 0 white'
    }
  
    if (validade.value === '') {
        alert('Validade do cartão não informado.')
        validade.style.boxShadow = '0px 0px 5px #BD2D16'
    } else {
        validade.style.boxShadow = '0 0 0 white'
    }
  
    if (codigo.value === '') {
        alert('Código do cartão não informado.')
        codigo.style.boxShadow = '0px 0px 5px #BD2D16'
    } else {
        codigo.style.boxShadow = '0 0 0 white'
    }
})

})


