// mostra barra lateral
const iconeMenuHamburguer = document.querySelector('nav .container i.fa-bars')
const menuHamburger = document.querySelector('.menu-hamburguer')
const containerMenuHamburguer = menuHamburger.querySelector('.container')

iconeMenuHamburguer.addEventListener('click', () => {
    // aumentar opacidade do fundo
    menuHamburger.style.visibility = 'visible'
    menuHamburger.style.backgroundColor = 'rgba(0, 0, 0, .7)'

    // animar o container para dentro da tela
    containerMenuHamburguer.style.marginRight = '0'

    menuHamburguerAtivo = true
})

// ocultar barra lateral
const iconeFecharMenuHamburguer = document.querySelector('.menu-hamburguer .container .fa-xmark')

iconeFecharMenuHamburguer.addEventListener('click', () => {
    // diminuir opacidade do fundo
    menuHamburger.style.backgroundColor = 'rgba(0, 0, 0, 0)'
    menuHamburger.style.visibility = 'hidden'

    // animar o container para fora da tela
    containerMenuHamburguer.style.marginRight = '-100%'

    menuHamburguerAtivo = true
})