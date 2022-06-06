class Clock{
	
keepTop(){
	this.x = width/2
	this.y = 0
}
	
display(x,y,o){
		stroke(0,o)
  strokeWeight(4,o);
	line(this.x,this.y,width/2+x-300,height-200+y-400)
	push();
	translate(x-300,y-400);
	
  fill(255,o);
  stroke(0,o);
  strokeWeight(10,o);
  ellipse(width/2, height-200, 250,250)
  ellipse(width/2, height-200,20,20)
  strokeWeight(2,o);
  //12 
  line(375+8,520,389+8,493)
  line(389+8,520,375+8,493)
  line(397+8,520,397+8,493)
  line(405+8,520,405+8,493) 
  //1
  line(440,532,458,508)
  //2
  line(464,554,490,539)
  line(469,561,493,547)
  //3
  line(476,590,508,590)
  line(476,598,508,598)
  line(476,606,508,606)
  //4
  line(500,647,469,633)
  line(496,655,466,641)
  line(493,662,462,648)
  line(488,669,458,654)
  //5
  line(442,672,466,688)
  line(442,672,457,696)
  //6
  line(410,683,416,708)
  line(410,683,404,709)
  line(397,683,397,709)
  //7
  line(359,669,335,687)
  line(359,669,347,696)
  line(330,683,352,662)
  line(325,678,347,655)
  //8
  line(331,633,303,649)
  line(331,633,298,638)
  line(295,633,328,623)
  line(293,626,327,616)
  line(291,620,325,610)
  //9
  line(324,600,290,600)
  line(324,595,290,580)
  line(324,580,290,595)
  //10
  line(331,561,309,534)
  line(303,548,340,545)
  //11
  line(331,513,364,525)
  line(349,537,343,504)
  line(368,523,357,496)
  
  //clock arm
  
  strokeWeight(4,o)
  line(400,589,400,517)
  triangle(397,517,400,510,403,517)
  //little arm
  line(400,614,400,647)
  triangle(397,647,400,654,403,647)
	pop();
}
}