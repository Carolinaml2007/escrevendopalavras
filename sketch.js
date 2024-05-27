let palavra;

function setup() {
  createCanvas(400, 400);
  
  palavra = palavraAleatoria()
}

function palavraAleatoria(){
  let palavras =["Caneta", "Caminho", "Céu"];
  return random(palavras);
}

function inicializaCores() {
  background("White");
  fill("black");
  textSize(66);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo){
  let quantidade = map(mouseX, 0, maximo, minimo, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  inicializaCores();
  
  let parcial = palavraParcial(0, width);
  text(parcial, 200, 200);
}