console.log("The Button");

let theButton_1 = document.querySelector('button');
let theButton_2 = document.querySelector('button2')
let theButton_3 = document.querySelector('button3');
let theButton_4 = document.querySelector('button4')
let theButton_5 = document.querySelector('button5');
let theButton_6 = document.querySelector('button6')
let theButton_7 = document.querySelector('button7')

let theBody = document.querySelector('body');
let x = 0


let j = theButton_1.addEventListener('click', buttonOne);

if (x==1){
  theButton_2.style.visibility = "visible";
  theButton_2.addEventListener('click', buttonTwo);
  console.log("button 2 appear");
}
theButton_3.addEventListener('click', buttonThree);
theButton_4.addEventListener('click', buttonFour);
theButton_5.addEventListener('click', buttonFive);
theButton_6.addEventListener('click', buttonSix);
theButton_7.addEventListener('click', buttonSeven);


function buttonOne(){
  // if (mouseIsPressed){
    console.log('you clicked!');
    // console.log(theBody.style);
    // theBody.style.backgroundColor = "pink";
    // console.log("Horray you clicked the button");
    theButton_1.style.visibility = "hidden";
    console.log("I disappeared")
    theButton_2.visible
    x= 1
    removeEventListener.j

  // }
}

function buttonTwo(){
  console.log('you clicked!');
  theButton_2.style.visibility = "hidden";
  console.log("I disappeared");
  theButton_3.style.visibility = "visible";
}

function buttonThree(){
  console.log('you clicked!');
  theButton_3.style.visibility = "hidden";
  console.log("I disappeared");
  theButton_4.style.visibility = "visible";
}

function buttonFour(){
  console.log('you clicked!');
  theButton_4.style.visibility = "hidden";
  console.log("I disappeared");
  theButton_5.style.visibility = "visible";
}

function buttonFive(){
  console.log('you clicked!');
  theButton_5.style.visibility = "hidden";
  console.log("I disappeared");
  theButton_6.style.visibility = "visible";
}

function buttonSix(){
  console.log('you clicked!');
  theButton_6.style.visibility = "hidden";
  console.log("I disappeared");
  theButton_7.style.visibility = "visible";
}

function buttonSeven(){
  console.log('you clicked!');
  theButton_7.style.visibility = "visible";
  console.log("I stay");
}
