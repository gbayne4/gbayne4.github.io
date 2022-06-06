/* for help appending images: https://stackoverflow.com/questions/20738850/applying-styles-from-css-to-newly-appended-elements*/

$('#sunflowerButton').click(sunflower);
$('#magnoliaButton').click(magnolia);
$('#roseButton').click(rose);
$('#tulipButton').click(tulip);

$("#watercanButton").click(can);
$("#watercanButton").dblclick(hide);

//$("clouds").animate({left: '250px'});

const movingCan = document.getElementById('movingCan');


function sunflower() {
	$('#flowers').append('<img class="flowers" src="images/sunflowerStem.png" />')
}

function magnolia() {

	$('#flowers').append('<img class="flowers" src="images/magnoliaStem.png" />')
}

function rose() {
	$('#flowers').append('<img class="flowers" src="images/roseStem.png" />')
}

function tulip() {

	$('#flowers').append('<img class="flowers" src="images/tulipStem.png" />')
}


function can(){
	$('.movingCan').show();
}

function hide(){
	$('.movingCan').hide();
}

