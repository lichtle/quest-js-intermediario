const botao = document.querySelector(".send-btn");
const inputs = document.querySelectorAll(".input");
const avisos = document.querySelectorAll(".aviso");

console.log(avisos);

botao.addEventListener("click", function () {
  inputs.forEach(function (item, indice) {
    if (item.value !== "") {
      item.classList.add("campo-valido");
    } else {
      item.classList.add("campo-invalido");
      avisos[indice].classList.add("mostrar-aviso");
    }
  });
});
