let font, placement = 700;
let line0 = true , line1 = true,line2 = false,line3 = false,line4= false,line5= false,line6= false,line7= false, line8= false, line9 = false,line10 = false;
let line11= false, line12= false, line13= false, line14 = false, line15 = false, line16= false, line17= false, line18 = false, line19 = false, line20= false;
let count = 0, count2 = 0;
let begin = true, choice1 = false, choice2 = false, choice3 = false, choice4 = false, choice5 = false, choice6 = false, choice7 = false, choice8 = false,  choice9 = false;


function preload(){
	font = loadFont('text/text.ttf');
	woodfloor = loadImage('images/woodfloor.png');
	fancychair = loadImage('hall/fancychair.png');
	clock = loadImage('hall/clock.png');
	portrait = loadImage('hall/portait.png')
	scarlet = loadImage('characters/scarlet.png')
	carpet = loadImage('hall/carpet.png')
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background('#FFF8F0');
	image(woodfloor,-200,430, windowWidth+700,700)
	
			//doors
		stroke('#2F3990')
		fill('#4553D0')
		rect(350,0,260,430)
		fill('#2633AE')
		noStroke()
		rect(375,20,210,180)
		rect(375,220,210,180)
		fill('#DFC077')
		ellipse(597,210,20,20)
	
				//doors
		stroke('#2F3990')
		fill('#4553D0')
		rect(350 +260,0,260,430)
		fill('#2633AE')
		noStroke()
		rect(375+260,20,210,180)
		rect(375+260,220,210,180)
		fill('#DFC077')
		ellipse(623,210,20,20)
	
	image(carpet,-100,450,1500,400);
	image(portrait,1100,50,210,250)
	image(fancychair,150,180,220,320)
	image(fancychair,850,180,220,320)
	image(clock,-10,-50,200,550)
	image(scarlet,500,100,700,900)
	
		//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)

}

