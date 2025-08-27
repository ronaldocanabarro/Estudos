
/*/---/ ALTERNAR MODO CLARO E ESCURO /---/*/

function aplicarModoSalvo() {
    const modo = localStorage.getItem('modo');
    document.body.classList.toggle('modo-escuro', modo === 'escuro');
};

function alternarModo() {
    document.body.classList.toggle('modo-escuro');
    const modoAtual = document.body.classList.contains('modo-escuro') ? 'escuro' : 'claro';
    localStorage.setItem('modo', modoAtual);
};

function configurarModoEscuro() {
    aplicarModoSalvo();
    const botao = document.getElementById('botao-modo-escuro');
    botao.addEventListener('click', alternarModo);
};

document.addEventListener('DOMContentLoaded', configurarModoEscuro);
