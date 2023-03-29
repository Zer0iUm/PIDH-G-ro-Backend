const users = require('../database/users.json');

const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../database/users.json');

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
			req.session.address = user.address;
			res.redirect('/homeStore');
			console.log(email);
		} else {
			req.session.errorMessage = true;
			res.redirect('/login');
		}
	},
	register: (req, res) => {
		const newUserData = { id: users.length + 1, ...req.body };
		users.push(newUserData);

		const usersJson = fs.readFileSync(usersFilePath, 'utf-8');
		const usersArray = JSON.parse(usersJson);
		usersArray.push(newUserData);
		res.redirect('login');

		fs.writeFileSync(
			usersFilePath,
			JSON.stringify(usersArray, null, 2),
			() => {
				res.send('User registration successful');
				res.redirect('login');
			}
		);
	},
	edit: (req, res) => {
		const { id } = req.session.id;
		const userIndex = users.findIndex(user => user.id === req.session.id);
		if (userIndex === -1) {
			// return res.status(404).send('Usuário não encontrado');
			console.log(userIndex, users);
		}

		const updatedUser = { ...users[userIndex], ...req.body };
		users[userIndex] = updatedUser;

		fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), err => {
			if (err) {
				console.error(err);
				res.status(500).send('Error writing to users.json file');
			} else {
				res.send('User updated successfully');
			}
		});
	},
};

module.exports = userController;
