  
  class Mouth{


tongueUp(){

    this.pos = 280;

}


tongueDown(){

    this.pos = 400;
}


display(){

  stroke('#FCAFF7');
  fill('#FDC1F9');
  beginShape();
  vertex(375,250);
  vertex(370, this.pos);
  vertex(395,this.pos - 20);
  vertex(420,this.pos);
  vertex(415,250);
  endShape();

  strokeWeight(3);
  line(350,250,440,250);
}

}