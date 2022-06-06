 class Eyes{

open(){

    this.x = 100
    this.y = 60
    this.z = 20
    fill("#387949")
}

//add spiral of eye here  
  display(o){



    stroke(0,o);
    ellipseMode(CENTER);
    strokeWeight(1);
  fill(255,o);
  ellipse(247,95,100,this.x);
  ellipse(543,95,100,this.x);
  fill(0,o);
  ellipse(247,95,60,this.y);
  ellipse(543,95,60,this.y);
  fill(255,o)
  ellipse(242,85,20,this.z);
  ellipse(538,85,20,this.z);
  //eyelids
  noStroke()
  fill(56,121,73,o)
  arc(247,85, 100, 90, PI,0, CHORD);
  arc(543,85, 100, 90, PI,0, CHORD);

    }

closed(){
   stroke(0);
 this.x = 1
 this.y = 1
 this.z = 0
}

  }