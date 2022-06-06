let x =100 ,y=100;
let font, placement = 700;

let board_check = true;
function preload(){
	board = loadImage('images/clueboard.png');
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
	
	textAlign(CENTER);
  	textFont(font, 80);
	fill('#FF0606')
	text('Welcome to Clue:', width / 2, 100);
	text('the Interactive Narrative', width / 2, 200);
	textAlign(CENTER);
 	textFont(font, 30);
	fill(255)
	text('Click a room to enter', width / 2, 300-20);
	text('Search for the murder weapon (by clicking around the room)', width / 2, 350-20);
	text('Speak to suspects using space bar and keys 1+2', width / 2, 400-20);
	text('White Text = You, Color Text = Suspect', width / 2, 450-20);
	text('Leave rooms by clicking on the door', width / 2, 500-20);
	text('When ready to reveal, click the answer key and see if you correctly guessed the:', width / 2, 550-20);
	text('Room,Weapon, and Murderer ', width / 2, 600-20);
	text('Good luck!!', width / 2, 650-20);
	text('Press the spacebar to begin', width / 2, 700-20);
	


}

function keyPressed(){
	
		window.location.replace("home_screen.html");
	
}