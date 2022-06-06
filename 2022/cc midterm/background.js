class Background{

empty(){
noStroke();
}

crazy(o){

  this.start = color('#FF0AF0');
  this.end = color('#B300FF');
  
  for(this.y=0; this.y<height; this.y++){
    this.change = map(this.y,0,height,0,1);
    this.gradient = lerpColor(this.start,this.end,this.change);
    stroke(this.gradient,o);
    line(0,this.y,width, this.y)
} //help from p5 editor

}}