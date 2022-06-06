let font, placement = 700;
let knife, scarlet, kitchen;
let room = false, weapon = false, murderer = false, explain = false;

let board_check = true;
function preload(){
	board = loadImage('images/clueboard.png');
	knife = loadImage('images/knife.png')
	scarlet = loadImage('characters/scarlet.png')
	kitchen = loadImage('images/kitchen.png')
}


function setup() {
	font = loadFont('text/text.ttf');
	createCanvas(windowWidth, windowHeight);
	background(0);
	image(board,windowWidth/5, windowHeight/30, 800,800)
}

function draw() {
	loadPixels();
	board.loadPixels();

	fill(0,50)
	rect(0,0,windowWidth, windowHeight)


	stroke('#FF0606')
	strokeWeight(3)
	fill(255,50);

	rect(180,250,300,70)
	rect(580,250,300,70)
	rect(1000-20,250,300,70)

	rect(400-20,450,300,70)

	rect(800-20,450,300,70)


	noStroke()
	textAlign(CENTER);
  	textFont(font, 40);
	fill('#FF0606')
	text('Weapon', 350 -20, 300);
	text('Room', 750 -20, 300);
	text('Murderer', 1150, 300);

	text('Explanation', 550 -20, 500);
	text('Returm', 950 -20, 500);

	if (weapon === true){
		image(knife,180,50,300,200);
	}
	if (room === true){
		image(kitchen,630,20,200,200);
	}
	if (murderer === true){
		image(scarlet,1080,-50,300,400);
	}
	if (explain === true){
	textAlign(CENTER);
 	textFont(font, 20);
	fill(255)
	text('Scarlet was Mr. Bodys half sister.', width / 2, 600);
	text('She always resented him since he got a happy life while she was a scorned illigimate child.', width / 2, 600+25);
	text('She was always waiting for a chance to strike.', width / 2, 600+50);
	text('After finding out about Mr. Bodys and Professor Plums relationship, she decided to frame Plum.', width / 2, 600+75);
	text('Going into the lounge after Plum left, she took Mr. Body through the underground tunnel into the kitchen,', width / 2, 600+100);
	text('She murderered him in the kitchen after Ms. White left, using a knife.', width / 2, 600+125);
	}

}

function mousePressed(){

	if (mouseX >  180 && mouseY > 250 && mouseX < 480 & mouseY < 320 && board_check === true){
		weapon = true;}

	if (mouseX >  580 && mouseY > 250 && mouseX < 880 & mouseY < 320 && board_check === true){
		room = true;}

	if (mouseX >  980 && mouseY > 250 && mouseX < 1280 & mouseY < 320 && board_check === true){
		murderer = true}

	if (mouseX >  380 && mouseY > 450 && mouseX < 680 & mouseY < 520 && board_check === true){
		explain = true}

	if (mouseX >  780 && mouseY > 450 && mouseX < 1080 & mouseY < 520 && board_check === true){
		window.location.replace("home_screen.html"); }
}

