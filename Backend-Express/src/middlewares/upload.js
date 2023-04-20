const multer = require('multer'); // FUNCIONALIDADES DO MULTER

// -------------------------------------------- MULTER ---------------------------- //
const multerDiskStorage = multer.diskStorage({
	destination: (req, file, callback) => {
		
		callback(null, 'public/img');
	},
	filename: (req, file, callback) => {
		const imageName = Date.now() + file.originalname;
		callback(null, imageName);
		
	},
});

const upload = multer({ storage: multerDiskStorage });

module.exports = upload

