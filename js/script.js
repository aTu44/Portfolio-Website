const botão__header__responsivo = document.querySelector(".botão__header__responsivo");
const cabecalho__menu = document.querySelector(".cabecalho__menu");

botão__header__responsivo.addEventListener("click", () => cabecalho__menu.classList.toggle("active"));
