
// * Author: YOUR NAME
// * Assignment: Minor Project – PROJECT NAME
// * Student ID:
// * Date : YYYY/MM/DD
// * Ref: website link to code referenced or the book, authors name and page number 


// Collapse menu when item clicked 
$(document).on('click.nav','.navbar-collapse.in',function(e) {
  if( $(e.target).is('a')|| $(e.target).is('button'))  {
    $(this).collapse('hide');
  }
});

function clickResponse(step, item, litres) {
	
	var val = parseInt(document.getElementById(item).innerHTML);
	var res = parseInt(document.getElementById('wc-result-val').innerHTML);
    //console.log(val);
    //console.log("test " + val +" ing");
	if (step) {
		val += 1;
		res += litres;
	} else {
		if (val > 0) {   //prevent going below zero
			val -= 1;
			res -= litres;
		}
	}
	//console.log(val);
	document.getElementById(item).innerHTML = val;
	document.getElementById('wc-result-val').innerHTML = res;
}

function init () {
	var avgShower = 35;
	var avgBath = 80;
	var avgFlush = 9;
	var avgClothes = 60;
	var avgDish = 20;
	var avgOther = 10;
	document.getElementById("wc-shower-inc").addEventListener("click", function(){clickResponse(1, "wc-shower-val", avgShower)}, false);
	document.getElementById("wc-shower-dec").addEventListener("click", function(){clickResponse(0, "wc-shower-val", avgShower)}, false);
	document.getElementById("wc-bath-inc").addEventListener("click", function(){clickResponse(1, "wc-bath-val", avgBath)}, false);
	document.getElementById("wc-bath-dec").addEventListener("click", function(){clickResponse(0, "wc-bath-val", avgBath)}, false);
	document.getElementById("wc-flush-inc").addEventListener("click", function(){clickResponse(1, "wc-flush-val", avgFlush)}, false);
	document.getElementById("wc-flush-dec").addEventListener("click", function(){clickResponse(0, "wc-flush-val", avgFlush)}, false);
	document.getElementById("wc-clothes-inc").addEventListener("click", function(){clickResponse(1, "wc-clothes-val", avgClothes)}, false);
	document.getElementById("wc-clothes-dec").addEventListener("click", function(){clickResponse(0, "wc-clothes-val", avgClothes)}, false);
	document.getElementById("wc-dish-inc").addEventListener("click", function(){clickResponse(1, "wc-dish-val", avgDish)}, false);
	document.getElementById("wc-dish-dec").addEventListener("click", function(){clickResponse(0, "wc-dish-val", avgDish)}, false);
	document.getElementById("wc-other-inc").addEventListener("click", function(){clickResponse(1, "wc-other-val", avgOther)}, false);
	document.getElementById("wc-other-dec").addEventListener("click", function(){clickResponse(0, "wc-other-val", avgOther)}, false);
}

document.addEventListener("DOMContentLoaded",init,false);