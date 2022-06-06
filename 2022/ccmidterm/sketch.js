let frog,frog2,frog3,frog4, eyes, mouth, bug, bug2, bug3, bug4,bug5, bug6, backgroundChange, hypnotized,clock;
let x, moveFrogX = 0, moveFrogY = 0;
let counter;
let left = 900;
let updown;
let dis = 255, dis2 = 255;
let r = 84, b = 174, g = 102;
let o = 0, dim;
let on = false, frogColor = false;
let moveX = 0, moveY = 1, moveX2 =0;
let f,d, p, q;
let amplitude = 200,theta = 0.0, np = 1;
let amplitude2 = 600,theta2 = 0.0, np2 = 1;
let amplitude3 = 0,theta3 = 0.0, np3 = 1;
let inOut = 1;
let angleClockX = 0, angleClockY = 0, angleClock;
let clockHelper;
let length;
let origin;
let gravity = 1;
let oClock = 0;
let frogSkyOpacity = 0, bugOpacity = 255, waveOpacity = 0, hypOpacity = 255, pupilOpacity = 255, fadeIn=0;

let xspot = 250, otherxspot = 545;
let yspot = 100, otheryspot = 100;

let frogOpacity = 255, changeSign = 1;
let otherxspot2, otheryspot2;

let angle = 2.0;
let scalar = 1.0;
let speed = .04;
let col = {r: 0, g: 0, b: 0};

let angle2 = 2.0;
let scalar2 = 1.0;
let speed2 = .03;
let col2 = {r: 0, g: 0, b: 0};

let w = 0;
let helper = true;
let helperb = false;
let wave, wave2, wave3



function setup() {
  createCanvas(800, 800);
  
origin = createVector(300, 0);
angleClock = PI / 4;
clockHelper = createVector();
length = 400;
  
otherxspot2 = width/2;
otheryspot2 = height/2;
  
  wave =new Wave();
  wave2 =new Wave();
  wave3 =new Wave();
  frog = new Frog();
  frog2 = new Frog();
  frog3 = new Frog();
  frog4 = new Frog();
  eyes = new Eyes();
  mouth = new Mouth();
  clock = new Clock();
  hypnotized = new Hypnotized();
  backgroundChange = new Background();
  mouth.tongueUp();
left1 = width, left2 = width, left3 = width -150,left4 = width -200,left5 = width -100;
bug = new Bug();
bug1 = new Bug();
bug2 = new Bug();
bug3 = new Bug();
bug4 = new Bug();
bug5 = new Bug();

updown = 150;
updown1 = -40;
updown2 = 250;
updown3 = 50;
updown4 = 330;
updown5 = 550;
beginBug = false;

  setTimeout(function () { mouth.tongueDown();}, 4350)
  setTimeout(function () { mouth.tongueUp();}, 4450)

  setTimeout(function () { eyes.closed();}, 2000)
  setTimeout(function () { eyes.open();}, 2150)
  setTimeout(function () { eyes.closed();}, 4000)
  setTimeout(function () { eyes.open();}, 4150)


  setTimeout(function () { eyes.closed();}, 6000)
  setTimeout(function () { eyes.open();}, 6100)
  setTimeout(function () { eyes.closed();}, 6200)
  setTimeout(function () { eyes.open();}, 6300)

  setTimeout(function () { mouth.tongueDown();}, 6350)
  setTimeout(function () { mouth.tongueUp();}, 6450)

  setTimeout(function () { mouth.tongueDown();}, 8450)
  setTimeout(function () { mouth.tongueUp();}, 8500)
  setTimeout(function () { mouth.tongueDown();}, 8450)
  setTimeout(function () { mouth.tongueUp(); dis=0;}, 8500)

  setTimeout(function () { mouth.tongueDown();}, 22050)
  setTimeout(function () { mouth.tongueUp(); dis=0;}, 22100)

  setTimeout(function () { mouth.tongueDown();}, 27050)
  setTimeout(function () { mouth.tongueUp(); dis=0;}, 27100)

  setTimeout(function () { mouth.tongueDown();}, 32050)
  setTimeout(function () { mouth.tongueUp(); dis=0;}, 32100)


  setTimeout(function () { mouth.tongueDown();}, 38050)
  setTimeout(function () { mouth.tongueUp(); dis=0;}, 38100)


  setTimeout(function () { mouth.tongueDown();}, 42050)
  setTimeout(function () { mouth.tongueUp(); dis=0;}, 42100)

  setTimeout(function () { mouth.tongueDown();}, 52050)
  setTimeout(function () { mouth.tongueUp(); dis=0; }, 52100)
   //bug eaten
  setTimeout(function () { eyes.closed();}, 63000)
  setTimeout(function () { eyes.open();}, 63100)
  setTimeout(function () { eyes.closed();}, 63200)
  setTimeout(function () { eyes.open();}, 63300)

  setTimeout(function () { mouth.tongueDown();}, 62050)
  setTimeout(function () { mouth.tongueUp(); dis=0;}, 62100)
  
  setTimeout(function () { mouth.tongueDown();}, 65050)
  setTimeout(function () { mouth.tongueUp(); dis=0;}, 65100)
  
  setTimeout(function () { eyes.open();}, 73100)
  setTimeout(function () { eyes.closed();}, 73200)
  setTimeout(function () { eyes.open();}, 73300)
  setTimeout(function () { eyes.open();}, 83100)
  setTimeout(function () { eyes.closed();}, 83200)
  setTimeout(function () { eyes.open();}, 83300)
  setTimeout(function () { eyes.open();}, 93100)
  setTimeout(function () { eyes.closed();}, 93200)
  setTimeout(function () { eyes.open();}, 93300)
  setTimeout(function () { eyes.open();}, 103100)
  setTimeout(function () { eyes.closed();}, 103200)
  setTimeout(function () { eyes.open();}, 103300)
}

