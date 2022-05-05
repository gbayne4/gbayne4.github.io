let font, placement = 700;
let line0 = true , line1 = true,line2 = false,line3 = false,line4= false,line5= false,line6= false,line7= false, line8= false, line9 = false,line10 = false;
let line11= false, line12= false, line13= false, line14 = false, line15 = false, line16= false, line17= false, line18 = false, line19 = false, line20= false;
let count = 0;
let begin = true, choice1 = false, choice2 = false, choice3 = false, choice4 = false, choice5 = false, choice6 = false, choice7 = false, choice8 = false;


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

		//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
}

function draw() {
	loadPixels();
	noStroke()

		if (keyIsPressed === true){
		count += 1
	}
	
	if (line0 === true && begin === true){
	
	textAlign(CENTER);
  textFont(font, 30);
	fill('#7AA585')
	text('Hi Detective', width / 2, placement);
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
	text('As dectives do ', width / 2, placement);
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
	choice1 = true
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

	if (line8 === true && keyWentDown('2') && begin === true){
					//chat bar
	choice1 = true
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line8 = false;
		line1 = true;
		begin = false;
		choice2 = true;
	textAlign(CENTER);
  textFont(font, 30);
fill('#7AA585')
	text('We are business partners', width / 2, placement);
	count = 0	
	}
	/*

	if (line1 === true && count == 1 && choice1 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line8 = false;
		line2 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('“I had been fixing the young master (Mr. Body) some drinks.', width / 2, placement);
	text('He likes to have whisky before he rests for the night.”', width / 2, placement+50);
	
	}


	if (line2 === true && count == 2 && choice1 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line1 = false;
		line3 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('1.“How long have you been business partners', width / 2, placement);
			
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('2.“Please tell me what happened next”', width / 2, placement + 50 );
	}

	if (line3 === true && keyWentDown('1') && choice1 === true){
					//chat bar
	choice1 = true
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line2 = false;
		line1 = true;
		choice1 = false;
		choice3 = true;
	textAlign(CENTER);
  textFont(font, 30);
		fill(150)
	text('“...excuse me?”', width / 2, placement);
	count = 0
		
	}

	if (line1 === true && count == 1 && choice3 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line3 = false;
		line2 = true;
	textAlign(CENTER);
  textFont(font, 30);
		fill(150)
	text('“young master was nothing of the sort, trust me I know an alcoholic when I see one.', width / 2, placement);
	text('In fact the young masters fath-...', width / 2, placement+50);
	
	}

	if (line2 === true && count == 2 && choice3 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line1 = false;
		line3 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('“The old lord was an alcoholic?"', width / 2, placement);
	}

	if (line3 === true && count == 3 && choice3 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line2 = false;
		line4 = true;
	textAlign(CENTER);
  textFont(font, 30);
		fill(150)
	text('*sigh* Yes, he was.', width / 2, placement);
	text('"He got drunk everyday, was always bringing home other women despite his wife being home.The poor woman"', width / 2, placement+50);
	}

	if (line4 === true && count == 4 && choice3 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line3 = false;
		choice3 = false
	textAlign(CENTER);
  textFont(font, 30);
	fill(150)
	text('“So don’t go calling the young master an alcoholic.', width / 2, placement);
	text(' I’ve had enough of this conversation. Please leave me be.”', width / 2, placement+50);
	}



	if (line8 === true && keyWentDown('2') && choice1 === true){
					//chat bar
	choice1 = true
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line7 = false;
		line1 = true;
		choice1 = false;
		choice4 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill(150)
	text('“I then went to the lounge but he wasn’t there.”', width / 2, placement);
	count = 0	
	}
	if (line1 === true && count == 1 && choice4 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line8 = false;
		line2 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('“Is he usually in the lounge at that time?”', width / 2, placement);
	
	}

	if (line2 === true && count == 2 && choice4 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line8 = false;
		line3 = true;
	textAlign(CENTER);
  	textFont(font, 30);
	fill(150)
	text('“Yes…he always stays up late in the night in the lounge.”', width / 2, placement);
	}

	if (line3 === true && count == 3 && choice4 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line3 = false;
		line4 = true;
	textAlign(CENTER);
  	textFont(font, 30);
	fill(255)
	text('"What does he do in there?"', width / 2, placement);
	}

	if (line4 === true && count == 4 && choice4 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line3 = false;
		line5 = true;

	textAlign(CENTER);
  	textFont(font, 30);
	fill(255)
	text('"Business I have no business knowing.', width / 2, placement);
	text('"He and Professor Plum were working really hard on who knows what."', width / 2, placement - 50);
	text('"From the sounds of it, it was quite difficult, anyway I must go now."', width / 2, placement - 100);
	}
	if (line5 === true && count == 5 && choice4 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line4 = false;

	textAlign(CENTER);
  	textFont(font, 30);
	fill(255)
	text('"Yes, thank you for your time', width / 2, placement);
	}



	//relationship with Mr. Body
	if (line1 === true && count == 1 && choice2 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line8 = false;
		line2 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill(150)
	text(' "I’ve been serving as a maid since before he was born, and served as his nanny when he was young."', width / 2, placement);
	
	}

	if (line2 === true && count == 2 && choice2 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line1 = false;
		line3 = true;
	textAlign(CENTER);
  	textFont(font, 30);
	fill(255)
	text(' How was he when he was young?', width / 2, placement);
	}


	if (line3 === true && count == 3 && choice2 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line2 = false;
		line4 = true;
	textAlign(CENTER);
  	textFont(font, 30);
	fill(150)
	text('"He was a very curious child. Very kind as well."', width / 2, placement);
	}
	if (line4 === true && count == 4 && choice2 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line3 = false;
		line5 = true;
	textAlign(CENTER);
  	textFont(font, 30);
	fill(255)
	text('“How was his relationship with his family?”', width / 2, placement);
	}
		if (line5 === true && count == 5 && choice2 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line4 = false;
		line6 = true;
	textAlign(CENTER);
  	textFont(font, 30);
	fill(150)
	text('“His family relationship was good, aside from his fathers infidelity."', width / 2, placement);
	}

			if (line6 === true && count == 6 && choice2 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line5 = false;
		line7 = true;
	textAlign(CENTER);
  	textFont(font, 30);
	fill(255)
	text('“The family dynamic was good, despite this?"', width / 2, placement);
	}

		if (line7 === true && count == 7 && choice2 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line6 = false;
		line8 = true;
	textAlign(CENTER);
  	textFont(font, 30);
	fill(150)
	text('“They did nearly get a divorce. But whats in the past is the past"', width / 2, placement);
	}

	if (line8 === true && count == 7 && choice2 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line7 = false;
		line9 = true;
	textAlign(CENTER);
  textFont(font, 30);

  	text('Mrs. White clearly looks uncomfortable', width / 2, placement - 50);
	fill(255)

	text('1.Pry', width / 2, placement);
			
	textAlign(CENTER);
  textFont(font, 30);
	text('2.Let it go', width / 2, placement + 50 );
	}
	

	if (line9 === true && keyWentDown('1') && choice2 === true){
					//chat bar
	choice5 = true
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line9 = false;
		line1 = true;
		choice2 = false;
		choice5 = true;
	textAlign(CENTER);
  textFont(font, 30);
		fill(150)
	text('“Please tell me, this information could be crucial.', width / 2, placement);
	count = 0	
	}

		if (line1 === true && count == 1 && choice5 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line2 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text(' "I swore not to speak on it. I cannot go against my masters wishes."', width / 2, placement);
	
	}
	if (line2 === true && count == 2 && choice5 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line1 = false;
		line3 = true;
	textAlign(CENTER);
  textFont(font, 30);

	fill(255)

	text('1.Threaten her', width / 2, placement);
			
	textAlign(CENTER);
  textFont(font, 30);
	text('2.Appease her ', width / 2, placement + 50 );
	}


	if (line3 === true && keyWentDown('1') && choice5 === true){
					//chat bar
	choice5 = true
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line3 = false;
		line1 = true;
		choice2 = false;
		choice7 = true;
	textAlign(CENTER);
  textFont(font, 30);
		fill(150)
	text('"You need to tell by order of the law."', width / 2, placement);
	count = 0	
	}

	if (line1 === true && count == 1 && choice7 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line1 = false;
	textAlign(CENTER);
  textFont(font, 30);
	fill(150)
	text('"What?? I don’t even have a lawyer with me. This conversation is over. I must deliver my drinks.', width / 2, placement);
	
	}


	if (line3 === true && keyWentDown('2') && choice5 === true){
					//chat bar
	choice5 = true
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line3 = false;
		line1 = true;
		choice2 = false;
		choice8 = true;
	textAlign(CENTER);
  textFont(font, 30);
		fill(150)
	text('“Please, if you don’t tell me, we may never discover who murdered your younge master.', width / 2, placement);
	text('"Don’t you seak justice for you young master?"', width / 2, placement+50);
	count = 0	
	}

	if (line1 === true && count == 1 && choice8 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line1 = false;
		line2 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text(' "I swore not to speak on it. I cannot go against my masters wishes."', width / 2, placement);
	
	}

		if (line2 === true && count == 2 && choice8 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line2 = false;
		line3 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill(150)
	text('"The late duke had briefly brought home a child.', width / 2, placement);
	text('"A girl, a bit younger than Mr. Body. She was likely late Mr. Body’s child, but he never fully admitted it."', width / 2, placement);
	
	}


		if (line3 === true && count == 3 && choice8 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line3 = false;
		line4 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill(150)
	text('"She lived here for about a year, but after Mrs. Body threatened divorced, the child was sent away."', width / 2, placement);
	text('"I wont say nothing more, besides I did not serve the girl"', width / 2, placement);
	
	}

		if (line4 === true && count == 4 && choice8 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line4 = false;
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('"Thank you for your time, I appreciate your cooperation"', width / 2, placement);
	
	}



	if (line8 === true && keyWentDown('2') && choice2 === true){
					//chat bar
	choice6 = true
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line8 = false;
		choice2 = false;
	textAlign(CENTER);
  textFont(font, 30);
		fill(255)
	text('"Thank you for your time, I appreciate your cooperation"', width / 2, placement);
	count = 0	
	}
	*/
}

function mousePressed(){
	if (mouseX > 100 && mouseY > 155 && mouseX < 300 && mouseY < 445){
		window.location.replace("index.html");
	}}