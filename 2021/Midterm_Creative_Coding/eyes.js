  class Eyes{

open(){

    this.x = 100
    this.y = 60
    this.z = 20

}

  display(){

    stroke(0);
    ellipseMode(CENTER);
    strokeWeight(1);
  fill(255);
  ellipse(247,95,100,this.x);
  ellipse(543,95,100,this.x);
  fill(0);
  ellipse(247,95,60,this.y);
  ellipse(543,95,60,this.y);
  fill(255)
  ellipse(242,85,20,this.z);
  ellipse(538,85,20,this.z);

    }

closed(){
 this.x = 1
 this.y = 1
 this.z = 0
}

}