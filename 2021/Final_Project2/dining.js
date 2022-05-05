function preload(){
	woodfloor = loadImage('images/woodfloor.png');
	table = loadImage('dining/table.png');
	plant = loadImage('dining/plant.png')
}


function setup() {
	createCanvas(windowWidth, windowHeight);
	background('#FFF8F0');
	fill('#8A5A3E')
	rect(0,200,windowWidth, windowHeight)
	image(woodfloor,-200,435, windowWidth+700,700)
	
				//doors
		stroke('#E6722F')
		fill('#FD833C')
		rect(100,90,200,345)
		fill('#DA6825')
		noStroke()
		rect(125,110,150,140)
		rect(125,270,150,140)
		fill('#DFC077')
		ellipse(285,260,20,20)
	
	
			//window
	fill('#0B6440')
	stroke(255)
	strokeWeight(10)
	rect(255 +200,50,600,300)
	line(355 +200,50,355 +200,350)
	line(455 +200,50,455 +200,350)
	line(555 +200,50,555 +200,350)
	line(655 +200,50,655 +200,350)
	line(755 +200,50,755 +200,350)
	line(255 +200,150,855 +200,150)
	line(255 +200,250,855 +200,250)
	
	image(plant,240,280,200,200);
	image(plant,-50,280,200,200);
	image(table,300,150,1100,700);
}

function draw() {
loadPixels()
}
function mousePressed(){
	if (mouseX > 100 && mouseY > 90 && mouseX < 300 && mouseY < 435){
		window.location.replace("index.html");
	}}