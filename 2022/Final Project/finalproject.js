console.log("The Button");

const choice1 = document.getElementById('choice1');
const choice2 = document.getElementById('choice2');

const response = document.getElementById('response');
const next = document.getElementById('next');

choice1.addEventListener('click', firstchoice);

let theBody = document.querySelector('body');

function firstchoice(){
	scene1choice1.style.visibility = "hidden";
	choice1.style.visibility = "hidden";
	choice2.style.visibility = "hidden";
	response.style.visibility = "visible";
	next.style.visibility = "visible";
}


