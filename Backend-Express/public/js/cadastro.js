window.onload = function() {
//----------------------FETCH VIA CEP---------------- //
const limparFormulario = (endereco) => {
    document.getElementById('endereco').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('state').value = "";
}

const preencherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('state').value = endereco.uf;
}

const isNumber = (numero) => /^[0-9]+$/.test(numero);
const state = document.getElementById('state');
const cepValido = (cep) => cep.length == 8 && isNumber(cep);

const pesquisarCep = async() => {
    limparFormulario()
    const cep = document.getElementById('viaCep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    if(cepValido(cep)){
        const dados = await fetch(url);
        const endereco = await dados.json();
        if(endereco.hasOwnProperty('erro')){
            document.getElementById('endereco').value = "CEP não encontrado"
        }else{
        preencherFormulario(endereco)
        }
    }else{
        document.getElementById('endereco').value = "CEP invalido"
    }
}

document.getElementById('viaCep').addEventListener('focusout', pesquisarCep)

//------------- FETCH ESTADOS-------------- //
fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
.then(r => r.json())
.then(json => {
    json.forEach(estado => {
        const stateOption = document.createElement('option')
        stateOption.value = estado.sigla
        stateOption.innerText = estado.nome
        state.append(stateOption)
        })
    });

}
