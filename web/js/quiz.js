//quiz

var quiz = [
		[
		"what is can fly", 
		"dog", 
		"cat", 
		"bird",
		"cow",
		4
		],[
		"what is can swim",
		"fish", 
		"tree", 
		"rock",
		"apple",
		1
		]
	];
// console.log("here");
// console.log (quiz[0][0] + " a " + quiz[0][4]);


var quizForm;
var quizCorrect;
var quizWrong;

function renderQuiz(qNum) {

	document.getElementById('wq-question').innerHTML = quiz[qNum][0];
	document.getElementById('wq-ans-1').innerHTML = quiz[qNum][1];
	document.getElementById('wq-ans-2').innerHTML = quiz[qNum][2];
	document.getElementById('wq-ans-3').innerHTML = quiz[qNum][3];
	document.getElementById('wq-ans-4').innerHTML = quiz[qNum][4];

	var qImgBck = "url('assets/imgs/qb" + qNum + ".jpg')";

	quizForm.style.backgroundImage = qImgBck;
	 
}

function quizSubmit() {
	var answer = 0;
	if (document.getElementById('optionsRadios1').checked) {
  		answer = 1;
	}

  	if (document.getElementById('optionsRadios2').checked) {
  		answer = 2;
  	}

  	if (document.getElementById('optionsRadios3').checked) {
  		answer = 3;
  	}
  	
  	if (document.getElementById('optionsRadios4').checked) {
  		answer = 4;
  	}


  	// console.log(answer);
  	// console.log(quiz[0][5]);
  	if (answer === quiz[0][5]) {
  		console.log("correct");
  	} else {
  		console.log("wrong");
  	}
}

	

function clickResponse(step, item, litres) {
	
	// var val = parseInt(document.getElementById(item).innerHTML);
	// var res = parseInt(document.getElementById('wc-result-val').innerHTML);
 //    console.log(val);
 //    //console.log("test " + val +" ing");
	// if (step) {
	// 	val += 1;
	// 	res += litres;
	// } else {
	// 	if (val > 0) {   //prevent going below zero
	// 		val -= 1;
	// 		res -= litres;
	// 	}
	}

function init () {
	quizForm = document.getElementById("wk-quiz");
	quizCorrect = document.getElementById("wq-correct");
	quizCorrect.style.visibility = "hidden";
	quizWrong = document.getElementById("wq-wrong");
	quizWrong.style.visibility = "hidden";
	document.getElementById("wq-submit").addEventListener("click", function(){quizSubmit()}, false);
	document.getElementById("wq-next").addEventListener("click", function(){quizNext()}, false);
	renderQuiz(1);
	
	
	// document.getElementById("wc-shower-inc").addEventListener("click", function(){clickResponse(1, "wc-shower-val", avgShower)}, false);
	// document.getElementById("wc-shower-dec").addEventListener("click", function(){clickResponse(0, "wc-shower-val", avgShower)}, false);
	// document.getElementById("wc-bath-inc").addEventListener("click", function(){clickResponse(1, "wc-bath-val", avgBath)}, false);
	// document.getElementById("wc-bath-dec").addEventListener("click", function(){clickResponse(0, "wc-bath-val", avgBath)}, false);
	// document.getElementById("wc-flush-inc").addEventListener("click", function(){clickResponse(1, "wc-flush-val", avgFlush)}, false);
	// document.getElementById("wc-flush-dec").addEventListener("click", function(){clickResponse(0, "wc-flush-val", avgFlush)}, false);	
}


document.addEventListener("DOMContentLoaded",init,false);