function draw() {
  
  background(168, 252, 255);
  fill(18, 99, 222, dis2)
  noStroke()
  rect(0, height/2, 800,400)
  stroke(9, 161, 6,dis2);
  fill(29, 199, 26, dis2)
  ellipse(width/2, 600, 800,400)
  
  noStroke()
  fill(255, 249, 74, dis2)
  ellipse(100,100, 60,60)
  fill(255, 249, 74, dis2-200)
  ellipse(100,100, 100,100)
  
  cloud(moveX, 100, dis2);
  cloud(moveX + 50, 250, dis2);
  cloud(moveX + 500, 350, dis2);
  cloud(moveX + 280, 150, dis2);
  cloud(moveX + 600, 50, dis2);
  cloud(moveX - 200, 20, dis2);
  cloud(moveX - 300, 200, dis2);
  moveX += 2;
  

  if (on == true){
hypnotized.variables(100);
hypnotized.display(hypOpacity);
hyp(); //speeds it up - also exists elseware
}

  frog.display(r,b,g,0,0,1,255);
  frog.spots(0,150,0,230);
  eyes.display(255);

  mouth.display();

  //og bug shows up

  bug.display(left,updown,dis);

    left = left - 6;

    if (left%5){
      updown = updown - 5
    }
    else {
      updown = updown + 20
    }
  
if (on == true){
hypnotized.variables(100);
hypnotized.display(hypOpacity);
hyp(pupilOpacity); 
  }
  
//bug leaves
if (left < 0){
  backgroundChange.crazy(o);
  o= o + .5;
  frog.display(r,b,g,0,0,1,frogOpacity);
  frog.spots(0,150,0,frogOpacity-20);
  eyes.display(255);
  mouth.display();
  on = true
}
  
if (on == true){
hypnotized.variables(100);
hypnotized.display(hypOpacity);
hyp(pupilOpacity);
  
  let force = gravity * sin(angleClock);
  angleClockX = (-1 * force) / length;
  angleClockY += angleClockX;
  angleClock += angleClockY;
  
  
  clockHelper.x = length * sin(angleClock) + origin.x;
  clockHelper.y = length * cos(angleClock) + origin.y;
  clock.display(clockHelper.x,clockHelper.y, oClock);
  clock.keepTop();
  oClock += 5;
  if (oClock > 255){
    oClock = 255
  }
  //learned how to make a pendulum thanks to The Coding Train <3


if (frogColor == true){
  frameRate(30);
  
  
    for (let f = 0; f <= width; f += dim) {
    //frogCray(f, height / 2);
    }
  frog.display(r,b,g,0,0,1,frogOpacity);
  frog.spots(random(255),random(255),random(255),frogOpacity);
  frogOpacity -= 5*changeSign 
  if (frogOpacity < 50){
    changeSign = -1
  }
    if (frogOpacity > 260){
    changeSign = 1
  }
  
  mouth.display();
  hypnotized.variables(100);
  hypnotized.display(hypOpacity);
  mouth.display();
  hyp(pupilOpacity);
      
wave.setup(amplitude,theta);
      
theta += 0.02

amplitude += (10*np)
  if (amplitude > 700) {
        np = -1
    }
  if (amplitude < 100){
        np = 1
  }
  
waveOpacity += 5
  if (waveOpacity > 200){
    waveOpacity = 200
  }
      
wave.calculations();
wave.display(random(100,250),random(0,100),random(100,200),waveOpacity);
      
      
wave2.setup(amplitude2,theta2);
      
theta2 += 0.1

amplitude2 += (50*np2)
  if (amplitude2 > 800) {
        np2 = -1
    }
  if (amplitude2 < 100){
        np2 = 1
  }
      
wave2.calculations();
wave2.display(random(100,200),random(100,250),random(0,150),waveOpacity);
      
      
      
      
wave3.setup(amplitude3,theta3);
      
theta3 += 0.04

amplitude3 += (10*np3)
  if (amplitude3 > 700) {
        np3 = -1
    }
  if (amplitude3 < 100){
        np3 = 1
  }
      
wave3.calculations();
wave3.display(random(0,100),random(100,200),random(100,250),waveOpacity);
//wave
      //the frogs bouncing frogs
      frogSky(-50,20,frogSkyOpacity);
      frogSky(-300,200,frogSkyOpacity);
      frogSky(-470,20,frogSkyOpacity);
      frogSky(-550,400,frogSkyOpacity);
      frogSky(-50,700,frogSkyOpacity);
      frogSky(-250,550,frogSkyOpacity);
      frogSky(-50,450,frogSkyOpacity);
      frogSky(-450,700,frogSkyOpacity);
  
  frogSkyOpacity += 5;
  if (frogSkyOpacity > 255){
    frogSkyOpacity = 255;
  }
  bugs(bugOpacity);
  
  let force = gravity * sin(angleClock);
  angleClockX = (-1 * force) / length;
  angleClockY += angleClockX;
  angleClock += angleClockY;
  
  
  clockHelper.x = length * sin(angleClock) + origin.x;
  clockHelper.y = length * cos(angleClock) + origin.y;
  clock.display(clockHelper.x,clockHelper.y,oClock);
  clock.keepTop();
  //learned how to make a pendulum thanks to The Coding Train <3
    }
    
if (w > 2){
frogSkyOpacity -= 5.65; 
oClock -= 5.5;
bugOpacity -=2;
waveOpacity -= 5.65; 
hypOpacity -=.7;
pupilOpacity -=5;
o -= 10;
}
  
  

if (w > 4) {
  
  background(168, 252, 255,fadeIn);
  fill(18, 99, 222, fadeIn)
  noStroke()
  rect(0, height/2, 800,400)
  stroke(9, 161, 6,fadeIn);
  fill(29, 199, 26, fadeIn)
  ellipse(width/2, 600, 800,400)
  
  noStroke()
  fill(255, 249, 74, fadeIn)
  ellipse(100,100, 60,60)
  fill(255, 249, 74, fadeIn-200)
  ellipse(100,100, 100,100)
  
  cloud(moveX2, 100, fadeIn);
  cloud(moveX2 + 50, 250, fadeIn);
  cloud(moveX2 + 500, 350, fadeIn);
  cloud(moveX2 + 280, 150, fadeIn);
  cloud(moveX2 + 600, 50, fadeIn);
  cloud(moveX2 - 200, 20, fadeIn);
  cloud(moveX2 - 300, 200, fadeIn);
  moveX2 += 2;

  frog.display(r,b,g,0,0,1,fadeIn);
  frog.spots(0,150,0,fadeIn-20);
  eyes.display(fadeIn);

  mouth.display();
  fadeIn +=2
  if (fadeIn > 255){
    fadeIn = 255;
    
  }
}}}

