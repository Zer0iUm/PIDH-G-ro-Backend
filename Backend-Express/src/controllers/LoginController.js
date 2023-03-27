const users = require('../database/users.json');

const userController = {
	userLogin: (req, res) => {
		const { email, password } = req.body;
		const user = users.find(
			u => u.email == email && u.password == password
		);
		if (user) {
			req.session.isLogged = true;
			req.session.username = user.name;
			res.redirect('/store');
			console.log(email);
		} else {
			alert('Email ou senha incorreto.');
		}
	},
};

module.exports = userController;
