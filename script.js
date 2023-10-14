let body = document.body;
let titulo = document.querySelector(".cabecalho h1")
let menuTitulo = document.querySelectorAll(".menu-item a")
let habilidadesFotos = document.querySelectorAll(".habilidades-fotos-itens")
let projetosItem = document.querySelectorAll(".projetos-item")
let footer = document.querySelector("footer")
let botao = document.querySelector("button")

function adicionar() {
    body.classList.toggle("body-dl")
    titulo.classList.toggle("titulo-dl")
    menuTitulo.forEach((item) => {
        item.classList.toggle("link-menu-dl")
    })
    habilidadesFotos.forEach((item) => {
        item.classList.toggle("habilidades-fotos-itens-dl")
    })
    projetosItem.forEach((item) => {
        item.classList.toggle("projetos-item-dl")
    })
    footer.classList.toggle("footer-dl")
}

botao.addEventListener("click", adicionar)