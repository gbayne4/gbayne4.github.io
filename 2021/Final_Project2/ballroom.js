let font, placement = 700;
let line0 = true , line1 = true,line2 = false,line3 = false,line4= false,line5= false,line6= false,line7= false, line8= false, line9 = false,line10 = false;
let line11= false, line12= false, line13= false, line14 = false, line15 = false, line16= false, line17= false, line18 = false, line19 = false, line20= false;
let count = 0, count2 = 0;
let begin = true, choice1 = false, choice2 = false, choice3 = false, choice4 = false, choice5 = false, choice6 = false, choice7 = false, choice8 = false, choice9 = false;


function preload(){
	font = loadFont('text/text.ttf');
	woodfloor = loadImage('images/woodfloor.png');
	piano = loadImage('ballroom/piano.png');
	rug = loadImage('ballroom/rug.png');
	green = loadImage('characters/green.png')
}

function setup() {

	font = loadFont('text/text.ttf');

	createCanvas(windowWidth, windowHeight);
	background('#FFF8F0');
	image(woodfloor,-200,460, windowWidth+700,700)
	
				//doors
		stroke('#325B2C')
		fill('#4B7F43')
		rect(100,115,200,345)
		fill('#325B2C')
		noStroke()
		rect(125,135,150,140)
		rect(125,295,150,140)
		fill('#DFC077')
		ellipse(285,285,20,20)
	
	
			//window
	fill('#0B6440')
	stroke(255)
	strokeWeight(10)
	rect(255 +170,50,600,300)
	line(355 +170,50,355 +170,350)
	line(455 +170,50,455 +170,350)
	line(555 +170,50,555 +170,350)
	line(655 +170,50,655 +170,350)
	line(755 +170,50,755 +170,350)
	line(255 +170,150,855 +170,150)
	line(255 +170,250,855 +170,250)
	
	image(rug,-100,450,1500,400);
	image(piano,550,100,800,700);
	image(green,100,100,700,900);

	noStroke()	
		//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
}

