const tagSVG = document.querySelector("svg");

console.log(tagSVG)

const pathDoSVG = document.querySelector("path");
console.log(pathDoSVG)
const tamanhoTotalDoPath = pathDoSVG.getTotalLength();

tagSVG.style.setProperty("--tamanhoTotalDoPath", tamanhoTotalDoPath);

console.log(tamanhoTotalDoPath)
