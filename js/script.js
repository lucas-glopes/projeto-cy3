// mostra barra lateral
const iconeMenuHamburguer = document.querySelector("nav .container i.fa-bars");
const menuHamburger = document.querySelector(".menu-hamburguer");
const containerMenuHamburguer = menuHamburger.querySelector(".container");

iconeMenuHamburguer.addEventListener("click", () => {
    // aumentar opacidade do fundo
    menuHamburger.style.visibility = "visible";
    menuHamburger.style.backgroundColor = "rgba(0, 0, 0, .7)";

    // animar o container para dentro da tela
    containerMenuHamburguer.style.marginRight = "0";
});

// ocultar barra lateral
const iconeFecharMenuHamburguer = document.querySelector(
    ".menu-hamburguer .container .fa-xmark"
);

iconeFecharMenuHamburguer.addEventListener("click", () => {
    // diminuir opacidade do fundo
    menuHamburger.style.backgroundColor = "rgba(0, 0, 0, 0)";
    menuHamburger.style.visibility = "hidden";

    // animar o container para fora da tela
    containerMenuHamburguer.style.marginRight = "-100%";
});

// fechar seção de cookies
const botaoAceitarCookies = document.querySelector(
    "footer .cookies .container button"
);

botaoAceitarCookies.addEventListener("click", () => {
    document.querySelector("footer .cookies").style.display = "none";

    // tirar padding do body
    document.querySelector("body").style.paddingBottom = "0";
});

// mostra resposta das perguntas frequentes
const perguntasFrequentes = document.querySelectorAll(".duvida .pergunta");
const respostas = document.querySelectorAll(".duvida .resposta");
const iconesAbrir = document.querySelectorAll(".duvida .pergunta > i");

let perguntaAberta = [];

perguntasFrequentes.forEach((pergunta, index) => {
    perguntaAberta[index] = false;
});

perguntasFrequentes.forEach((pergunta, index) => {
    perguntasFrequentes[index].addEventListener("click", () => {
        if (!perguntaAberta[index]) {
            // rotacionar ícone
            iconesAbrir[index].style.transform =
                "translateY(2px) rotate(180deg)";

            // mostrar resposta
            respostas[index].style.display = "block";

            perguntaAberta[index] = true;
        } else {
            // voltrar ícone à rotação original
            iconesAbrir[index].style.transform = "translateY(2px) rotate(0)";

            // ocultar resposta
            respostas[index].style.display = "none";

            perguntaAberta[index] = false;
        }
    });
});

// voltar para página anteriror ao clicar no botão "voltar"
const linkVoltar = document.querySelector("header.titulo p");

linkVoltar.addEventListener("click", () => {
    window.history.back();
});
