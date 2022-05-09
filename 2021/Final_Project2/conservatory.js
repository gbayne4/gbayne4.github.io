let font, placement = 700;
let line0 = true , line1 = true,line2 = false,line3 = false,line4= false,line5= false,line6= false,line7= false, line8= false, line9 = false,line10 = false;
let line11= false, line12= false, line13= false, line14 = false, line15 = false, line16= false, line17= false, line18 = false, line19 = false, line20= false;
let count = 0, count2 =0;
let choice1 = false, choice2 = false, choice3 = false, choice4 = false, choice5 = false, choice6 = false, choice7 = false, choice8 = false;


function preload(){
	font = loadFont('text/text.ttf');

	tiles = loadImage('conservatory/floortiles.png');
	table = loadImage('conservatory/table.png');
	chair = loadImage('conservatory/chair.png');
	yellowflowers = loadImage('conservatory/yellowflowers.png')
	redflowers = loadImage('conservatory/redflowers.png')
	tableflower = loadImage('conservatory/tableflower.png')
	leaves = loadImage('conservatory/leaves.png')
	peacock = loadImage('characters/peacock.png')
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background('#DCD6FA');
	image(tiles,0,400, windowWidth,700)
	
	//secret tunnel~
	noStroke()
	fill('#A48B79')
	rect(windowWidth-210,windowHeight-260,210,260)
	fill('#8E7B6B')
	rect(windowWidth-200,windowHeight-250,200,250)
	fill('#695A4F')
	rect(windowWidth-150,windowHeight-250,150,250)
	fill('#473D35')
	rect(windowWidth-100,windowHeight-250,100,250)
	fill(0)
	rect(windowWidth-50,windowHeight-250,50,250)
	
	
	//windows
	fill('#0B6440')
	stroke(255)
	strokeWeight(10)
	rect(100,50,200,300)
	rect(400,50,200,300)
	rect(700,50,200,300)
	
	stroke('#794721')
	fill('#8D6546')
	rect(1000,50,200,345)
	fill('#794721')
	noStroke()
	rect(1025,70,150,140)
	rect(1025,230,150,140)
	fill('#DFC077')
	ellipse(1185,220,20,20)
	
	//sun
	fill('#08172C')
	noStroke()
	ellipse(450,100,30,30)
	fill(0,50)
	noStroke()
	ellipse(450,100,50,50)
	image(redflowers,-30,290,250,150)
	image(yellowflowers,230,300,250,150)
	image(redflowers,490,290,250,150)
	image(yellowflowers,750,300,250,150)
	image(leaves,100,55,210,180)
	image(leaves,400,55,210,180)
	image(leaves,700,55,210,180)
	image(chair,400,250,300,350)
	image(table,200,300,350,350)
	image(tableflower,310,250,130,130)
	image(peacock,-100,100,700,900)

//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)

}

