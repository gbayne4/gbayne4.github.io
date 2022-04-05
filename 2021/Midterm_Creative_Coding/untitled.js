class manyBug{
    constructor(x,y,x1,y1,ax,ay,r,g,b){
        this.position = new createVector(x,y);
        this.velocity = new createVector(x1,y1);
        this.acceleration= new createVector(ax,ay);
        this.r = r;
        this.g = g;
        this.b = b;
    }

    update(){
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
    }

    checkEdges(){
        if ((this.position.x > width ) || (this.position.x < 0)){
            this.velocity.x = this.velocity.x * -1;
        }
        if((this.position.y > height) || (this.position.y < 0) ){
            this.velocity.y = this.velocity.y * -1;
        }
    }

    checkMouse(){
        if (((this.position.x < mouseX+10 ) && (this.position.x > mouseX-10))&&((this.position.y < mouseY+10) && (this.position.y > mouseY-10))) {
            this.velocity.x = this.velocity.x * -1;
            this.velocity.y = this.velocity.y * -1;
        }
    }

    display(){

    push();
    translate(this.position.x,this.position.y);
  strokeWeight(1);
  stroke(0,o);

  fill(random(255),random(255),random(255),o);

  triangle(245,200,random(230,235),160,random(255,260),160);

  fill(random(255),random(255),random(255),o);

  ellipse(255,200, 40,40);

  fill(random(255),random(255),random(255),o);

  triangle(265,200,random(250,255),160,random(275,280),160);

  fill(0,o)

  ellipse(240,200,20,20);

  ellipse(255,200,20,20);

  fill(random(255),random(255),random(255),o);

  ellipse(235,195,5,5);

  ellipse(250,195,5,5);
  pop();
    }
}

}