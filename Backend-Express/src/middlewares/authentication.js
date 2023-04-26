const requireLogin = (req, res, next) => {
	if (!req.session.isLogged) {
		res.redirect('login');
	} else {
		next();
	}
};

module.exports = requireLogin;
