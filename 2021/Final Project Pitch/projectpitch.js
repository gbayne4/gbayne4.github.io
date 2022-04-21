console.log("The Button");

const button = document.getElementById('button');




const massage = document.getElementById('massage')


let theBody = document.querySelector('body');

button.addEventListener('click', errordisplay);
error1.addEventListener('click', firstquote);
error2.addEventListener('click', secondquote);
error3.addEventListener('click', thirdquote);
error4.addEventListener('click', fourthquote);
error5.addEventListener('click', fifthquote);
error6.addEventListener('click', sixthquote);
error7.addEventListener('click', seventhquote);
error8.addEventListener('click', eightquote);



function errordisplay(){

	error1.style.visibility = "visible";
	error2.style.visibility = "visible";
	error3.style.visibility = "visible";
	error4.style.visibility = "visible";
	error5.style.visibility = "visible";
	error6.style.visibility = "visible";
	error7.style.visibility = "visible";
	error8.style.visibility = "visible";
	changeH1.style.visibility  = "visible";
	changeH1.style.animation = "fadeIn ease 10s, glow 1s ease-in-out infinite alternate;'"
	massage.style.animation = 'fadeOut ease 10s, glow 1s ease-in-out infinite alternate;';
}

function firstquote(){
	quote1.style.visibility = "visible";
	error1.style.visibility = "hidden";
}
function secondquote(){
	quote2.style.visibility = "visible";
	error2.style.visibility = "hidden";
}
function thirdquote(){
	quote3.style.visibility = "visible";
	error3.style.visibility = "hidden";
}
function fourthquote(){
	quote4.style.visibility = "visible";
	error4.style.visibility = "hidden";
}
function fifthquote(){
	quote5.style.visibility = "visible";
	error5.style.visibility = "hidden";
}
function sixthquote(){
	quote6.style.visibility = "visible";
	error6.style.visibility = "hidden";
}
function seventhquote(){
	quote7.style.visibility = "visible";
	error7.style.visibility = "hidden";
}
function eightquote(){
	quote8.style.visibility = "visible";
	error8.style.visibility = "hidden";
}

