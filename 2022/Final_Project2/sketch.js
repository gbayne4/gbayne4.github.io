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
	
	if (mouseIsPressed){
		console.log('x = ' + mouseX)
		console.log('y = ' + mouseY)
	}

	stroke('#FF0606')
	strokeWeight(3)
	fill(255,50);

	rect(1100,100,300,70)
	rect(1100,250,300,70)

	noStroke()
	textAlign(CENTER);
  	textFont(font, 40);
	fill('#FF0606')
	text('Answer', 1250, 150);
	text('Instructions', 1250, 300);

}

function mousePressed(){
	//kitchen
	if (mouseX > 315 && mouseY > 76 && mouseX < 481 && mouseY < 259 && board_check === true){
		window.location.replace("kitchen.html");
		x+=100
		image(board,windowWidth*5, windowHeight*5);
}
	//ballroom
	if (mouseX > 540 && mouseY > 119 && mouseX < 765 && mouseY < 287 && board_check === true){
		x-=100
		window.location.replace("ballroom.html");
}
	//conservatory
	if (mouseX > 825 && mouseY > 91 && mouseX < 997 && mouseY < 202 && board_check === true){
		x+=100
		window.location.replace("conservatory.html");
}
	//dining room
	if (mouseX > 316 && mouseY > 322 && mouseX < 539 && mouseY < 515 && board_check === true){
		x-=100
		window.location.replace("dining.html");
}
	//lounge
	if (mouseX > 315 && mouseY > 604 && mouseX < 512 && mouseY < 780 && board_check === true){
		y-=100
		window.location.replace("lounge.html");
}
	//study
	if (mouseX > 802 && mouseY > 662 && mouseX < 999 && mouseY < 780 && board_check === true){
		y+=100
		window.location.replace("study.html");
}
	//hall
	if (mouseX > 572 && mouseY > 577 && mouseX < 743 && mouseY < 780 && board_check === true){
		y-=100
		window.location.replace("hall.html");	
}
	//library
	if (mouseX > 831 && mouseY > 461 && mouseX < 974 && mouseY < 598 && board_check === true){
		y+=100
		window.location.replace("library.html");
}
	//billard room
	if (mouseX > 827 && mouseY > 290 && mouseX < 997 && mouseY < 426 && board_check === true){
		y-=100
		window.location.replace("billard.html");
}
	if (mouseX >  1100 && mouseY > 100 && mouseX < 1400 & mouseY < 170 && board_check === true){
		window.location.replace("theanswer.html");
	}
	if (mouseX >  1100 && mouseY > 250 && mouseX < 1400 & mouseY < 320 && board_check === true){
		window.location.replace("index.html");
	}
}