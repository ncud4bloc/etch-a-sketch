$myMesh = $('.meshD');
$myColor = $('.meshC');
$myEtch = $('.fill');
var numBoxes; 
var useColor = 'newColor1';
var meshCount = 0;
var stop = 0;
var numClick = 2;

alert('Click on \'Mesh Density\' button at bottom to begin \nLeft mouse click to start and stop etching');

var numDivEls = function (density){
    $('div.fill').innerHTML="";
    numBoxes = 0;
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
  		alert('Invalid entry; default 6x6 pixel-box size used')
		numBoxes = 12800;
	}
  	return numBoxes;
};

var generateGrid = function (){
    $('div.fill').innerHTML="";
    for (var i = 0; i < numBoxes; i++) {
        if (numBoxes == 200) {
            $('div.fill').append('<div class="aBox defaultColor mesh1"></div>');
            } else if (numBoxes == 800) {
            $('div.fill').append('<div class="aBox defaultColor mesh2"></div>');
            } else if (numBoxes == 3200) {
            $('div.fill').append('<div class="aBox defaultColor mesh3"></div>');
            } else if (numBoxes == 12800) {
            $('div.fill').append('<div class="aBox defaultColor mesh4"></div>');
            } else if (numBoxes == 28800) {
            $('div.fill').append('<div class="aBox defaultColor mesh5"></div>');
            } else {
            $('div.fill').append('<div class="aBox defaultColor mesh4"></div>');
            }
    }
};

var noEtch = function (){
    //$('div.aBox').off('hover');               // Doesn't work using this
    $('div.aBox').off('mouseover');
};

var yesEtch = function (){
        //$('div.aBox').hover(function() {      // Doesn't work using this
        $('div.aBox').on('mouseover', function() {
            $(this).removeClass('defaultColor');
            $(this).removeClass('newColor1');
            $(this).removeClass('newColor2');
            $(this).removeClass('newColor3');
            $(this).removeClass('newColor4');
            $(this).addClass(useColor);
        }); 
};

var chooseColor = function (inputColor){
    if (inputColor == "1") {
			useColor = 'newColor1';
    } else if (inputColor == "2") {
			useColor = 'newColor2';
    } else if (inputColor == "3") {
			useColor = 'newColor3';
    } else if (inputColor == "4") {
			useColor = 'newColor4';
    } else {
            usecolor = 'newColor1';
    }
    return useColor;
};

$myMesh.on('click', function() {
    if (meshCount != 0) {
        alert('Sorry, the mesh density has already been set');
    } else {
    meshCount += 1;
    var newMeshSize = prompt('Enter density level 1 (coarsest) thru 5 (finest)');
    numDivEls(newMeshSize);
    generateGrid();
    }
}); 

$myColor.on('click', function() {
    var choice = prompt('Enter color: \n1 - Black \n2 - Purple  \n3 - Blue \n4 - Olive');
    chooseColor(choice);
});

$myEtch.on('click', function() {
    numClick += 1;
    stop = numClick % 2;
    console.log('Clicks so far: ' + numClick + ', Stop value is: ' + stop);
    if (stop == 1) {
        yesEtch();
    } else if (stop == 0) {
        noEtch();
    }
});