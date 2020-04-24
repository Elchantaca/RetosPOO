class Corona{
  constructor(){
    //Posicion del personaje
    this.x = 150;
    this.y = 150;
    this.dir=3.5;
    //velocidad en x
    this.velx=10;
    this.vely=10;
    //Imagenes
    this.img=[]; //Array
    this.frame=0;
    for(var i=0; i<6;i++){
      
    this.img[i]=loadImage("Funciona/2p_"+i+".gif");
      
      }
    }
   mostrar(){
    push();
    translate(this.x, this.y);
    scale(this.dir,3.5);
    imageMode(CENTER);
    image(this.img[this.frame],0,0 );
    pop();
        }
  derecho(){
    this.frame++;
    this.x = this.x + this.velx;
    this.dir = -3.5;
    if(this.frame > 5){
      this.frame = 0;
  }
  }
 izquierdo(){
    this.frame++;
    this.x = this.x - this.velx;
    this.dir = 3.5;
    if(this.frame > 5){
      this.frame = 0;
  }
 }
  arriba(){
    this.frame++;
    this.y=this.y+this.vely;
    if(this.frame>5){
      this.frame=0;
    }
  }
  abajo(){
    this.frame++;
    this.y=this.y-this.vely;
    if(this.frame>5){
      this.frame=0;
    }
  
}
}