function draw() {
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
	fill('#74C7E1')
	text('“Well hello there handsome~”', width / 2, placement);
	}
	
	if (line1 === true && count == 1 ){
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
	if (line2 === true && count == 2 ){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line1 = false;
		line3 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill('#74C7E1')
	text('“Oh yes, how tragic it was…”', width / 2, placement);
	}
		if (line3 === true && count == 3 ){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line2 = false;
		line4 = true;
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
		line4 = false;
		line5 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill('#74C7E1')
	text('“Me? I was just minding my business?”', width / 2, placement);
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
	text('. . .', width / 2, placement);
	
	}
	
		if (line6 === true && count == 2 && choice1 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line5 = false;
		line7 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('“Nothing else to say?”', width / 2, placement);
	
	}
	
			if (line7 === true && count == 3 && choice1 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line6 = false;
		line8 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill('#74C7E1')
	text('“Maybe. Once you ask better questions.”', width / 2, placement);
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
	text('1.“Where were you last night?”', width / 2, placement);
			
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('2. “Did you meet with Mr. Body at all last night”', width / 2, placement + 50 );
	}
	
			if (line9 === true && keyWentDown('1')){
					//chat bar
	choice1 = true
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line8 = false;
		line9 = false;
	textAlign(CENTER);
  textFont(font, 30);
	fill('#74C7E1')
	text('“Ha, why are you so obsessed with my whereabouts,', width / 2, placement);
	text('come back when you ask me better questions.”', width / 2, placement +50);
	count = 0
	} //end 
	
		
	if (line9 === true && keyWentDown('2')){
					//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		choice3 = true;
		line8 = false;
		line9 = false;
		line10 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill('#74C7E1')
	text('“Hmm. Yes, but only when we had dinner with the others.”', width / 2, placement);
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
	text('“Are you not close with Mr. Body”', width / 2, placement);
	
	}
	
		if (line11 === true && count == 2 && choice3 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line10 = false;
		line12 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('“Nothing else to say?”', width / 2, placement);
	
	}
	
			if (line12 === true && count == 3 && choice3 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line11 = false;
		line13 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill('#74C7E1')
	text('“Not at all. I’m only here because the place is nice and the food is good?”', width / 2, placement);
	}
	
	//end of
	
				if (line13 === true && count == 4 && choice3 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line12 = false;
		line14 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('1.“Do you dislike Mr. Body” ', width / 2, placement);
			
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('2. “Then why were you invited here?”', width / 2, placement + 50 );
	}
	
		if (line14 === true && keyWentDown('1')){
					//chat bar
		choice4 = true
		fill(0)
		rect(0,placement-100,windowWidth,windowHeight)
		line13 = false;
		line15 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill('#74C7E1')
	text('“Do I dislike him? Well…we have an amicable relationship.”', width / 2, placement);
	count = 0
	} 
	
	
	
	//choice 4
		if (line14 === true && keyWentDown('2')){
					//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		choice4 = true;
		line13 = false;
		line14 = false;
		line15 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill('#74C7E1')
	text(' “Him and my late husband were…‘business partners.’”', width / 2, placement);
	count = 0	
	}
	
				if (line15 === true && count == 1 && choice4 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line15 = false;
		line16 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('1.“But how do you feel about him?”', width / 2, placement);
			
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('2. “Does Mr. Body like you?”', width / 2, placement + 50 );
	}
	
			if (line16 === true && keyWentDown('1')){
					//chat bar
		choice4 = false
		choice6 = true
		fill(0)
		rect(0,placement-100,windowWidth,windowHeight)
		line16 = false;
		line17 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill('#74C7E1')
	text('“. . .”', width / 2, placement);
	count = 0
	} 
	
		if (line17 === true && count == 1 && choice6 == true){
		fill(0)
		rect(0,placement-100,windowWidth,windowHeight)
		line17 = false;
		line18 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill('#74C7E1')
	text('“To be honest I hate his guts”', width / 2, placement);
	} 
	
			if (line18 === true && count == 2 && choice6 == true){
		fill(0)
		rect(0,placement-100,windowWidth,windowHeight)
		line18 = false;
		line19 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill('#74C7E1')
	text('“I didn’t murder him though, I’m not that petty.”', width / 2, placement);
	} 
	
	if (line19 === true && count == 3 && choice6 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line19 = false;
		line20 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('1.“May I ask why you hate him”', width / 2, placement);
			
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('2. “How close was your late husband with Mr. Body”', width / 2, placement + 50 );
	}
	
		if (line20 === true && keyWentDown('1')){
					//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		choice6 = false
		choice10 = true
		line20 =false
		line21 = true
	textAlign(CENTER);
  textFont(font, 30);
	fill('#74C7E1')
	text('"Mr. Body is what you call a seducer of men.', width / 2, placement-50);
	text('He has Plum wrapped around his finger.', width / 2, placement);
	text('Honestly, I might hate him, but I respect him"', width / 2, placement +50);
	count = 0	
	}
	if (line20 === true && count ===1 && choice10 === true){
					//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		choice10 = false
		line20 = false
	textAlign(CENTER);
  textFont(font, 30);
	fill('#74C7E1')
	text('"Ive had just enough of this conversation', width / 2, placement-50);
	text('All I hear is "Mr. Body" "Mr. Body" these days.', width / 2, placement);
	text('Please talk again when you have something more interesting to say"', width / 2, placement +50);
	count = 0	
	}

		if (line20 === true && keyWentDown('2')){
					//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		choice6 = false
	textAlign(CENTER);
  textFont(font, 30);
	fill('#74C7E1')
	text('  “... too close. In fact, he may have been closer to my husband than I was.. HA!”', width / 2, placement);
	count = 0	
	}
	
	//choice 4
		if (line16 === true && keyWentDown('2')){
					//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		choice4 = true;
		line13 = false;
		line14 = false;
		line15 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill('#74C7E1')
	text(' “Him and my late husband were … ‘business partners.’”', width / 2, placement);
	count = 0	
	}
	
	
	
	
	
	
	if (line12 === true && count == 3 && choice3 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line11 = false;
		line13 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill('#74C7E1')
	text('“Not at all. I’m only here because the place is nice and the food is good?”', width / 2, placement);
	}
	
	
	//goes back up lol
	if (line4 === true && keyWentDown('2')){
					//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		
		choice3 = true;
		line8 = false;
		line9 = false;
		line10 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill('#74C7E1')
	text('“There’s nothing to tell, I hardly know the man.”', width / 2, placement);
	count = 0	
	}
	
	/*
		if (line5 === true && count == 1 && choice2 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line4 = false;
		line6 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('. . .', width / 2, placement);
	
	}
	
		if (line6 === true && count == 2 && choice2 === true){
			//chat bar
	fill(0)
	rect(0,placement-100,windowWidth,windowHeight)
		line5 = false;
		line7 = true;
	textAlign(CENTER);
  textFont(font, 30);
	fill(255)
	text('“Nothing else to say?”', width / 2, placement);
	
	}
	*/
}

function mousePressed(){
	if (mouseX > 1000 && mouseY > 50 && mouseX < 1200 && mouseY < 395){
		window.location.replace("home_screen.html");
	}
	if (mouseX > windowWidth-210 && mouseY > windowHeight-260 && mouseX < windowWidth && mouseY < windowHeight){
		window.location.replace("lounge.html");
	}}