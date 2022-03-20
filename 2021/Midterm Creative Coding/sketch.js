function setup() {
  createCanvas(800, 800);
  background(114,53,53);
  fill(100,13,13)
  rect(0, height/2, 800,400)
  
}

function draw() {
  
  fill(84,174,102);
  
  beginShape();
  //left hand
  vertex(96,598);
  curveVertex(53,621);
  curveVertex(26,665);
  curveVertex(61,670);
  curveVertex(46,694);
  
  curveVertex(39,700);
  curveVertex(57,695);
  curveVertex(108,688);
  curveVertex(109,700);
  
  curveVertex(141,697);
  vertex(170,675);
  
  //under body
  curveVertex(379,700);
  vertex(589,662);
  
  //right hand
  curveVertex(617,697);
  curveVertex(637,665);
  curveVertex(675,695);
  curveVertex(718,696);
  curveVertex(708,666);
  curveVertex(678,641);
  curveVertex(736,663);
  curveVertex(729,624);
  vertex(696,593);
  
  //right side
  curveVertex(770,409);
  curveVertex(757,245);
  curveVertex(718,220);
  curveVertex(685,230);
  curveVertex(676,251);
  vertex(663,287);
  curveVertex(637,232);
  
  //right eye
  vertex(593,192);
  curveVertex(643,99);
  curveVertex(610,23);
  curveVertex(498,22);
  curveVertex(452,63);
  vertex(455,118);
  
  //middle head
  curveVertex(401,111);
  vertex(347,122);
  
  
  //left eye
  curveVertex(345,64);
  curveVertex(298,15);
  curveVertex(226,9);
  curveVertex(159,49);
  curveVertex(150,95);
  curveVertex(173,142);
  vertex(193,175);
  
  //left side
  curveVertex(174,218);
  vertex(156,264)
  curveVertex(136,234);
  curveVertex(97,215);
  curveVertex(49,252);
  curveVertex(32,324);
  curveVertex(42,410);
  curveVertex(61,512);
  curveVertex(77,573);
  vertex(80,606);
  vertex(96,598);
  

  
  endShape();


    //eyess
  ellipseMode(CENTER);
  fill(255);
  ellipse(247,95,100,100);
  
  fill(255);
  ellipse(543,95,100,100);
  
  
  if (mouseIsPressed === true) {
  print("X: " + mouseX)
  print("Y: " + mouseY)
  }
  
}