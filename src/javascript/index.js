const botao = document.querySelector(".send-btn");
const inputs = document.querySelectorAll(".input");
const avisos = document.querySelectorAll(".aviso");

console.log(avisos);

botao.addEventListener("click", function () {
  inputs.forEach(function (item, indice) {
    if (item.value !== "") {
      item.classList.remove("campo-invalido");
      item.classList.add("campo-valido");
      avisos[indice].classList.remove("mostrar-aviso");
    } else {
      item.classList.remove("campo-valido");
      item.classList.add("campo-invalido");
      avisos[indice].classList.add("mostrar-aviso");
    }
  });
});
