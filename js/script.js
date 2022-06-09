const { default: html2canvas } = require("html2canvas");

//#region variables
let penColor = "black";
const borrar = document.querySelector("#btn-borrar");
const piker = document.querySelector("#piker");
const descargar = document.querySelector("#btn-descargar");
//#endregion

//#region pintar
const seleccionarColor = (color) => (penColor = color);
const aplicarColor = (pixel) => (pixel.style.backgroundColor = penColor);
piker.addEventListener("input", () => (penColor = piker.value));
//#endregion

borrar.onclick = () => {
  let pixeles = document.querySelectorAll(".pixel");
  pixeles.forEach((Element) => (Element.style.backgroundColor = "#ffffff"));
};
