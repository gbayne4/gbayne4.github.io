let font, placement = 700;
let line0 = true , line1 = true,line2 = false,line3 = false,line4= false,line5= false,line6= false,line7= false, line8= false, line9 = false,line10 = false;
let line11= false, line12= false, line13= false, line14 = false, line15 = false, line16= false, line17= false, line18 = false, line19 = false, line20= false;
let count = 0, count2 = 0;
let begin = true, choice1 = false, choice2 = false, choice3 = false, choice4 = false, choice5 = false, choice6 = false, choice7 = false, choice8 = false, choice9 = false;


function preload(){
	font = loadFont('text/text.ttf');
	shelf = loadImage('library/shelf.jpg')
	rug = loadImage('library/rug.png');
	plum = loadImage('characters/plum.png')
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background('#E1BD9F');
	fill('#C08C5E')
	rect(0,500,windowWidth,windowHeight);
			//doors
		stroke('#794721')
		fill('#8D6546')
		rect(100,155,200,345)
		fill('#794721')
		noStroke()
		rect(125,175,150,140)
		rect(125,335,150,140)
		fill('#DFC077')
		ellipse(285,325,20,20)
	
	image(rug,100,500,1700,450);
	image(shelf,300,10,900,500);
	image(shelf,740,10,900,500);
	image(plum,500,100,700,900)

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
fill('#CF92E5')
	text('*muffled* "Hes not dead, he cant be dead, I swear he is not dead"', width / 2, placement);
	}

	if (line1 === true && count == 1 && begin === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line0 = false;
		line2 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text(' “sir?”', width / 2, placement);
	
	}

	if (line2 === true && count == 2 && begin === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line1 = false;
		line3 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill('#CF92E5')
	text('“Dead, dead, dead”', width / 2, placement);
	}

	if (line3 === true && count == 3 && begin === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line2 = false;
		line4 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text(' “Sir?”', width / 2, placement);
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
	text('"Sir, I have some questions for you”', width / 2, placement);
	}


	if (line5 === true && count == 5 && begin === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line4 = false;
		line6 = true;
	textAlign(CENTER);
  textFont(font, 30);
		fill('#CF92E5')
	text('"I swear he isnt dead!!"', width / 2, placement);
	}

	if (line6 === true && count == 6 && begin === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line5 = false;
		line7 = true;
	textAlign(CENTER);
  textFont(font, 30);
		fill('#CF92E5')
	text('“I swear I swear”', width / 2, placement);
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
	text('1.Ask him about Mr. Body', width / 2, placement);
			
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('2.Try to sooth him', width / 2, placement + 50 );
	}
	
	if (line8 === true && keyWentDown('1') && begin === true){
					//chat bar
	begin = true
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line8 = false;
		line1 = true;
		begin = false;
		choice1 = true;
	textAlign(CENTER);
  textFont(font, 30);
		fill(255)
	text('“Sir, you were close with Mr. Body correct?"', width / 2, placement);
	count = 0 }




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
	fill('#CF92E5')
	text('*inchorent muffling*', width / 2, placement);	
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
	fill(255)
	text('"Sir if Mr. Bodys going to get any justice, ', width / 2, placement);
	text('you need to communicate with me."', width / 2, placement+50);
	}

	if (line3 === true && count === 3 && choice1 == true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line3 = false;
		line4 = true;
		choice1 = true;
	textAlign(CENTER);
 	 textFont(font, 30);
	fill('#CF92E5')
	text('...', width / 2, placement);	
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
	text('1. Pressure him', width / 2, placement);
			
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('2. Wait', width / 2, placement + 50 );
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
	fill(255)
	text('"Professor Plum, if you dont speak Mr. Body will have died in vain?"', width / 2, placement);	
	count = 0 }


