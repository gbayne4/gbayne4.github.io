  class Frog{
//add eyes to here

  display(r,b,g, x,y,s,o){
        
push(); 
    
translate(x,y);
scale(s);

  fill(r,b,g,o);
    noStroke();
  
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

pop();
}
spots(r,b,g,o){ 
  fill(r,b,g,o);
    noStroke();
ellipse(52,330,40,100)
ellipse(120,480,70,90)
ellipse(220,610,100,60)
ellipse(380,470,80,80)
ellipse(535,310,70,40)
ellipse(360,200,50,60)
ellipse(400,650,80,60)
ellipse(700, 400,80,90)
ellipse(650,600,60,60)
ellipse(230,350,60,80)
ellipse(550,500,80,50)
ellipse(740,260,40,50)
ellipse(560,160,40,20)
ellipse(400,310,40,30)
ellipse(100,640,30,20)
ellipse(220,230,30,30)
ellipse(240,500,20,30)
ellipse(520,420,30,30)
ellipse(470,590,50,40)
ellipse(125,290,30,25)
ellipse(190,100,20,30)
ellipse(595,40,20,20)
ellipse(310,40,20,20)
}}


