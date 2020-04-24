var Primero;
var Hill;
var Segundo;

function preload(){
 Hill=loadImage("imss.jpg");//Fondo
}

function setup() {
  createCanvas(600, 600);
  frameRate(50);
  Primero=new Paraceta();//Primer jugador
  Segundo=new Corona();//Segundo jugador 
}

function draw() {
  background(0);
  image(Hill,0,0,600,600);//Fondo del juego
  Primero.mostrar();
  if(keyCode==68){//Mover a la derecha con tecla d
    Primero.derecho()}
  if(keyCode==83){//Mover a la derecha con tecla d
    Primero.arriba()}
  if(keyCode==87){//Mover a la derecha con tecla d
    Primero.abajo()}
  if(keyCode==65){//Mover a la izquierda con tecla a
    Primero.izquierdo()}
  Segundo.mostrar();
  if(keyCode==76){//Mover a la derecha con tecla l
    Segundo.derecho()}
  if(keyCode==74){//Mover a la izquierda con tecla j
    Segundo.izquierdo()}
    if(keyCode==75){//Mover arriba con tecla i
    Segundo.arriba()}
  if(keyCode==73){//Mover abajo con tecla k
    Segundo.abajo()}

}
