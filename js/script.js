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

function tomarImagen(div, nombre) {
  html2canvas(document.querySelector(div)).then(canvas => {

    var a = document.createElement('a');
    a.download = nombre;
    a.href = canvas.toDataURL("../img/");
    a.click();
    
  });
}
descargar.onclick = () => {
  tomarImagen('#art', 'imagen.png');
}