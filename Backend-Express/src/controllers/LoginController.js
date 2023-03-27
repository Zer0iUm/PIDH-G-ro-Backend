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
			req.session.email = user.email;
			res.redirect('/homeStore');
			console.log(email);
		} else {
			req.session.errorMessage = true;
			res.redirect('/login');
		}
	},
};

module.exports = userController;
