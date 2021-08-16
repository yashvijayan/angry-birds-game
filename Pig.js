class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
 this.Visibility=255;
  }
 
  display(){
 if(this.body.speed<2.2){
  


 
  console.log(this.body.speed);
  super.display();

 }
 else{
 push();
  World.remove(world,this.body);
 this.Visibility=this.Visibility-5;
 tint(255,this.Visibility);
 image(this.image,this.body.position.x,this.body.position.y,100,59);
pop();
 }





  }
};