function draw() {
	noStroke()
	loadPixels()

	if (count2 != 10){
	count2 += 1
	}

	if (keyIsPressed === true && count2 >= 10){
		count += 1
		count2 = 0
	}
	
	if (line0 === true && begin === true){
	
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('Ms. Scarlet?', width / 2, placement);
	}

	if (line1 === true && count == 1 && begin === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line0 = false;
		line2 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill('#FF0606')
	text(' “Oh hello?”', width / 2, placement);
	
	}

	if (line2 === true && count == 2 && begin === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line1 = false;
		line3 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('“What are you looking at?”', width / 2, placement);
	}

	if (line3 === true && count == 3 && begin === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line2 = false;
		line4 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill('#FF0606')
	text(' “Just a portrait of Mr. Body and his family. It horrible how he passed”', width / 2, placement);
	}


	if (line4 === true && count == 4 && begin === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line3 = false;
		line5 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('“Yes, but in the meantime I have some questions for you”', width / 2, placement);
	}


	if (line5 === true && count == 5 && begin === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line4 = false;
		line6 = true;
	textAlign(CENTER);
  textFont(font, 30);
		fill('#FF0606')
	text('"Yes please, do go ahead"', width / 2, placement);
	}

	if (line6 === true && count == 6 && begin === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line5 = false;
		line7 = true;
	textAlign(CENTER);
  textFont(font, 30);
		fill('#FF0606')
	text('“Ask me anything”', width / 2, placement);
	}

	if (line7 === true && count == 7 && begin === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line6 = false;
		line8 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('1.“What were you doing at the night of the murder”', width / 2, placement);
			
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('2.“Please tell me your relationship with Mr. Body”', width / 2, placement + 50 );
	}
	

	if (line8 === true && keyWentDown('1') && begin === true){
					//chat bar
	begin = false
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line8 = false;
		line1 = true;
		begin = false;
		choice1 = true;
	textAlign(CENTER);
  textFont(font, 30);
		fill('#FF0606')
	text('“I was here, as I frequently am”', width / 2, placement);
	count = 0
		
	}
if (line1 === true && count === 1 && choice1 == true){
					//chat bar
	begin = false
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line8 = false;
		line1 = false;
		line2 = true;
		choice1 = true;
	textAlign(CENTER);
  textFont(font, 30);
fill(255)
	text('“Can you tell me what you were doing here?"', width / 2, placement);	
	}

	if (line2 === true && count === 2 && choice1 == true){
					//chat bar
	begin = false
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line8 = false;
		line2 = false;
		line3 = true;
		choice1 = true;
	textAlign(CENTER);
  textFont(font, 30);
fill('#FF0606')
	text('"This place helps me feel very relaxed"', width / 2, placement);
	}

		if (line3 === true && count === 3 && choice1 == true){
					//chat bar
	begin = false
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line3 = false;
		line4 = true;
		choice1 = true;
	textAlign(CENTER);
 	 textFont(font, 30);
	fill('#FF0606')
	text('“I am able to wind down here.”', width / 2, placement);	
	}

	if (line4 === true && count == 4 && choice1 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line4 = false;
		line5 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('1.“Were you here the entirety of the night?”', width / 2, placement);
			
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('2. Were you, perhaps looking at that portrait?”', width / 2, placement + 50 );
	}

if (line5 === true && keyWentDown('1') && choice1 === true){
					//chat bar
	choice1 = false
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line1 = true;
		line5 = false
		choice4 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill('#FF0606')
	text('"Yes, though, I did go to bed rather early"', width / 2, placement);	
	count = 0
	}
if (line1 === true && count == 1 && choice4 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line1 = false;
		line2 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill(255)
	text('“Well then, if you had been in the hall,', width / 2, placement);
	text('did you see anyone perhaps, entering and leaving the lounge.”', width / 2, placement +50);}	

	if (line2 === true && count == 2 && choice4 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line2 = false;
		line3 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#FF0606')
	text('“Yes, I had seen Professor Plum in the lounge.”', width / 2, placement); }	

	if (line3 === true && count == 3 && choice4 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line3 = false;
		line4 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#FF0606')
	text('“To be quite honest with you, if I were you,', width / 2, placement);	
	text('I would pay extra attention to Plum.”', width / 2, placement+50);	}

	if (line4 === true && count == 4 && choice4 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line4 = false;
		line5 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('1. "What do you know about Plum?"', width / 2, placement);
			
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('2. "Did you interact with Plum at all last night?"', width / 2, placement + 50 );
	}



if (line5 === true && keyWentDown('2') && choice4 === true){
	choice4 = false
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line1 = true;
		line5 = false
		choice8 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#FF0606')
	text('"I merely saw him in passing."', width / 2, placement);
	text('“To be honest he looked a bit, muddled and all over the place.”', width / 2, placement+50);	
	count = 0
	}
	if (line1 === true && count == 1 && choice8 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line1 = false;
		line2 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill(255)
	text('“Did he see you.”', width / 2, placement); }

	if (line2 === true && count == 2 && choice8 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line2 = false;
		line3 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#FF0606')
	text(' “Yes, but we didnt speak to each other.”', width / 2, placement); }

	if (line3 === true && count == 3 && choice8 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line3 = false;
		choice8 = false
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#FF0606')
	text('“Anyways, I must leave now, I promised Ms. Peacock a cup of tea.”', width / 2, placement)
	text('“Thank you for looking into this case Detetective.”', width / 2, placement+50);
}



	if (line5 === true && keyWentDown('1') && choice4 === true){
	choice4 = false
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line1 = true;
		line5 = false
		choice9 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#FF0606')
	text('"Hes incredibly sporatic, Ive never been comfortable around him', width / 2, placement);	
	text('and he was obssessed with Mr. Body”', width / 2, placement+50);
	count = 0
	}
if (line1 === true && count == 1 && choice9 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line1 = false;
		line2 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill(255)
	text('“Obsessed?”', width / 2, placement); }

	if (line2 === true && count == 2 && choice9 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line2 = false;
		line3 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#FF0606')
	text(' “Yes, everyone always just let it slide, probably because Mr. Bodys a man.”', width / 2, placement); }

	if (line3 === true && count == 3 && choice9 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line3 = false;
		line4 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill(255)
	text(' “Did he do anything to Mr. Body."', width / 2, placement); }

	if (line2 === true && count == 2 && choice9 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line2 = false;
		line3 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#FF0606')
	text('“Hes always following him around, like a stalker.', width / 2, placement); 
	text('He will never leave him alone, and knows everything about him”', width / 2, placement+50);
}
	if (line3 === true && count == 3 && choice9 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line3 = false;
		line4 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#FF0606')
	text('“Not to be crude...', width / 2, placement-50); 
	text('"But he is the only one who could murder Mr. Body and get away with it. ', width / 2, placement);
	text('Because noone would expect it from him”', width / 2, placement+50);
}
	if (line4 === true && count == 4 && choice9 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line4 = false;
		line5 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill(255)
	text(' "...Are you being completely honest”', width / 2, placement); 
}
	if (line5 === true && count == 5 && choice9 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line5 = false;
		line6 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#FF0606')
	text(' “I would never lie when it comes to Mr. Body.', width / 2, placement-50); 
	text('He helped me when I was in a really tought spot.', width / 2, placement);
	text('"Did everything he could to help me.”', width / 2, placement+50);
}
	if (line6 === true && count == 6 && choice9 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line6 = false;
		line7 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#FF0606')
	text(' “Anyways, I must get going now.', width / 2, placement-50); 
	text('I have to meet Ms. Peacock for tea.', width / 2, placement);
	text('Thank you for doing everything you can to give Mr. Body the justice he deserves.”', width / 2, placement+50);
}
	if (line7 === true && count == 7 && choice9 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		choice9 = false;
		line7 = false;
	textAlign(CENTER);
 	textFont(font, 30);
	fill(255)
	text('“Thank you for your time,', width / 2, placement); 
	text('this information was very helpful', width / 2, placement+50);
}





if (line5 === true && keyWentDown('2') && choice1 === true){
					//chat bar
	choice1 = false
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line1 = true;
		line5 = false
		choice5 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill('#FF0606')
	text('"The portait?', width / 2, placement);	
	text('You mean the one over there?”', width / 2, placement+50);
	count = 0
	}

	if (line1 === true && count == 1 && choice5 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line1 = false;
		line2 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#FF0606')
	text('“Well...I suppose it is a beautiful photo.”', width / 2, placement); }	

	if (line2 === true && count == 2 && choice5 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line2 = false;
		line3 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill(255)
	text('“It is of Mr. Body and his parents corrent.”', width / 2, placement);}

	if (line3 === true && count == 3 && choice5 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line3 = false;
		line4 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#FF0606')
	text('"Yes I suppose.', width / 2, placement);	
	text('They seem...happy"', width / 2, placement +50);	
}

	if (line4 === true && count == 4 && choice5 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line4 = false;
		line5 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('1. Did you by chance know the family?”', width / 2, placement);
			
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('2. Is there a particular reason you stare at the photo?”', width / 2, placement + 50 );
	}

	if (line5 === true && keyWentDown('1') && choice5 === true){
					//chat bar
	choice5 = false
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line1 = true;
		line4 = false
		choice6 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#FF0606')
	text('...', width / 2, placement);	
	count = 0
	}
	if (line1 === true && count == 1 && choice6 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line1 = false;
		line2 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#FF0606')
	text('“Not very well...”', width / 2, placement);}

		if (line2 === true && count == 2 && choice6 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line2 = false;
		line3 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#FF0606')
	text('“I knew them briefly before they passed”', width / 2, placement);}

		if (line3 === true && count == 3 && choice6 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line3 = false;
		line4 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#FF0606')
	text('"But to be honest, it was so long ago, I hardly remember."', width / 2, placement);}

		if (line4 === true && count == 4 && choice6 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line4 = false;
		line5 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill(255)
	text('“So you knew Mr. Body long before you became friends."', width / 2, placement);}


		if (line5 === true && count == 5 && choice6 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line5 = false;
		line6 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#FF0606')
	text('“Ah... I apologize, I actually must go now, I promised Ms. Peacock I would meet her for tea."', width / 2, placement);}

		if (line6 === true && count == 6 && choice6 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line6 = false;
		choice6 = false;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#FF0606')
	text(' “Thank you for trying to bring justice to my dear friend.”', width / 2, placement);}





	if (line5 === true && keyWentDown('2') && choice5 === true){
					//chat bar
	choice5 = false
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line1 = true;
		line4 = false
		choice7 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#FF0606')
	text('"Well, Id hardly call it staring', width / 2, placement);	
	count = 0
	}
	if (line1 === true && count == 1 && choice7 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line1 = false;
		line2 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#FF0606')
	text('“Rather I am appreciating them."', width / 2, placement-50);	
	text('The family compliments each other so well.”', width / 2, placement);
	text('And nothing... could ever change that.”', width / 2, placement +50);		
}
		if (line2 === true && count == 2 && choice7 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line2 = false;
		line3 = true
		choice7 = false;
	textAlign(CENTER);
 	textFont(font, 30);
	fill(255)
	text(' “They are beautiful.”', width / 2, placement);
	text(' “Looking at it, the father somewhat looks like you.”', width / 2, placement+50);
}
		if (line3 === true && count == 3 && choice7 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line3 = false;
		choice7 = false;
	textAlign(CENTER);
 	textFont(font, 30);
	fill(255)
	text('“Haha, as if I could ever compare to his elegance.”', width / 2, placement);
	text('“Anyways, I must leave now, I promised Ms. Peacock a cup of tea.”', width / 2, placement+50);
}

















//realtionship w/ Mr. Body
	if (line8 === true && keyWentDown('2') && begin === true){
					//chat bar
	begin = false
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line8 = false;
		line1 = true;
		begin = false;
		choice2 = true;
	textAlign(CENTER);
  textFont(font, 30);
		fill('#FF0606')
	text('"He helped me out during a pretty difficult time.', width / 2, placement);
	count = 0	
	}

	if (line1 === true && count == 1 && choice2 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line1 = false;
		line2 = true;
		choice2 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill(255)
	text('“Could you eleborate?”', width / 2, placement);	
	}
		if (line2 === true && count == 2 && choice2 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line2 = false;
		line3 = true;
		choice2 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#FF0606')
	text('“I was struggling with money, and I only had so many places I could go.”', width / 2, placement);	
	}
		if (line3 === true && count == 3 && choice2 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line3 = false;
		line4 = true;
		choice2 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill(255)
	text('“Only so many places you could go...', width / 2, placement);
	text('Did you know Mr. Body before he helped you.”', width / 2, placement+50);	
	}
		if (line4 === true && count == 4 && choice2 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line4 = false;
		line5 = true;
		choice2 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#FF0606')
	text(' “Yes, I knew him briefly when we were young.”', width / 2, placement);	
	}

		if (line5 === true && count == 4 && choice2 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line5 = false;
		line6 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('1.“Were the two of you close?”', width / 2, placement);
			
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('2.“How did you meet him when you were young?”', width / 2, placement + 50 );
	}

		if (line6 === true && keyWentDown('1') && choice2 === true){
	choice2 = false
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line6 = false;
		line1 = true;
		choice3 = true;
	textAlign(CENTER);
	textFont(font, 30);
	fill('#FF0606')
	text('“Not, close that we knew everything about each other.”', width / 2, placement);
	text('Rather, he tried to help me when he could.”', width / 2, placement+50);		
	count = 0
	}

		if (line1 === true && count == 1 && choice3 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line1 = false;
		line2 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill(255)
	text(' “How did he help you?”', width / 2, placement);	
	}
		if (line2 === true && count == 2 && choice3 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line2 = false;
		line3 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#FF0606')
	text('“Gave me money, a place to stay, introduced me to his friends.”', width / 2, placement);	
	}

		if (line3 === true && count == 3 && choice3 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line3 = false;
		line4 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill(255)
	text('“Why was he willing to do so much?"', width / 2, placement);	
	}
		if (line4 === true && count == 4 && choice3 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line4 = false;
		choice3 = false
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#FF0606')
	text('“Well...he was a very kind man.', width / 2, placement);	
	text('Now, I apologize, but I promised Ms. Peacok Id meet her for tea.”', width / 2, placement+50);	
	}
	
		if (line6 === true && keyWentDown('2') && choice2 === true){
	choice2 = false
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line6 = false;
	textAlign(CENTER);
	textFont(font, 30);
	fill('#FF0606')
	text('“Through...a family friend', width / 2, placement);	
	text('Anyways, I must go now, I promised Ms. Peacok Id meet her for tea.”', width / 2, placement+50);	
	}
}

function mousePressed(){
	if (mouseX > 350 && mouseY > 0 && mouseX < 610 && mouseY < 430){
		window.location.replace("home_screen.html");
	}}