const fs = require('fs');

const log = (req, res, next) => {
	const file = 'src\\logs\\logs.txt';

	if (!fs.existsSync(file))
		// verifica se o arquivo existe
		fs.writeFileSync(file, ''); // cria o arquivo caso ele não exista

	fs.appendFileSync(file, 'O usuário acessou a rota: ' + req.url + '\n'); // atualiza o arquivo
	next();
};
module.exports = log;
