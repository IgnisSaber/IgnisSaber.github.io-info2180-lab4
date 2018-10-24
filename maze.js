
//Exercise 3

var loss = false;

function lossAlert(){
loss = true;
//alert(loss);
var x = document.querySelectorAll(".boundary");
var i;
for(i=0; i < x.length; i++){
	x[i].classList.add("youlose");
	}
//alert("You lost bro!");
};

//come baCK to this, Candice
function mouseOver() {
	document.getElementById("end").onmouseover = function(){touchEnd()};
	var y = document.querySelectorAll(".boundary");
	var j;
	for(j=0; j < y.length; j++){
		y[j].onmouseover = function(){lossAlert()};
		
	}
};



//new function



function touchEnd(){
	if (loss===true){
		alert("You lost... Nice try!");
	}
	else{
		alert("You win, mate!");
	}
};




window.onload = mouseOver;

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