function bugs(o){
  bug1.display(left1,updown1,o);

    left1 = left1 - 6;

    if (left1%5){
      updown1 = updown1 - 5
    }
    else {
      updown1 = updown1 + 20
    }


        bug2.display(left2,updown2,255);

    left2 = left2 - 6;

    if (left%5){
      updown2 = updown2 - 5
    }
    else {
      updown2 = updown2 + 20
    }

    bug3.display(left3,updown3,255);

    left3 = left3 - 6;

    if (left3%5){
      updown3 = updown3 - 5
    }
    else {
      updown3 = updown3 + 20
    }

    bug4.display(left4,updown4,255);

    left4 = left4 - 6;

    if (left4%5){
      updown4 = updown4 - 5
    }
    else {
      updown4 = updown4 + 20
    }


    bug5.display(left5,updown5,255);

    left5 = left5 - 6;

    if (left5%5){
      updown5 = updown5 - 5
    }
    else {
      updown5 = updown5 + 20
    }

    if (left5 < - 400 ){
left1 = width;
 left2 = width;
 left3 = width -150;
 left4 = width -200;
 left5 = width -100;

 w+=1
}}


//how can I make this stay on tbe page!!!!
function hyp(o){
  
if (angle < 35 && helper == true){
  col.r = random(100, 250);
  col.g = random(0, 250);
  col.b = random(100, 250);
  let x = cos(angle) * scalar + otherxspot;
  let y = sin(angle) * scalar + otheryspot;
  fill(col.r, col.g, col.b,o);
  noStroke();
  ellipse(x, y, 20, 20);
  let j = cos(angle) * scalar + xspot;
  let s = sin(angle) * scalar + yspot;
  fill(col.r, col.g, col.b);
  noStroke();
  ellipse(j, s, 20, 20);

  angle += speed;
  scalar += speed;
  }
if (angle > 35){
  helperb = true;
}
if (helperb == true){
  speed += .04;
  angle -= speed;
  scalar -= speed;
  frogColor = true;
  // helper = false
}
if (angle == 2.0){
  
  col.r = random(100, 250);
  col.g = random(0, 250);
  col.b = random(100, 250);
  let x = cos(angle) * scalar + otherxspot;
  let y = sin(angle) * scalar + otheryspot;
  fill(col.r, col.g, col.b);
  noStroke();
  ellipse(x, y, 20, 20);
  let j = cos(angle) * scalar + xspot;
  let s = sin(angle) * scalar + yspot;
  fill(col.r, col.g, col.b);
  noStroke();
  ellipse(j, s, 20, 20);

  angle += speed;
  scalar += speed;
  
  helper = true;
  helperb = false;
  angle = 0
  scalar = 0
  otherxspot = 545
  otheryspot = 100

  }}
  

function cloud( x, y, o){
  fill(255,o);
  noStroke();
  ellipse(40+x,40+y, 80, 40);
  ellipse(80+x,40+y, 80, 40);
  ellipse(60+x,20+y, 80, 40);
}

function frogSky(x,y,o){
  frog2.display(random(255),random(255),random(255),x + moveFrogX,y + moveFrogY,0.1,o);
  moveFrogX ++
      if (moveFrogX%5){
      moveFrogY = moveFrogY - 5;
    }
    else {
      moveFrogY = moveFrogY + 20;
    }
  if ((moveFrogX + x) > 1350){
    moveFrogX = 0
    x = x - 800
  }}