  class Wave{

setup(a,t){
this.xspacing = 10; 
this.widthWave = width + 16; 
this.theta = t; 
this.amplitude = a; 
this.period = 500.0; 
this.dx;
this.dx = (TWO_PI / this.period) * this.xspacing;
this.yvalues = new Array(floor(this.widthWave/ this.xspacing));
}

calculations(){

  this.x = this.theta;
  for (this.i = 0; this.i < this.yvalues.length; this.i++) {
    this.yvalues[this.i] = sin(this.x) * this.amplitude;
    this.x += this.dx;
  }
}
        
display(r,b,g,o){
  noStroke();
  fill(255);
  for (this.j = 0; this.j < this.yvalues.length; this.j++) {
        fill(r,b,g,o)
    ellipse(this.j * this.xspacing, height / 2 + this.yvalues[this.j], 16, 16);
  }
}

} //help from p5 editor