function draw() {
	loadPixels();
	noStroke()

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
	fill('#7AA585')
	text('"Hi Detective"', width / 2, placement);
	}

	if (line1 === true && count == 1 && begin === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line0 = false;
		line2 = true;
	textAlign(CENTER);
  textFont(font, 30);
fill('#7AA585')
	text(' “Thank you for stopping by”', width / 2, placement);
	
	}

	if (line2 === true && count == 2 && begin === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line1 = false;
		line3 = true;
	textAlign(CENTER);
  textFont(font, 30);
fill('#7AA585')
	text('“I was just mid prayer.”', width / 2, placement);
	}

	if (line3 === true && count == 3 && begin === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line2 = false;
		line4 = true;
	textAlign(CENTER);
  textFont(font, 30);
fill('#7AA585')
	text(' “Do you need to talk right now?”', width / 2, placement);
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
	text('“Yes, I have some questions for you”', width / 2, placement);
	}


	if (line5 === true && count == 5 && begin === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line4 = false;
		line6 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill('#7AA585')
	text('"As dectives do"', width / 2, placement);
	}

	if (line6 === true && count == 6 && begin === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line5 = false;
		line7 = true;
	textAlign(CENTER);
  textFont(font, 30);
fill('#7AA585')
	text('“What would you like to ask me.”', width / 2, placement);
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
fill('#7AA585')
	text('“I was praying”', width / 2, placement);
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
fill('#7AA585')
	text('“I was in the library reading my Bible”', width / 2, placement);	
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
fill('255')
	text('“Did you see anyone enter or leave the study.”', width / 2, placement);
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
fill('#7AA585')
	text('“No, I had not. I was too immersed in my bible studies.”', width / 2, placement);	
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
	text('1.“So you did nothing else the rest of the night”', width / 2, placement);
			
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('2.“You didn’t hear anything unusual”', width / 2, placement + 50 );
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
	fill('#7AA585')
	text('" No, nothing unusual ... Well, I did hear frequent entering and exiting rooms.', width / 2, placement);	
	text('It probably came from the study."', width / 2, placement+50);	
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
	text(' “Did you hear who it was?”', width / 2, placement); }	

	if (line2 === true && count == 2 && choice4 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line2 = false;
		line3 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#7AA585')
	text('“Since it was Mr. Bodys study one could assume it was at least him, however...”', width / 2, placement); }	

	if (line3 === true && count == 3 && choice4 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line3 = false;
		line4 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#7AA585')
	text('“The last voice I remember hearing was a woman’s voice,', width / 2, placement);	
	text('but I did not pay attention to what was being said.”', width / 2, placement+50);	}

	if (line4 === true && count == 4 && choice4 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line4 = false;
		line5 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('1. Kiss up for more information', width / 2, placement);
			
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('2. Ask why you should believe him', width / 2, placement + 50 );
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
	fill(255)
	text('"Mr. Green, you’re such a good god-loving fellow,', width / 2, placement);	
	text('don’t you have more information”', width / 2, placement+50);
	count = 0
	}

	if (line1 === true && count == 1 && choice9 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line1 = false;
		line2 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#7AA585')
	text('“Ah...I would like to mention one thing.”', width / 2, placement); }

	if (line2 === true && count == 2 && choice9 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line2 = false;
		line3 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#7AA585')
	text(' “That woman, Ms. Scarlet, I don’t trust her.”', width / 2, placement); }

	if (line3 === true && count == 3 && choice9 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line3 = false;
		line4 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill(255)
	text(' “...Could you elaborate"', width / 2, placement); }

	if (line2 === true && count == 2 && choice9 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line2 = false;
		line3 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#7AA585')
	text(' “Only Mr. Body knew her when she entered our group.”', width / 2, placement-50); 
	text(' “She is a “rising star” but she’s never gotten anywhere.”', width / 2, placement);
	text(' “I’m not sure why Mr. Body lets her hang out with us upper-class folk.”', width / 2, placement+50);
}
	if (line3 === true && count == 3 && choice9 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line3 = false;
		line4 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#7AA585')
	text(' “But her status isnt why I dont trust her”', width / 2, placement-50); 
	text(' ... Im a living in the name of God.', width / 2, placement);
	text(' “Loving all, or whatever...”', width / 2, placement+50);
}
	if (line4 === true && count == 4 && choice9 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line4 = false;
		line5 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#7AA585')
	text(' "Its her eyes...”', width / 2, placement); 
}
	if (line5 === true && count == 5 && choice9 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line5 = false;
		line6 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#7AA585')
	text(' “Shes always observing Mr.Body...', width / 2, placement-50); 
	text(' I thought she was attracted to him at first', width / 2, placement);
	text(' but...”', width / 2, placement+50);
}
	if (line6 === true && count == 6 && choice9 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line6 = false;
		line7 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#7AA585')
	text(' “It looked more like anger and jealousy', width / 2, placement-50); 
	text('I once asked Mr. Body if she was blackmailing him but,', width / 2, placement);
	text('he would only say he owed her this much.”', width / 2, placement+50);
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
	text('this information was very useful”', width / 2, placement+50);
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
	fill(255)
	text('"And why should I believe what you’ve told me?"', width / 2, placement);	
	count = 0
	}
	if (line1 === true && count == 1 && choice8 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line1 = false;
		line2 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#7AA585')
	text('“I have no reason to lie as I am innocent.”', width / 2, placement); }

	if (line2 === true && count == 2 && choice8 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line2 = false;
		line3 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#7AA585')
	text(' “...I swear to God.”', width / 2, placement); }

	if (line3 === true && count == 3 && choice8 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line3 = false;
		choice8 = false
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#7AA585')
	text('“Alright, thank you for your time.”', width / 2, placement); }



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
	fill('#7AA585')
	text('"Well… I was later joined by Professor Plum.', width / 2, placement);	
	text('He came in all giddy talking some nonsense.”', width / 2, placement+50);
	count = 0
	}

	if (line1 === true && count == 1 && choice5 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line1 = false;
		line2 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill(255)
	text('“Nonsense?”', width / 2, placement); }	

	if (line2 === true && count == 2 && choice5 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line2 = false;
		line3 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill(255)
	text('“What sort of nonsense?”', width / 2, placement);}

	if (line3 === true && count == 3 && choice5 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line3 = false;
		line4 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#7AA585')
	text('"Him and Professor Plum have an assumed relationship', width / 2, placement);	
	text('thats outside of my field of beliefs."', width / 2, placement +50);	
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
	text('1.“Care to elaborate?”', width / 2, placement);
			
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('2.“Do you think Plum could be the murderer?”', width / 2, placement + 50 );
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
	fill('#7AA585')
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
	fill('#7AA585')
	text('“We all knew they were romantically involved.”', width / 2, placement);}

		if (line2 === true && count == 2 && choice6 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line2 = false;
		line3 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#7AA585')
	text('“It would take an idiot not to know-”', width / 2, placement);}

		if (line3 === true && count == 3 && choice6 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line3 = false;
		line4 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#7AA585')
	text('...', width / 2, placement);}

		if (line4 === true && count == 4 && choice6 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line4 = false;
		line5 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#7AA585')
	text('“Actually...', width / 2, placement);}


		if (line5 === true && count == 5 && choice6 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line5 = false;
		line6 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#7AA585')
	text('“Colonel Mustard may not know.”', width / 2, placement);}

		if (line6 === true && count == 6 && choice6 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line6 = false;
		choice6 = false;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#7AA585')
	text(' “Yeah so it would take an idiot not to know.”', width / 2, placement);}








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
	fill('#7AA585')
	text('...', width / 2, placement);	
	text('“Personally, I’d be shocked.”', width / 2, placement+50);		
	count = 0
	}
		if (line1 === true && count == 1 && choice7 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line1 = false;
		line2 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#7AA585')
	text('“While as a devout Christian, it is difficult to understand their relationship,', width / 2, placement);	
	text(' they did seem to care deeply for one another.”', width / 2, placement +50);	
}
		if (line2 === true && count == 2 && choice7 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line2 = false;
		choice7 = false;
	textAlign(CENTER);
 	textFont(font, 30);
	fill(255)
	text(' “Alright thank you for your time.”', width / 2, placement);
}










	if (line8 === true && keyWentDown('2') && begin === true){
					//chat bar
	begin = false
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line1 = true;
		line8 = false
		choice2 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#7AA585')
	text('"We are business partners"', width / 2, placement);	
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
	text('“What sort of business?”', width / 2, placement);	
	}
		if (line2 === true && count == 2 && choice2 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line2 = false;
		line3 = true;
		choice2 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#7AA585')
	text('“Investments…why is this important.”', width / 2, placement);	
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
	text('“Anything related to Mr. Body is important.', width / 2, placement);
	text('Did you two have a good relationship outside of business?”', width / 2, placement+50);	
	}
		if (line4 === true && count == 4 && choice2 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line4 = false;
		line5 = true;
		choice2 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#7AA585')
	text(' “Yes, we were friends.”', width / 2, placement);	
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
	text('1.“Have you gotten in any arguments with him recently.”', width / 2, placement);
			
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('2.“Tell me more about your investments.”', width / 2, placement + 50 );
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
	fill('#7AA585')
	text('“Ah, we briefly had a fight, but that was a while back.”', width / 2, placement);	
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
	text(' “A fight over what?”', width / 2, placement);	
	}
		if (line2 === true && count == 2 && choice3 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line2 = false;
		line3 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#7AA585')
	text('“Just a business disagreement, nothing too nasty, and it all worked out in the end.”', width / 2, placement);	
	}

		if (line3 === true && count == 3 && choice3 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line3 = false;
		line4 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill(255)
	text('“Can you tell me any more."', width / 2, placement);	
	}
		if (line4 === true && count == 4 && choice3 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line4 = false;
		choice3 = false
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#7AA585')
	text('“Not without a lawyer. Please stop playing God, and leave me alone.', width / 2, placement);	
	text('I need to go pray.”', width / 2, placement+50);	
	}
	
		if (line6 === true && keyWentDown('2') && choice2 === true){
	choice2 = false
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line6 = false;
	textAlign(CENTER);
	textFont(font, 30);
	fill('#7AA585')
	text('“Don’t pry into my business!!!', width / 2, placement);	
	text('I don’t even have a lawyer around. I won’t tell you anything.”', width / 2, placement+50);	
	}
	
}

function mousePressed(){
	if (mouseX > 100 && mouseY > 155 && mouseX < 300 && mouseY < 445){
		window.location.replace("home_screen.html");
	}}