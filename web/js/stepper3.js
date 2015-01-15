
function clickResponse(step, item, litres) {
	
	var val = parseInt(document.getElementById(item).innerHTML);
	var res = parseInt(document.getElementById('wc-result-val').innerHTML);
    console.log(val);
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
console.log(val);
	document.getElementById(item).innerHTML = val;
	document.getElementById('wc-result-val').innerHTML = res;
}

function init () {
	var avgShower = 35;
	var avgBath = 80;
	var avgFlush = 9;
	var avgClothes = 25;
	var avgDish = 25;
	var avgOther = 90;
	document.getElementById("wc-shower-inc").addEventListener("click", function(){clickResponse(1, "wc-shower-val", avgShower)}, false);
	document.getElementById("wc-shower-dec").addEventListener("click", function(){clickResponse(0, "wc-shower-val", avgShower)}, false);
	document.getElementById("wc-bath-inc").addEventListener("click", function(){clickResponse(1, "wc-bath-val", avgBath)}, false);
	document.getElementById("wc-bath-dec").addEventListener("click", function(){clickResponse(0, "wc-bath-val", avgBath)}, false);
	document.getElementById("wc-flush-inc").addEventListener("click", function(){clickResponse(1, "wc-flush-val", avgFlush)}, false);
	document.getElementById("wc-flush-dec").addEventListener("click", function(){clickResponse(0, "wc-flush-val", avgFlush)}, false);	
}

document.addEventListener("DOMContentLoaded",init,false);
