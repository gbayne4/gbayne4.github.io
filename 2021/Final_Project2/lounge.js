function preload(){
	//woodfloor = loadImage('woodfloor.png');
	rug = loadImage('lounge/rug.png');
	couch = loadImage('lounge/couch.png');
	keyboard = loadImage('lounge/keyboard.png')
	pillowA = loadImage('lounge/pillowA.png')
	pillowB = loadImage('lounge/pillowB.png')
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background('#E6ECDF');
	//image(woodfloor,0,450, windowWidth,500)
	fill('#956133')
	rect(0,450, windowWidth,500)
		//doors
	stroke('#794721')
	fill('#8D6546')
	rect(1000,105,200,345)
	fill('#794721')
	noStroke()
	rect(1025,125,150,140)
	rect(1025,285,150,140)
	fill('#DFC077')
	ellipse(1185,275,20,20)
	
	//window
	fill('#0B6440')
	stroke(255)
	strokeWeight(10)
	rect(255,50,600,300)
	line(355,50,355,350)
	line(455,50,455,350)
	line(555,50,555,350)
	line(655,50,655,350)
	line(755,50,755,350)
	line(255,150,855,150)
	line(255,250,855,250)
	
		//secret tunnel~
	noStroke()
	fill('#A48B79')
	rect(windowWidth-210,windowHeight-210,210,210)
	fill('#8E7B6B')
	rect(windowWidth-200,windowHeight-200,200,200)
	fill('#695A4F')
	rect(windowWidth-150,windowHeight-200,150,200)
	fill('#473D35')
	rect(windowWidth-100,windowHeight-200,100,200)
	fill(0)
	rect(windowWidth-50,windowHeight-200,50,200)
	
	image(rug,-30,300,1200,700);
	image(couch,180,200,750,350);
	image(keyboard,-250,300,600,500);
	image(pillowA,190,190,250,250);
	image(pillowB,680,190,250,250);
}

function draw() {
	loadPixels();

}

function mousePressed(){
		if (mouseX > 1000 && mouseY > 155 && mouseX < 1200 && mouseY < 450){
		window.location.replace("index.html");
	}
	if (mouseX > windowWidth-210 && mouseY > windowHeight-260 && mouseX < windowWidth && mouseY < windowHeight){
		window.location.replace("conservatory.html");
	}}