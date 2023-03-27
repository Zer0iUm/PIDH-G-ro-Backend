/**********VALIDAÇÃO CADASTRO**************/
const state = document.getElementById('state')

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
