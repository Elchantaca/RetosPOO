class Paraceta{
  constructor(){
    //Posicion del personaje
    this.x = 150;
    this.y = 150;
    this.dir=0.5;
    //velocidad en x
    this.velx=2;
    this.vely=2;
    //Imagenes
    this.img=[]; //Array
    this.frame=0;
    for(var i=0; i<11;i++){
      
    this.img[i]=loadImage("Porfa/1p_"+i+".gif");
      
      }
    }
   mostrar(){
    push();
    translate(this.x, this.y);
    scale(this.dir,0.5);
    imageMode(CENTER);
    image(this.img[this.frame],0,0 );
    pop();
        }
  derecho(){
    this.frame++;
    this.x = this.x + this.velx;
    this.y= this.y+this.vely;
    this.dir = -0.5;
    if(this.frame > 10){
      this.frame = 0;
  }
  }
 izquierdo(){
    this.frame++;
    this.x = this.x + this.velx;
    this.dir = 0.5;
    if(this.frame > 10){
      this.frame = 0;
  }
 }
  arriba(){
    this.frame++;
    this.y=this.y+this.vely;
    if(this.frame>10){
      this.frame=0;
    }
  }
  abajo(){
    this.frame++;
    this.y=this.y-this.vely;
    if(this.frame>10){
      this.frame=0;
    }
  
}
}
