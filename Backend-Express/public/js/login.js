/**********VALIDAÇÃO LOGIN**************/

const login = document.querySelector('.form__login');
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const mensagem = document.querySelector('.form__erro');

login.addEventListener('submit', e => {
	e.preventDefault();

	if (!validateEmail(email.value) || email.value == '') {
		mensagem.textContent = 'Confira campo e-mail';
	} else if (!validatePassword(senha.value) || senha.value == '') {
		mensagem.textContent = 'Confira campo senha';
		// } else if (req.session.errorMessage == true) {
		// 	alert(req.session.errorMessage);
		// 	// req.session.errorMessage = false;
		// 	res.redirect('/login');
	} else {
		login.submit();
	}
});

// const errorMessage = session.errorMessage;
// if (errorMessage) {
// 	mensagem.textContent = session.errorMessage;
// }

function validateEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

function validatePassword(password) {
	const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
	return passwordRegex.test(password);
}
