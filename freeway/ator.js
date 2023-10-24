// Códigos Ator
let xAtor = 250;
let yAtor = 365;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if(podeSeMover()){
    yAtor += 3;
    }
  }  
}

function verificaColisao() {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if (colisao) {
      voltaAtorPosicaoInicial();
      somDaColisao.play();
      if(pontosMaiorQueZero()) {
      meusPontos -= 1;
      }
    }
  }
}

function voltaAtorPosicaoInicial() {
  yAtor = 365;
}

function incluiPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 245, 90));
  text(meusPontos, width / 5, 27);
}

function marcaPontos() {
  if (yAtor <=5) {
    meusPontos +=1;
    voltaAtorPosicaoInicial();
    somDoPonto.play();
  }
}

function pontosMaiorQueZero() {
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 366;
}