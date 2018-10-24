
//Exercise 6

function clickEvent(){
	loss = false;
	document.getElementById("status").textContent ="Another go!";
	var z = document.querySelectorAll(".boundary");
	var k;
	for(k=0; k < z.length; k++){
		z[k].classList.remove("youlose");
	}
}


var loss = false;

function lossAlert(){
loss = true;
document.getElementById("status").textContent ="You lose";
//alert(loss);
var x = document.querySelectorAll(".boundary");
var i;
for(i=0; i < x.length; i++){
	x[i].classList.add("youlose");
	}
};


//I think I made a pun
function mouseOver() {
	document.getElementById("start").onclick = function(){clickEvent()};
	document.getElementById("end").onmouseover = function(){touchEnd()};
	document.getElementById("maze").onmouseleave = function(){lossAlert()};
	var y = document.querySelectorAll(".boundary");
	var j;
	for(j=0; j < y.length; j++){
		y[j].onmouseover = function(){lossAlert()};
		
	}
};



function touchEnd(){
	if (loss===false){
		document.getElementById("status").textContent ="You win";;
	}
};



window.onload = mouseOver;

//function touchEnd(){
//	if (loss===true){
//		alert("You lost... Nice try!");
//	}
//	else{
//		alert("You win, mate!");
//	}
//};


//Exercise 2
//this function is fine
//function lossAlert(){
//var x = document.querySelectorAll(".boundary");
//var i;
//for(i=0; i < x.length; i++){
//	x[i].style.backgroundColor="#ff8888";
	
//	}
//};

//function mouseOver() {
//	var y = document.querySelectorAll(".boundary");
//	var j;
//	for(j=0; j < y.length; j++){
//		y[j].onmouseover = function(){lossAlert()};
//		
//		}
//};


//Exercise 1
/*
function lossAlert(){
	document.getElementById("boundary1").classList.add("youlose");
}

function mouseOver() {
	document.getElementById("boundary1").onmouseover = function(){lossAlert()}
};
*/

