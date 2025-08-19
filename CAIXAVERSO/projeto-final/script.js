const darkModeButton = document.getElementById('botao-modo-escuro');
const body = document.body;

darkModeButton.addEventListener('click', () => {
    body.classList.toggle('modo-escuro');
});