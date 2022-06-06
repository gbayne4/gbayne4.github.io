let font, placement = 700;
let line0 = true , line1 = true,line2 = false,line3 = false,line4= false,line5= false,line6= false,line7= false, line8= false, line9 = false,line10 = false;
let line11= false, line12= false, line13= false, line14 = false, line15 = false, line16= false, line17= false, line18 = false, line19 = false, line20= false;
let count = 0, count2 = 0;
let choice1 = false, choice2 = false, choice3 = false, choice4 = false, choice5 = false, choice6 = false, choice7 = false, choice8 = false;



function preload(){

	font = loadFont('text/text.ttf');


	pooltable = loadImage('billard/pooltable.png')
	mustard = loadImage('characters/mustard.png')
	plant = loadImage('billard/plant.png')
	darts = loadImage('billard/darts.png')
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background('#FFF8F0');
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
	
	image(plant,240,320,200,200);
	image(plant,-50,320,200,200);
	image(darts,1070,100,200,200);
	image(pooltable,250,350,1000,600);
	image(mustard,500,100,700,900)
		
	//chat bar
	noStroke();
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
}



function draw() {
	noStroke();
	loadPixels();

		if (count2 != 10){
	count2 += 1
	}

	if (keyIsPressed === true && count2 >= 10){
		count += 1
		count2 = 0
	}


	if (line0 === true){
	
	textAlign(CENTER);
  textFont(font, 30);
	fill('#8B7734')
	text('“Ah you must be the detective”', width / 2, placement);
}
	if (line1 === true && count == 1){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line0 = false;
		line2 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('“I’m here to speak with you in regards to Mr. Bodys murder”', width / 2, placement);
	}
	if (line2 === true && count == 2){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line1 = false;
		line3 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill('#8B7734')
	text('“Yeah yeah I know the drill”', width / 2, placement);
}
		if (line3 === true && count == 3){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line2 = false;
		line4 = true;
		choice8 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('1.“What were you doing at the night of the murder”', width / 2, placement);
			
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('2.“Please tell me your relationship with Mr. Body”', width / 2, placement + 50 );
	}
	
		if (line4 === true && keyWentDown('1')){
					//chat bar
	choice1 = true
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line3 = false;
		line5 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill('#8B7734')
	text('“I was here playing pool”', width / 2, placement);
	count = 0	
	}
	
		if (line5 === true && count == 1 && choice1 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line4 = false;
		line6 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('Did you have any idea that a murder was occuring', width / 2, placement);
	}
	
		if (line6 === true && count == 2 && choice1 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line5 = false;
		line7 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill('#8B7734')
	text('"To be honest, I was too drunk to have any ideas period”', width / 2, placement);
	
	}
	
	if (line7 === true && count == 3 && choice1 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line6 = false;
		line8 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill('#8B7734')
	text('“But I promise, I do not have a drunk habit of killing anyone HA HA”', width / 2, placement);
	}
	
			if (line8 === true && count == 4 && choice1 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line7 = false;
		line9 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('1.“Do you really believe that to be appropriate to say given the current circumstances?”', width / 2, placement);
			
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('2. “So you have zero memories from last night”', width / 2, placement + 50 );
	}
	
			if (line9 === true && keyWentDown('1') && choice1 === true){
					//chat bar
	choice1 = true
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line8 = false;
		line9 = false;
	textAlign(CENTER);
  textFont(font, 30);
	fill('#8B7734')
	text('"Oh wow, sorry Mr. Detective, but its not like Mr. Body can be offended? BAHA', width / 2, placement);
	text('Come back when you can take a joke.”', width / 2, placement +50);
	count = 0
	} //end 
	
		
	if (line9 === true && keyWentDown('2') && choice1 === true){
					//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		choice3 = true;
		line8 = false;
		line9 = false;
		line10 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill('#8B7734')
	text('“Well, I do remember trying to talk to Ms. Scarlet. What a fine woman that is.”', width / 2, placement);
	count = 0	
	}
	
	
			if (line10 === true && count == 1 && choice3 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line9 = false;
		line11 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('Trying to?”', width / 2, placement);
	
	}
	
		if (line11 === true && count == 2 && choice3 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line10 = false;
		line12 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill('#8B7734')
	text('"Yeah, I looked for her in the hall, but she suprisingly wasnt there”', width / 2, placement);
		}
	
			if (line12 === true && count == 3 && choice3 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line11 = false;
		line13 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill('#8B7734')
	text('“Shes always there stalking this one portait.', width / 2, placement);
	text('Only god knows why, but I only saw Ms. Peacock”', width / 2, placement + 50);
	}
	
	//end of
	
	if (line13 === true && count == 4 && choice3 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line12 = false;
		line14 = true;
		choice8 = false;
		choice1 = false
		choice2 = false
		choice4 = false
		choice5 = false
		choice6 = false
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('1.“What did you talk about to Ms. Peacock with" ', width / 2, placement);
			
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('2. "Can you tell me more about the portait?”', width / 2, placement + 50 );

	}
	
		if (line14 === true && keyWentDown('1') && choice3 === true){
					//chat bar
		choice4 = true
		fill(0)
		rect(0,placement-100,windowWidth,windowHeight)
		line13 = false;
		line15 = true;
		choice1 = false
		choice2 = false
		choice3 = false
		choice5 = false
		choice6 = false
		choice7 = false;
	textAlign(CENTER);
  textFont(font, 30);
	fill('#8B7734')
	text('“Well I was hoping to get some action...”', width / 2, placement);
	count = 0
	} 
	
	
	
	//choice 4
		if (line14 === true && keyWentDown('2') && choice3 === true){
					//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line13 = false;
		line14 = false;
		choice1 = false
		choice2 = false
		choice3 = false
		choice5 = false
		choice6 = false
	textAlign(CENTER);
  textFont(font, 30);
	fill('#8B7734')
	text(' “Meh, its just some random family photo.”', width / 2, placement);
	text('"This conversations lost my interest. Im going to play pool instead”', width / 2, placement+50);
	count = 0	

	}
	
	if (line15 === true && count == 1 && choice4 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line15 = false;
		line16 = true;
		choice3 = false
		choice8 = false;
		choice1 = false
		choice2 = false
		choice5 = false
		choice6 = false
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('1...."Did you?”', width / 2, placement);
			
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('2. "Is that why you were looking for Ms. Scalet"', width / 2, placement + 50 );

	}
	
			if (line16 === true && keyWentDown('1') && choice4 === true){
					//chat bar
		choice4 = false
		choice6 = true
		fill(0)
		rect(0,placement-100,windowWidth,windowHeight)
		line15 = false;
		line17 = true;
		choice3 = false
		choice8 = false;
		choice1 = false
		choice2 = false
		choice4 = false
		choice5 = false
	textAlign(CENTER);
  textFont(font, 30);
	fill('#8B7734')
	text('“smh, no. That woman is far too stingy. Besides we were interuppted”', width / 2, placement);
	count = 0

	} 
	
		if (line17 === true && count == 1 && choice6 == true){
		fill(0)
		rect(0,placement-100,windowWidth,windowHeight)
		line16 = false;
		line18 = true;
		choice3 = false
		choice8 = false;
		choice1 = false
		choice2 = false
		choice4 = false
		choice5 = false
	textAlign(CENTER);
  textFont(font, 30);
	fill('255')
	text('“Interupted?”', width / 2, placement);

	} 
	
			if (line18 === true && count == 2 && choice6 == true){
		fill(0)
		rect(0,placement-100,windowWidth,windowHeight)
		line17 = false;
		line19 = true;
		choice3 = false
		choice8 = false;
		choice1 = false
		choice2 = false
		choice4 = false
		choice5 = false
	textAlign(CENTER);
  textFont(font, 30);
	fill('#8B7734')
	text('"Yeah, by the sound of people entering and exiting the study.”', width / 2, placement);
	text('People are always in and out of there”', width / 2, placement +50);
	} 
	
	if (line19 === true && count == 3 && choice6 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line18 = false;
		line20 = true;
		choice3 = false
		choice8 = false;
		choice1 = false
		choice2 = false
		choice4 = false
		choice5 = false
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('1.“Do you know who was going in the room?"', width / 2, placement);
			
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('2. “Do you think he was murdered in the study?”', width / 2, placement + 50 );
	}
	
		if (line20 === true && keyWentDown('1')){
					//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		choice6 = false
		line20 = false
		line19 = false
		choice3 = false
		choice8 = false;
		choice1 = false
		choice2 = false
		choice4 = false
		choice5 = false
		choice6 = false
	textAlign(CENTER);
  textFont(font, 30);
	fill('#8B7734')
	text('"Plum always find his way in there. Not too sure why.', width / 2, placement-50);
	text('Anyway, those are enough thoughts to last me forver.', width / 2, placement);
	text('Im going to resume my pool game."' , width / 2, placement +50);
	count = 0	

	}

		if (line20 === true && keyWentDown('2')){
					//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		choice6 = false
		choice3 = false
		choice8 = false;
		choice1 = false
		choice2 = false
		choice4 = false
		choice5 = false
		choice6 = false
	textAlign(CENTER);
  textFont(font, 30);
	fill('#8B7734')
	text('“Well, thatd be the most obvious place, but if it were me, Id go to the opposite end."', width / 2, placement);
	text('“Id go to the opposite end. Less people around you know."', width / 2, placement+50);
	count = 0
	}
	
	//choice 4
		if (line16 === true && keyWentDown('2')){
					//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line13 = false;
		line14 = false;
		choice1 = false
		choice2 = false
		choice3 = false
		choice4 = false
		choice5 = false
		choice6 = false
		choice7 = false
		choice8 = false
	textAlign(CENTER);
  textFont(font, 30);
	fill('#8B7734')
	text(' “Of course, she a very attractive woman. Low class, but attractive.', width / 2, placement-50);
	text('Anyway, those are enough thoughts to last me forver.', width / 2, placement);
	text('Im going to resume my pool game."' , width / 2, placement +50);
	count = 0	
}
	
	//goes back up lol
	if (line4 === true && keyWentDown('2') && choice8 === true){
					//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		
		line4 = false
		line5 = true
		choice7 = true;
		choice1 = false;
		choice8 = false;
		choice2 = false;
		choice3 = false;
		choice4 = false;
		choice5 = false;
	textAlign(CENTER);
  textFont(font, 30);
	fill('#8B7734')
	text('“Were buds! Nothing much else to say”', width / 2, placement);
		text('“Besides, he introduced me to Ms. Scarlet.”', width / 2, placement +50);
	count = 0	
}	//goes back up lol
	if (line5 === true && count === 1 && choice7 === true){
					//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		
		choice3 = true;
		line8 = false;
		line9 = false;
		line10 = true;
		line5 = false
		choice7 = false;
		choice1 = false;
		choice8 = false;
		choice2 = false;
		choice4 = false;
		choice5 = false;
	textAlign(CENTER);
  textFont(font, 30);
	fill('#8B7734')
	text('“I was trying to look for her last night.”', width / 2, placement);
	count = 0
}

}


function mousePressed(){
	if (mouseX > 100 && mouseY > 155 && mouseX < 300 && mouseY < 445){
		window.location.replace("home_screen.html");
	}}