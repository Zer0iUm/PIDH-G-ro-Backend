window.onload = function () {
	const editUserButton = document.getElementById('btn-editUser');

	editUserButton.addEventListener('click', () => {
		console.log('entrou na função editUser');
		const editUserForm = document.getElementById('editUserForm');
		editUserForm.classList.toggle('editUser');
		editUserForm.classList.toggle('editUserActive');
	});
};

function teste() {
	console.log(teste, req.session.id);
}
