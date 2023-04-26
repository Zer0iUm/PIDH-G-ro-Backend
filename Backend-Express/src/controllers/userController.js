const users = require('../database/users.json');
const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../database/users.json');
const bcrypt = require('bcrypt');

const userController = {
	userLogin: (req, res) => {
		const { email, password } = req.body;
		const user = users.find(
			u => u.email == email && u.password == password
		);
		if (user) {
			// req.session = { ...user };
			req.session.isLogged = true;

			req.session.username = user.name;
			req.session.email = user.email;
			req.session.id = user.id;
			res.redirect('/homeStore');
			console.log(email);
		} else {
			req.session.errorMessage = true;
			res.redirect('/login');
			console.log('nao foi');
		}
	},

	register: (req, res) => {
		const newUserData = { id: users.length + 1, ...req.body };

		const hash = bcrypt.hashSync(newUserData.password, 10); // bcrypt
		newUserData.password = hash; // salva na propriedade senha

		users.push(newUserData);

		const usersJson = fs.readFileSync(usersFilePath);
		const usersArray = JSON.parse(usersJson);
		usersArray.push(newUserData);
		res.redirect('login');

		fs.writeFileSync(
			usersFilePath,
			JSON.stringify(usersArray, null, 2),
			() => {
				res.redirect('login');
			}
		);
	},
};

module.exports = userController;
