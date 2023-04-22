//Mudar quantidade no input
function setQuantidade(input) {
	let valor = document.getElementById('input-quantidade').value;
	if (input === 'remove') {
		valor <= 1 ? (valor = 1) : valor--;
		document.getElementById('input-quantidade').value = valor;
		//updateTotal();
	} else if (input === 'add') {
		valor++;
		document.getElementById('input-quantidade').value = valor;
	}
	total = document.getElementById('valorTotal').textContent;
	console.log(total);
}

//Mudar a imagem grande do produto
function changeImage(thumbnail) {
	document.getElementById('display').src = thumbnail;
}

//Sinalizar qual imagem está aparecendo no display do produto
function clickedImage(id) {
	document.getElementById('img-mini-1').style.opacity = 1;
	document.getElementById('img-mini-2').style.opacity = 1;
	document.getElementById('img-mini-3').style.opacity = 1;

	document.getElementById(id).style.opacity = 0.5;
}

//Mudar valor do produto dependendo da quantidade
window.addEventListener('load', () => {
	let itemValue = document.getElementById('valorTotal').textContent.slice(2);
	const btnRemover = document.getElementById('remover');
	const btnAdicionar = document.getElementById('adicionar');
	const currency = 'R$';

	function handleValue() {
		const showItemValue = document.getElementById('valorTotal');
		const itemQuantity = document.getElementById('input-quantidade').value;
		const newValue = Number(itemValue) * Number(itemQuantity);
		showItemValue.textContent = `${currency}${newValue.toFixed(2)}`;
	}

	btnRemover.addEventListener('click', handleValue);
	btnAdicionar.addEventListener('click', handleValue);
});



// Valor total0, do produto

/* function updateTotal(){
    let valorTotal = 0
    const produtoCarrinho = document.getElementsByClassName("compra")

for (var i = 0; i < produtoCarrinho.length; i++) {
    const precoProduto = produtoCarrinho[i].getElementByName("valor_unitário")[0].innerText.replace("R$", "").replace(",", ".");
    quantidadeProduto = produtoCarrinho[i].getElementByName("input-quantidade")[0].value;

      valorTotal += (precoProduto * quantidadeProduto) 
}
    valorTotal = valorTotal.toFixed(2)
    valorTotal = valorTotal.replace(".", ",")
    document.querySelector(".valor_total class").innnerText = "R$ " + valorTotal
} */