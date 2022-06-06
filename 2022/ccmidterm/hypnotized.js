class Hypnotized{

variables(x){
// this.angle = 2.0;
// this.xspot = 250 
// this.otherxspot = 545;

// this.yspot = 100
// this.otheryspot = 100;
// this.scalar = 1.0;
// this.speed = .01;
// this.col = {r: 0, g: 0, b: 0};

this.x = x
	}

display(o){
	stroke("#FF12F8");
	fill(0,o);
  ellipse(247,95,this.x ,this.x );
  ellipse(543,95,this.x ,this.x );

	  // this.speed += .005
  
//couldn't get this to work

// if (this.angle < 100){
//   this.col.r = random(100, 250);
//   this.col.g = random(0, 250);
//   this.col.b = random(100, 250);
//   this.x = cos(this.angle) * this.scalar + this.otherxspot;
//   this.y = sin(this.angle) * this.scalar + this.otheryspot;
//   fill(this.col.r, this.col.g, this.col.b);
//   noStroke();
//   rect(this.x, this.y, 1, 10);
//   this.angle += this.speed;
//   this.scalar += this.speed;
//   }
// if (this.angle > 100){
//   this.angle = 0;
//   this.scalar = 0;
// }
// if (this.angle < 100){
//   this.col.r = random(100, 250);
//   this.col.g = random(0, 250);
//   this.col.b = random(100, 250);
//   this.x = cos(this.angle) * this.scalar + this.xspot;
//   this.y = sin(this.angle) * this.scalar + this.yspot;
//   fill(this.col.r, this.col.g, this.col.b);
//   noStroke();
//   rect(this.x, this.y, 1, 10);
//   this.angle += this.speed;
//   this.scalar += this.speed;
//   }
// if (this.angle > 100){
//   this.angle = 0;
//   this.scalar = 0;
}

}