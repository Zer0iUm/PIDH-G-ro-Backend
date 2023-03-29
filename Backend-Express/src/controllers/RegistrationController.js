const users = require('../database/users.json');

const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../database/users.json');

const registerController = {
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
		const { id } = req.params;
		const userIndex = users.findIndex(user => user.id === +id);
		if (userIndex === -1) {
			return res.status(404).send('Usuário não encontrado');
		}

		const updatedUser = { ...users[userIndex], ...req.body };
		users[userIndex] = updatedUser;

		fs.writeFileSync(usersFilePath, JSON.stringify(users), err => {
			if (err) {
				console.error(err);
				res.status(500).send('Error writing to users.json file');
			} else {
				res.send('User updated successfully');
			}
		});
	},
};

module.exports = registerController;