if (line1 === true && count == 1 && choice4 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line1 = false;
		line2 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#CF92E5')
	text('...', width / 2, placement); }

	if (line2 === true && count == 2 && choice4 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line2 = false;
		line3 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#CF92E5')
	text('“What the hell do you know about Mr. Body?', width / 2, placement);
	text('What right do you have to say he "died in vain”', width / 2, placement+50);
	 }	

	if (line3 === true && count == 3 && choice4 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line3 = false;
		line4 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#CF92E5')
	text('“I hate you an everyone else here acting like this is all some GAME!!', width / 2, placement);	
	text('Please just leave, I cant take it anymore”', width / 2, placement+50);}

	if (line4 === true && count == 4 && choice4 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line4 = false;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#CF92E5')
	text('*inchorent muffling*', width / 2, placement);	}
//end









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
	fill('#CF92E5')
	text('"..."', width / 2, placement);	
	count = 0 }

if (line1 === true && count == 1 && choice5 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line1 = false;
		line2 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill(255)
	text('"...”', width / 2, placement); }	

	if (line2 === true && count == 2 && choice5 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line2 = false;
		line3 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#CF92E5')
	text('...', width / 2, placement);}

	if (line3 === true && count == 3 && choice5 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line3 = false;
		line4 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#CF92E5')
	text('"I loved him.', width / 2, placement);	
	text('I truly truly loved him"', width / 2, placement +50);	
}



	if (line4 === true && count == 4 && choice5 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line4 = false;
		line5 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#CF92E5')
	text('"and I feel as if...', width / 2, placement);	
	text('Im going insane without him."', width / 2, placement +50);	
}

	if (line5 === true && count == 5 && choice5 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line5 = false;
		line6 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('1.“Were you with Mr. Body last night?”', width / 2, placement);
			
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('2.“How did you meet Mr. Body”', width / 2, placement + 50 );
	}




	if (line6 === true && keyWentDown('1') && choice5 === true){
					//chat bar
	choice6 = false
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line1 = true;
		line4 = false
		choice6 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#CF92E5')
	text('Yes...', width / 2, placement);	
	count = 0
	}
	if (line1 === true && count == 1 && choice6 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line1 = false;
		line2 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#CF92E5')
	text('“Which is why I just dont understand”', width / 2, placement);}

		if (line2 === true && count == 2 && choice6 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line2 = false;
		line3 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#CF92E5')
	text('“I was with him most of the night but now hes....', width / 2, placement);}

		if (line3 === true && count == 3 && choice6 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line3 = false;
		line4 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#CF92E5')
	text('"hes...."', width / 2, placement);}

		if (line4 === true && count == 4 && choice6 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line4 = false;
		line5 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#CF92E5')
	text('“dead."', width / 2, placement);}


		if (line5 === true && count == 5 && choice6 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line5 = false;
		line6 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill(255)
	text('“Im truly sorry for your loss."', width / 2, placement);}

		if (line6 === true && count == 6 && choice6 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line6 = false;
		line7 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill(255)
	text(' “Other than Mr. Body, did you see anyone else last night?”', width / 2, placement);}

		if (line7 === true && count == 7 && choice6 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line7 = false;
		line8 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#CF92E5')
	text('“Yes...I saw Mr. Green and Ms. Scarlet"', width / 2, placement);}

		if (line8 === true && count == 8 && choice6 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line8 = false;
		line9 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill(255)
	text('“Did you speak to them at all”', width / 2, placement);}

		if (line9 === true && count == 9 && choice6 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line9 = false;
		line10 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#CF92E5')
	text('“I spoke to Mr. Green. Ms. Scarlet I only saw briefly in passing."', width / 2, placement);}

		if (line10 === true && count == 10 && choice6 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line10 = false;
		line11 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill(255)
	text('“Did Ms. Scarlet go into the lounge?”', width / 2, placement);}

		if (line11 === true && count == 11 && choice6 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line10 = false;
		line11 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#CF92E5')
	text('“...Please dont speculate such things. ”', width / 2, placement);}

		if (line12 === true && count == 12 && choice6 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line12 = false;
		line13 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#CF92E5')
	text('“i hate this I Hate This I HATE THIS”', width / 2, placement);}


		if (line13 === true && count == 13 && choice6 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line12 = false;
		line13 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#CF92E5')
	text('“Ms. Scarlet is the closest thing to Mr. Body, she would never.”', width / 2, placement);}

			if (line13 === true && count >= 13 && choice6 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)

	textAlign(CENTER);
 	textFont(font, 30);
	fill('#CF92E5')
	text('"she wouldnt”', width / 2, placement);}



	if (line6 === true && keyWentDown('2') && choice5 === true){
					//chat bar
	choice5 = false
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line1 = true;
		line4 = false
		choice7 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#CF92E5')
	text('"..."', width / 2, placement);	
	text('“I met him in a library just like this one."', width / 2, placement+50);	
	count = 0
	}
	if (line1 === true && count == 1 && choice7 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line1 = false;
		line2 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#CF92E5')
	text('“He was the first person I even truly talked to.', width / 2, placement-50);	
	text('The only one who truly listen...', width / 2, placement);
	text('He listened to all my rambling..”', width / 2, placement +50);		
}
		if (line2 === true && count == 2 && choice7 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line2 = false;
		line3 = true
		choice7 = false;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#CF92E5')
	text('"Im sorry, I know your just trying to solve this case but...', width / 2, placement-50);
	text('I really cannot handle this conversation right now...', width / 2, placement);
	text('Could you please come back later?”', width / 2, placement+50);
}
		if (line3 === true && count == 3 && choice7 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line3 = false;
		choice7 = false;
	textAlign(CENTER);
 	textFont(font, 30);
	fill(255)
	text('“Yes, Ill come back later.”', width / 2, placement);
	text('Once again, Im truly sorry for your loss.”', width / 2, placement+50);
}




	if (line8 === true && keyWentDown('2') && begin === true){
					//chat bar
	begin = true
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line8 = false;
		line1 = true;
		begin = false;
		choice2 = true;
	textAlign(CENTER);
  textFont(font, 30);
		fill(255)
	text('Hey, hey its alright', width / 2, placement);
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
	text('*pats back*', width / 2, placement);	
	}
		if (line2 === true && count == 2 && choice2 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line2 = false;
		line3 = true;
		choice2 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#CF92E5')
	text('“Im sorry *muffle* you have to *muffle* see me like this”', width / 2, placement);	
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
	text('“Actually its kind of nice to see someone actually upset', width / 2, placement);
	text('..sorry I shouldnt have said that but your friends seem well...apathetic”', width / 2, placement+50);	
	}
		if (line4 === true && count == 4 && choice2 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line4 = false;
		line5 = true;
		choice2 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#CF92E5')
	text(' “Yes, they are all sort of like that”', width / 2, placement);	
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
	text('1.“Do you think any one in particular could be the killer?”', width / 2, placement);
			
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('2.“Can they really even be consdiered friends?”', width / 2, placement + 50 );
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
	fill('#CF92E5')
	text('...', width / 2, placement);	
	count = 0
	}

	if (line1 === true && count == 1 && choice3 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line1 = false;
		line2 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#CF92E5')
	text('"I hate this"', width / 2, placement);	
	}
		if (line2 === true && count == 2 && choice3 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line2 = false;
		line3 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#CF92E5')
	text('“Not only did I lose the most important person in the world.”', width / 2, placement);
	text('*muffles* "I also have to speculate which of my friends may be killers.”', width / 2, placement+50);	
	}

		if (line3 === true && count == 3 && choice3 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line3 = false;
		line4 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill(255)
	text('“...I know its difficult"', width / 2, placement-50);
	text('“but we have to do it.', width / 2, placement);
	text('“for Mr. Body"', width / 2, placement+50);	
	}
		if (line4 === true && count == 4 && choice3 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line4 = false;
		line4 = true;
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#CF92E5')
	text('“Ms. Peacock could have...she may have even killed her husband', width / 2, placement-50);	
	text('Shes always denied it. But it... 73.23% likely its her', width / 2, placement);
	text('and, before I met him, I heard...he had an affair with him"', width / 2, placement+50);
}

		if (line5 === true && count == 5 && choice3 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line5 = false;
		line6 = true
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#CF92E5')
	text('“But to be honest...Ms. Peacock is not the type to hold out this long.', width / 2, placement);	
	text('If she was going to kill Mr. Body, she wouldve buried him with her husband”', width / 2, placement +50); }

		if (line6 === true && count == 6 && choice3 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line6 = false;
		line7 = true
	textAlign(CENTER);
 	textFont(font, 30);
	fill(255)
	text('.....', width / 2, placement);	
	text('"Thats a bit brutal"', width / 2, placement +50); }

		if (line7 === true && count == 7 && choice3 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line7 = false;
		line8 = true
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#CF92E5')
	text('“Mr. Body did recently have an arguement with Mr. Green.', width / 2, placement-50);	
	text('Mr. Green was stealing from the poor and Mr. Body called him out for it.', width / 2, placement);
	text('but Mr. Green wouldnt of killed him right now."', width / 2, placement+50); }

		if (line8 === true && count == 8 && choice3 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line8 = false;
		line9 = true
	textAlign(CENTER);
 	textFont(font, 30);
	fill(255)
	text('“why?"', width / 2, placement);} 

		if (line9 === true && count == 9 && choice3 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line9 = false;
		line10 = true
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#CF92E5')
	text('"Its a total inconvience for him."', width / 2, placement-50);	
	text('Sure. Mr. Green can now do exaxctly what he wanted.', width / 2, placement);
	text('but he has to do it all alone, and Mr. Green is a very lazy man.', width / 2, placement+50); }


		if (line10 === true && count == 10 && choice3 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line10 = false;
		line11 = true
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#CF92E5')
	text('"If he wanted to kill him,', width / 2, placement-50);	
	text('he would have waited until after the work was done.', width / 2, placement);
	text('Now he has to do it all himself."', width / 2, placement+50); }


			if (line11 === true && count == 11 && choice3 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line11 = false;
		line12 = true
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#CF92E5')
	text('"Ms.Scarlet wouldnt do this', width / 2, placement-50);	
	text('Mr.Body and her had a bond that I could never have', width / 2, placement);
	text('the bond one has with their si- good friend"', width / 2, placement+50); }

			if (line12 === true && count == 12 && choice3 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line12 = false;
		line13 = true
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#CF92E5')
	text('"They started off a bit rocky...', width / 2, placement-50);	
	text('But that was niether sides fault.', width / 2, placement);
	text('Im sure she wouldnt hold a grudge."', width / 2, placement+50); }


		if (line13 === true && count == 13 && choice3 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line13 = false;
		line14 = true
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#CF92E5')
	text('"and Colonel Mustard...', width / 2, placement-50);	
	text('honestly, I dont understand the brain of that man', width / 2, placement);
	text('to adequately speak on his behalf"', width / 2, placement+50); }


		if (line14 === true && count == 14 && choice3 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line14 = false;
		line15 = true
	textAlign(CENTER);
 	textFont(font, 30);
	fill('#CF92E5')
	text('"Alright, Ive given you all the information I can handle right now.' , width / 2, placement-50);	
	text('Please use this to find who killed my beloved', width / 2, placement);
	text('and leave me in peace."', width / 2, placement+50); }


		if (line14 === true && count == 14 && choice3 === true){
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line14 = false;
	textAlign(CENTER);
 	textFont(font, 30);
	fill(255)	
	text('Yes...Thank you for all this information', width / 2, placement); }



		if (line6 === true && keyWentDown('2') && choice2 === true){
	choice2 = false
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line6 = false;
	textAlign(CENTER);
	textFont(font, 30);
	fill('#CF92E5')
	text('“...Please dont kill Mr. Body and my friendships in one night.', width / 2, placement);	
	text('I cant handle this conversation right now, please come back later.”', width / 2, placement+50);	
	}
	
}


function mousePressed(){
	if (mouseX > 100 && mouseY > 155 && mouseX < 300 && mouseY < 445){
		window.location.replace("home_screen.html");
	}}