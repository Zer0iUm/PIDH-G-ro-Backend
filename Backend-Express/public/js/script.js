function changeInfo(info) {
	setInfo = document.getElementById(info);
	selectedInfo = setInfo.id.slice(-1);
	setInfo.classList.add('show--info');

	if (selectedInfo == 1) {
		document.getElementById('show--info2').classList.remove('show--info');
		document.getElementById('show--info3').classList.remove('show--info');
	}
	if (selectedInfo == 2) {
		document.getElementById('show--info1').classList.remove('show--info');
		document.getElementById('show--info3').classList.remove('show--info');
	}
	if (selectedInfo == 3) {
		document.getElementById('show--info1').classList.remove('show--info');
		document.getElementById('show--info2').classList.remove('show--info');
	}
}

/**********PRODUTO**************/

/* INDEX POPUP */
function closePopUp() {
	document.getElementById('container-pop-up').style.display = 'none';
}

function checkAge() {
	const currentYear = new Date().getFullYear();
	const year = document.getElementById('year').value;
	const age = currentYear - year;
	age >= 18 ? closePopUp() : alert('Você não tem idade suficiente');
}

/**********RESPONSIVIDADE MENU E MENU-BAR**************/
const menu_bar = document.querySelector('.menu-bar');
const NavMenu = document.querySelector('.nav_menu');

menu_bar.addEventListener('click', () => {
	menu_bar.classList.toggle('ativo');
	NavMenu.classList.toggle('ativo');
});

/**********CARROSSEL HOME-LOJA**************/
const swiper = new Swiper('.swiper', {
	speed: 400,
	spaceBetween: 10,
	slidesPerView: 1,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},
});

/***********MENU OVER HOME-LOJA*****************/

const menuOne = document.getElementById('menuOne');
const menuTwo = document.getElementById('menuTwo');
const menuThree = document.getElementById('menuThree');
const menuFour = document.getElementById('menuFour');
const menuFive = document.getElementById('menuFive');

const mouseOverMenu = () => {
	menuOne.style.textDecoration = 'underline';
};
const mouseOutMenu = () => {
	menuOne.style.textDecoration = 'none';
};

const mouseOverMenuTwo = () => {
	menuTwo.style.textDecoration = 'underline';
};
const mouseOutMenuTwo = () => {
	menuTwo.style.textDecoration = 'none';
};

const mouseOverMenuThree = () => {
	menuThree.style.textDecoration = 'underline';
};
const mouseOutMenuThree = () => {
	menuThree.style.textDecoration = 'none';
};

const mouseOverMenuFour = () => {
	menuFour.style.textDecoration = 'underline';
};
const mouseOutMenuFour = () => {
	menuFour.style.textDecoration = 'none';
};

const mouseOverMenuFive = () => {
	menuFive.style.textDecoration = 'underline';
};
const mouseOutMenuFive = () => {
	menuFive.style.textDecoration = 'none';
};

/***********CADASTRO DE PRODUTOS*****************/

const form = document.querySelector('form');
form.addEventListener('submit', cadastrarProduto);

function cadastrarProduto(event) {
	event.preventDefault();

	const nome = document.querySelector('#nome').value;
	const descricao = document.querySelector('#descricao').value;
	const preco = document.querySelector('#preco').value;
	const imagem = document.querySelector('#imagem').value;

	console.log('Nome:', nome);
	console.log('Descrição:', descricao);
	console.log('Preço:', preco);
	console.log('Imagem:', imagem);
}

// /***********Mouse event carrinho*****************/
// window.addEventListener('load', function () {
// 	const btn_prt = document.querySelector('.botao_preto');

// 	btn_prt.addEventListener('mouseover', function () {
// 		btn_prt.classList.add('hv_preto');
// 	});

// 	btn_prt.addEventListener('mouseout', function () {
// 		btn_prt.classList.remove('hv_preto');
// 	});

// 	const btn_ama = document.querySelector('.botao_amarelo');

// 	btn_ama.addEventListener('mouseover', function () {
// 		btn_ama.classList.add('hv_amarelo');
// 	});

// 	btn_ama.addEventListener('mouseout', function () {
// 		btn_ama.classList.remove('hv_amarelo');
// 	});

// 	const links_menu = document.querySelectorAll('.menu__linka');

// 	links_menu.forEach(link => {
// 		link.addEventListener('mouseover', function () {
// 			link.classList.add('menu__linka_hvr');
// 		});

// 		link.addEventListener('mouseout', function () {
// 			link.classList.remove('menu__linka_hvr');
// 		});
// 	});

// 	const login = document.querySelector('.log');

// 	login.addEventListener('mouseover', function () {
// 		login.classList.add('menu__linka_hvr');
// 	});

// 	login.addEventListener('mouseout', function () {
// 		login.classList.remove('menu__linka_hvr');
// 	});

// 	const carrin = document.querySelector('.car');

// 	carrin.addEventListener('mouseover', function () {
// 		carrin.classList.add('menu__linka_hvr');
// 	});

// 	carrin.addEventListener('mouseout', function () {
// 		carrin.classList.remove('menu__linka_hvr');
// 	});
// });
