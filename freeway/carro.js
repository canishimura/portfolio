// Códigos Carro

let xCarros = [400, 400, 400, 400, 400, 400];
let yCarros = [40, 100, 155, 215, 267, 325];
//let velocidadeCarros = [0, 0, 0, 0, 0, 0];
let velocidadeCarros = [2, 3, 5, 6, 4, 2];
let comprimentoCarro = 60;
let alturaCarro = 30;

function mostraCarro() {
  for(let i = 0; i < imagemCarros.length; i++){
  image(imagemCarros[i], xCarros[i], yCarros[i], 60, 30);
  }
}

function movimentaCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
  xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaCarro() {
  for(let i = 0; i< imagemCarros.length; i++) {
  if (passouTela(xCarros[i])){
    xCarros[i] = 600;
  }
  }
}

function passouTela(xCarro) {
  return xCarro < -50;
}