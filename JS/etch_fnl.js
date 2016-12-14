// BEGIN SKETCH PAD GRANULARITY CALCULATION
var htInPixels = 960;
var wthInPixels = 480;

var numBoxes = 12800;

var meshSize = prompt('Enter density level 1 (coarsest) thru 5 (finest)');

var numDivEls = function (density){
	if (density == 1) {
		numBoxes = 200;
	} else if (density == 2) {
		numBoxes = 800;
	} else if (density == 3) {
		numBoxes = 3200;
	} else if (density == 4) {
		numBoxes = 12800;
	} else if (density == 5) {
		numBoxes = 28800;
	} else {
  		alert('Invalid entry, finer mesh (6 x 6 pixel box) used')
		numBoxes = 12800;
	}
  	console.log(numBoxes);
  	return numBoxes;
};
	numDivEls(meshSize);
	console.log('Number of Boxes is: ' + numBoxes); 
// END SKETCH PAD GRANULARITY CALCULATION

// BEGIN ADDING BOXES TO THE SKETCH AREA
$(function() {
	for (var i = 0; i < numBoxes; i++) {
		if (numBoxes == 200) {
		$('div.fill').append('<div class="unEtchBox mesh1"></div>');
		} else if (numBoxes == 800) {
		$('div.fill').append('<div class="unEtchBox mesh2"></div>');
		} else if (numBoxes == 3200) {
		$('div.fill').append('<div class="unEtchBox mesh3"></div>');
		} else if (numBoxes == 12800) {
		$('div.fill').append('<div class="unEtchBox mesh4"></div>');
		} else if (numBoxes == 28800) {
		$('div.fill').append('<div class="unEtchBox mesh5"></div>');
		} else {
		$('div.fill').append('<div class="unEtchBox mesh4"></div>');
		}
	}
});
// END ADDING BOXES TO THE SKETCH AREA

// BEGIN SKETCHING FUNCTIONALITY
//$(document).ready(function() {	//This works just as well as line used immediately below
$(function() {

	$('div.unEtchBox').hover(function() {
		$(this).addClass('etchBox');
		$(this).removeClass('unEtchBox');
	});
});	
// END SKETCHING FUNCTIONALITY

// BEGIN CHANGE COLOR FUNCTIONALITY
var chooseColor = function (){
	var eColor = document.getElementsByClassName("etchBox");
	console.log(eColor);
	var choice = prompt('Enter Etching Color: \n1 - Black \n2 - Purple  \n3 - Blue \n4 - Olive');
	if (choice == "1") {
			$('div.unEtchBox').hover(function() { 
				$(this).addClass('etchBoxBlack');
			});
			$('div.etchBox').hover(function() { 
				$(this).addClass('etchBoxBlack');
			});}
	else if (choice == "2") {
			$('div.unEtchBox').hover(function() { 
				$(this).addClass('etchBoxPurple');
			});
			$('div.etchBox').hover(function() { 
				$(this).addClass('etchBoxPurple');
			});}
	else if (choice == "3") {
			$('div.unEtchBox').hover(function() { 
				$(this).addClass('etchBoxBlue');
			});
			$('div.etchBox').hover(function() { 
				$(this).addClass('etchBoxBlue');
			});}
	else if (choice == "4") {
			$('div.unEtchBox').hover(function() { 
				$(this).addClass('etchBoxOlive');
			});
			$('div.etchBox').hover(function() { 
				$(this).addClass('etchBoxOlive');
			});}	
	else {
			$('div.unEtchBox').hover(function() { 
				$(this).addClass('etchBoxBlack');
			});
			$('div.etchBox').hover(function() { 
				$(this).addClass('etchBoxBlack');
			});}
};
// END CHANGE COLOR FUNCTIONALITY









