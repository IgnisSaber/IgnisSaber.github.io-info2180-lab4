
//document.getElementById("boudary1").onload = function() {mouseOver()};




function lossAlert(){
	document.getElementById("boundary1").classList.add("youlose");
}

function mouseOver() {
	document.getElementById("boundary1").onmouseover = function(){lossAlert()}
};

window.onload = mouseOver;