class Box extends BaseClass {
  constructor(x, y, width, height){
    var options={
      "stiffness":0.0000005
    }
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
  }

};
