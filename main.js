function headerClassToggle() {
	var headerBtn = this.classList.toggle('hide');
}
document.querySelector('#header').addEventListener('click', headerClassToggle);

function footerClassToogle() {
	var footerBtn = this.classList.toggle('show');
}
document.querySelector('#footer').addEventListener('click', footerClassToogle);