function setQuantidade(input) {
	let valor = document.getElementById('input-quantidade').value;
	if (input === 'remove') {
		valor <= 0 ? (valor = 0) : valor--;
		document.getElementById('input-quantidade').value = valor;
	} else if (input === 'add') {
		valor++;
		document.getElementById('input-quantidade').value = valor;
	}
	total = document.getElementById('valorTotal').textContent;
	console.log(total);
}

function changeImage(thumbnail) {
	document.getElementById('display').src = thumbnail;
}

function clickedImage(id) {
	document.getElementById('img-mini-1').style.opacity = 1;
	document.getElementById('img-mini-2').style.opacity = 1;
	document.getElementById('img-mini-3').style.opacity = 1;

	document.getElementById(id).style.opacity = 0.5;
}