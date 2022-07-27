//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

// variaveis da raquete
let  xRaquete = 5;
let  yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variaveis segunda raquete
let xSegundaRaquete = 580;
let ySegundaRaquete = 150;
let velocidadeyRaquete;

//placar
let meusPontos = 0;
let pontosOponente = 0;

//som de ponto
let ponto;

function preload(){
  ponto = loadSound("ponto.mp3");
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  colisao();
  mostraRaquete ();
  movimentaRaquete();
  verificaColisaoRaquete();
  mostraSegundaRaquete();
  movimentaSegundaRaquete();
  colisaoSegundaRaquete();
  incluiPlacar();
  marcaPonto();
  movimentaSegundaRaquete();
  bolinhaNaoFicaPresa();
}


function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}

function colisao() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadexBolinha *= -1;
  }
  if (yBolinha + raio> height || yBolinha - raio < 0) {
    velocidadeyBolinha *= -1; 
  }
}

 function mostraRaquete(){
    rect(xRaquete,yRaquete, raqueteComprimento, raqueteAltura);  
 }

function movimentaRaquete(){
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
}

  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
}
}

function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadexBolinha *= -1;
  }  
}

function mostraSegundaRaquete(){
  rect(xSegundaRaquete,ySegundaRaquete, raqueteComprimento, raqueteAltura); 
}

function movimentaSegundaRaquete(){
  velocidadeyRaquete = yBolinha - ySegundaRaquete - raqueteComprimento / 2 - 30;
  ySegundaRaquete += velocidadeyRaquete
}

function colisaoSegundaRaquete(){
  if (xBolinha + raio > xSegundaRaquete && yBolinha - raio < ySegundaRaquete + raqueteAltura &&
yBolinha + raio > ySegundaRaquete){
velocidadexBolinha *= -1
  }
}

function incluiPlacar(){
  stroke(255);
  textAlign (CENTER);
  textSize(16);
  fill(color(0,139,139));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(0,139,139));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosOponente, 470, 26);
}  

function marcaPonto() {
    if (xBolinha > 590) {
        meusPontos += 1;
        ponto.play();
    }
    if (xBolinha < 10) {
        pontosOponente += 1;
        ponto.play();
    }
}

function movimentaSegundaRaquete(){
   if (keyIsDown(87)) {
    ySegundaRaquete -= 10;
}

  if (keyIsDown(83)) {
    ySegundaRaquete += 10;
}
}

//87 representa a tecla "W" e 83 a "S" para possibilitar o jogo multiplayer



