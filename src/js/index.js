const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

botaoAlterarTema.addEventListener("click", () => {
    body.classList.add("modo-escuro");
});

const tipos = document.querySelector("tipos")
const modal = document.querySelector("sites")

tipos.onclick = function(){
    modal.show()
}