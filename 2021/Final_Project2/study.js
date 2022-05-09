
function preload(){
	rug = loadImage('study/rug.png');
	desk = loadImage('study/desk.png')
	chair = loadImage('study/chair.png')
	book = loadImage('study/book.png')
	nicechair = loadImage('study/nicechair.png')
}
function setup() {
	createCanvas(windowWidth, windowHeight);
	background('#E3E5EF');
	fill('#4A3624')
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
	
			//secret tunnel~
	noStroke()
	fill('#A48B79')
	rect(0,windowHeight-210,210,210)
	fill('#8E7B6B')
	rect(0,windowHeight-200,200,200)
	fill('#695A4F')
	rect(0,windowHeight-200,150,200)
	fill('#473D35')
	rect(0,windowHeight-200,100,200)
	fill(0)
	rect(0,windowHeight-200,50,200)
	
		//window
	fill('#0B6440')
	stroke(255)
	strokeWeight(10)
	rect(255 +220,50,600,300)
	line(355 +220,50,355 +220,350)
	line(455 +220,50,455 +220,350)
	line(555 +220,50,555 +220,350)
	line(655 +220,50,655 +220,350)
	line(755 +220,50,755 +220,350)
	line(255 +220,150,855 +220,150)
	line(255 +220,250,855 +220,250)
	
	image(rug,300,500,1000,200);
	image(book,660,235,200,80);
	image(desk,460,270,630,350);
	image(chair,300,300,380,380);
	image(nicechair,1100,400,350,350);
}

function draw() {
	loadPixels();
}


function mousePressed(){
	if (mouseX > 100 && mouseY > 155 && mouseX < 300 && mouseY < 445){
		window.location.replace("home_screen.html");
	}
	if (mouseX > 0 && mouseY > windowHeight-210 && mouseX < 210 && mouseY < windowHeight){
		window.location.replace("study.html");
	}}