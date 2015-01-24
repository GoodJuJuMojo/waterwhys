
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
// Calculator
function clickResponse(step, item, litres) {
	
	var val = parseInt(document.getElementById(item).innerHTML, 10);
	var res = parseInt(document.getElementById('wc-result-val').innerHTML, 10);
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


//quiz


// render quiz question and answer options
function renderQuiz(qNum) {
	if (quizNumIdx < 1) {
		quizPrev.style.visibility = "hidden";
	} else {
		quizPrev.style.visibility = "visible";
	}
	if (quizNumIdx == (quizSize - 1)) {
		quizNext.style.visibility = "hidden";
	} else {
		quizNext.style.visibility = "visible";
	}

	quizResult.style.visibility = "hidden";

	document.getElementById('wq-question').innerHTML = quiz[qNum][0];
	document.getElementById('wq-ans-1').innerHTML = quiz[qNum][1];
	document.getElementById('wq-ans-2').innerHTML = quiz[qNum][2];
	document.getElementById('wq-ans-3').innerHTML = quiz[qNum][3];
	document.getElementById('wq-ans-4').innerHTML = quiz[qNum][4];
	var qImgBck = "url('assets/imgs/q-" + (qNum) + "-bg.svg')";
	quizForm.style.backgroundSize = "cover";
	quizForm.style.backgroundImage = qImgBck;
}

// Rended previous question
function getPrev(e) {
	if (quizFlag === 0) {return;}
	quizNumIdx--;
	renderQuiz(quizNumArray[quizNumIdx]);
}

// Render next question
function getNext(e) {
	if (quizFlag === 0) {quizFlag = 1;}
	quizNumIdx++;
	renderQuiz(quizNumArray[quizNumIdx]);
}

// Check answer submitted
function ansSubmit(e) {
	quizResult.style.visibility = "hidden";
	var answer = 0;
	var qForm = document.getElementById("wk-form");
	// identify selected option
	for (var i = 0; i < qForm.qopt.length; i++) {
		if (qForm.qopt[i].checked) {
			answer = qForm.qopt[i].value;
		}
	}

	var idx = 0;
	if (quizFlag == 1) {
  		idx = quizNumArray[quizNumIdx];
	}

  	if (answer == quiz[idx][5]) {
   		quizResult.innerHTML = "Well done!";
  		quizResult.className = "alert alert-success";
  		quizResult.style.visibility = "visible";
  	} else {
  		quizResult.innerHTML = "Ooops!";
  		quizResult.className = "alert alert-danger";
  		quizResult.style.visibility = "visible";
  	}

  	return false;
}


// Create and array of question numbers (shuffled) 
function numArray (size) {
	var array = [];
	for (var i = 0; i < (size); i++) {
		array[i] = i + 1;
	}
	array = shuffle(array);
	return array;
}


// Shuffle a given array
function shuffle(array) {
	var currIdx = array.length, tempVal, rndIdx ;
	while (0 !== currIdx) {
	    rndIdx = Math.floor(Math.random() * currIdx);
    	currIdx -= 1;
		tempVal = array[currIdx];
		array[currIdx] = array[rndIdx];
		array[rndIdx] = tempVal;
	}
  	return array;
}

// Quiz variables
var quiz = [
[
		" ", 
		"", 
		"", 
		"",
		"",
		1
		],
		[
		"What proportion of the Earth's surface is covered by water? ", 
		"25%", 
		"40%", 
		"55%",
		"70%",
		4
		],[
		"The daily drinking water requirement per person is 2-4 litres. According to the UN, how many litres of water, on average, does it take to produce one person's daily food?", 
		"10-15 litres", 
		"100-150 litres", 
		"500-1,000 litres",
		"1,000-5,000 litres",
		4
		],[
		"How much of the world's fresh water is available to drink?", 
		"1-3%", 
		"7-10%", 
		"45-50%",
		"85-90%",
		1
		],[
		"In the average household, which of the following wastes the most water?", 
		"Long shower", 
		"Bath", 
		"Leaky pipe",
		"Running tap while washing hands",
		3
		],[
		"The average family (EU) uses how many litres of per day?", 
		"100 litres", 
		"625 litres", 
		"910 litres",
		"1,125 litres",
		3
		],[
		"Which of the following uses the least amount of water?", 
		"Standard 5 min. shower", 
		"Bath", 
		"",
		"",
		1
		],[
		"How many litres of water does it take to produce One Single pair of Jeans?", 
		"100 litres", 
		"1,500 litres", 
		"5,000 litres",
		"11,000 litres",
		4
		],
		[
		"The human brain consists of how much water?",
		"18%", 
		"38%", 
		"64%",
		"85%",
		4
		],
		[
		"How many days can a human being survive without water?", 
		"1-2", 
		"6-7", 
		"14-15",
		"25-26",
		2
		],
		[
		"Two-thirds of water is consumed in one zone in a standard household, which one?",
		"Bathroom", 
		"Kitchen", 
		"Garden",
		"Bedroom",+
		1
		]
	];

var quizFlag = 0;
var quizSize = (quiz.length - 1);
console.log("quizSize:" + quizSize);
var quizForm;
var quizResult;
var quizNumArray = numArray(quizSize);
console.log(quizNumArray);
var quizNumIdx = -1;

// initialize on content load
function init () {
	// calculator init
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
	
	// quiz init
	quizResult = document.getElementById("wq-result");
	quizResult.style.visibility = "hidden";
	quizPrev = document.getElementById("wq-prev");
	quizNext = document.getElementById("wq-next");
	quizForm = document.getElementById("wk-quiz");
	quizPrev.addEventListener("click", function(){return getPrev()}, false);
	document.getElementById("wq-submit").addEventListener("click", function(){return ansSubmit()}, false);
	quizNext.addEventListener("click", function(){return getNext()}, false);
}

document.addEventListener("DOMContentLoaded",init,false);