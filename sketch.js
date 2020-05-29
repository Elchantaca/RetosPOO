var uno;
var dos;
var tres;
var cuatro;
var cinco;
var angulo1=1;
var angulo2=10;
var angulo3=150;
var angulo4=100;
var Song;
var slider;
var sliderA;
var Sol;

function preload(){
  Song=loadSound("Mario.mp3");
}

function setup() {
  createCanvas(400, 400);
  textSize(30);
  angleMode(DEGREES);
  Sol=new Padre();
  uno=loadImage("planeta 4.png");
  dos=loadImage("planeta 1.png");
  tres=loadImage("planeta 2.png");
  cuatro=loadImage("planeta 3.png");
  cinco=loadImage("planeta 5.png");
  Song.play();
  slider=createSlider(30);
  sliderA=createSlider(0,1,0.5,0.01);

}

function draw() {
  background(220);
  frameRate(slider.value());
  Song.setVolume(sliderA.value());
  push();
  textAlign(LEFT,TOP);
  text(angulo1, 1,1);
  pop();
  push();
  textAlign(RIGHT,TOP);
  text(angulo2,400,1); 
  pop();
  push();
  textAlign(LEFT,BOTTOM);
  text(angulo3,1,400);
  pop();
  push();
  textAlign(RIGHT,BOTTOM);
  text(angulo4,400,400); 
  pop();
  push();
  translate(200,200);
  rotate(angulo1);
  scale(1/4,1/4);
  imageMode(CENTER);
  image(uno,0,0);
  angulo1++;
  pop();
  
  push();
  translate(210,210);
  rotate(angulo2);
  scale(1/15,1/15);
  imageMode(CENTER);
  image(dos,1300,1300);
  angulo2++;
  pop();
  
  push();
  translate(180,180);
  rotate(angulo3);
  scale(1/10,1/10);
  imageMode(CENTER);
  image(tres,900,900);
  angulo3++;
  translate(230,230);
  rotate(angulo3);
  scale(1/100,1/100);
  image(cinco,100,100);

  pop();
  
  push();
  translate(200,200);
  rotate(angulo4);
  scale(1/6,1/6);
  imageMode(CENTER);
  image(cuatro,750,750);
  angulo4++;
  pop();
  
  push();
  translate(200,200);
  rotate(angulo3);
  scale(1/100,1/100);
  image(cinco,7020,7020);
  angulo3++;
  pop();
  Sol.mostrar();

}