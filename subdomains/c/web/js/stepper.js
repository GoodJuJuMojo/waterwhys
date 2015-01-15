
function clickResponse(step, item, litres) {
	//console.log(step + " " + item);
	var val = parseInt(document.getElementById(item).innerHTML);
	var res = parseInt(document.getElementById('wc-result-val').innerHTML);
    //console.log(val);
	if (step) {
		val += 1;
		res += litres;
	} else {
		if (val > 0) {   //prevent going below zero
			val -= 1;
			res -= litres;
		}
	}

	document.getElementById(item).innerHTML = val;
	document.getElementById('wc-result-val').innerHTML = res;
}

function init () {
	document.getElementById("wc-shower-inc").addEventListener("click", function(){clickResponse(1, "wc-shower-val", 35)}, false);
	document.getElementById("wc-shower-dec").addEventListener("click", function(){clickResponse(0, "wc-shower-val", 35)}, false);
	document.getElementById("wc-bath-inc").addEventListener("click", function(){clickResponse(1, "wc-bath-val", 80)}, false);
	document.getElementById("wc-bath-dec").addEventListener("click", function(){clickResponse(0, "wc-bath-val", 80)}, false);
	document.getElementById("wc-flush-inc").addEventListener("click", function(){clickResponse(1, "wc-flush-val", 9)}, false);
	document.getElementById("wc-flush-dec").addEventListener("click", function(){clickResponse(0, "wc-flush-val", 9)}, false);	
}

document.addEventListener("DOMContentLoaded",init,false);
