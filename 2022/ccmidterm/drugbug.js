 class Bug{


    display(x,y,o){

        push(); 
    
translate(x,y);

  frameRate(15)
  //drug bug
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