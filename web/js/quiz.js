//quiz

var quiz = [
		[
		"what is can fly", 
		"dog", 
		"cat", 
		"bird",
		"cow",
		3
		],
		[
		"what is can swim",
		"fish", 
		"tree", 
		"rock",
		"apple",
		1
		],
		[
		"what is can't run", 
		"dog", 
		"cat", 
		"tree",
		"cow",
		3
		],
		[
		"what is can talk",
		"fish", 
		"tree", 
		"rock",
		"parrot",+
		4
		]
	];

//console.log("here");
//console.log (quiz.length);


var quizForm;
var quizCorrect;
var quizWrong;

function renderQuiz(qNum) {
	quizCorrect.style.visibility = "hidden";
	quizWrong.style.visibility = "hidden";

	document.getElementById('wq-question').innerHTML = quiz[qNum][0];
	document.getElementById('wq-ans-1').innerHTML = quiz[qNum][1];
	document.getElementById('wq-ans-2').innerHTML = quiz[qNum][2];
	document.getElementById('wq-ans-3').innerHTML = quiz[qNum][3];
	document.getElementById('wq-ans-4').innerHTML = quiz[qNum][4];

	// var qImgBck = "url('assets/imgs/qb" + qNum + ".jpg')";

	// quizForm.style.backgroundImage = qImgBck;
	 
}

function quizPrev(e) {
	quizNumIdx--;
	console.log(quizNumIdx);
	renderQuiz(quizNumArray[quizNumIdx]);
}

function quizNext(e) {
	quizNumIdx++;
	console.log(quizNumArray[quizNumIdx]);
	renderQuiz(quizNumArray[quizNumIdx]);
}


function quizSubmit(e) {
	quizCorrect.style.visibility = "hidden";
	quizWrong.style.visibility = "hidden";
	var answer = 0;
	var qForm = document.getElementById("wk-quiz");
	console.log(qForm);
	console.log(qForm.optionsRadios[0].checked);
	console.log(qForm.optionsRadios[0].value);
	
	for (var i = 0; i < qForm.optionsRadios.length; i++) {
		if (qForm.optionsRadios[i].checked) {
			answer = qForm.optionsRadios[i].value;
		}
	}

	// if (document.getElementById('optionsRadios1').checked) {
 //  		answer = 1;
	// }

 //  	if (document.getElementById('optionsRadios2').checked) {
 //  		answer = 2;
 //  	}

 //  	if (document.getElementById('optionsRadios3').checked) {
 //  		answer = 3;
 //  	}
  	
 //  	if (document.getElementById('optionsRadios4').checked) {
 //  		answer = 4;
 //  	}

  	var idx = quizNumArray[quizNumIdx];
  	console.log("idx=" + idx);
  	console.log(answer);
  	console.log(quizNumArray + ":" + quizNumIdx);
  	console.log(quiz[idx][5] + ">");

  	if (answer == quiz[idx][5]) {
  		console.log("correct");
  		quizCorrect.style.visibility = "visible";
  	} else {
  		console.log("wrong");
  		quizWrong.style.visibility = "visible";
  	}

  	return false;
}

function numArray (size) {
	var array = [];
	for (var i = 0; i < size; i++) {
		array[i] = i;
	}
	array = shuffle(array);
	// console.log(array);
	return array;

}

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




// var quizNumArray = [];
var quizNumArray = numArray(quiz.length);
//console.log(quizNumArray);
var quizNumIdx = 0;


function init () {

	
	// quizForm = document.getElementById("wk-quiz");
	quizCorrect = document.getElementById("wq-correct");	
	quizWrong = document.getElementById("wq-wrong");
	quizCorrect.style.visibility = "hidden";
	quizWrong.style.visibility = "hidden";
	document.getElementById("wq-prev").addEventListener("click", function(){return quizPrev()}, false);
	document.getElementById("wq-submit").addEventListener("click", function(){return quizSubmit()}, false);
	document.getElementById("wq-next").addEventListener("click", function(){return quizNext()}, false);
	//renderQuiz(quizNumArray[quizNumIdx]);
	
	
	// document.getElementById("wc-shower-inc").addEventListener("click", function(){clickResponse(1, "wc-shower-val", avgShower)}, false);
	// document.getElementById("wc-shower-dec").addEventListener("click", function(){clickResponse(0, "wc-shower-val", avgShower)}, false);
	// document.getElementById("wc-bath-inc").addEventListener("click", function(){clickResponse(1, "wc-bath-val", avgBath)}, false);
	// document.getElementById("wc-bath-dec").addEventListener("click", function(){clickResponse(0, "wc-bath-val", avgBath)}, false);
	// document.getElementById("wc-flush-inc").addEventListener("click", function(){clickResponse(1, "wc-flush-val", avgFlush)}, false);
	// document.getElementById("wc-flush-dec").addEventListener("click", function(){clickResponse(0, "wc-flush-val", avgFlush)}, false);	
	alert("init");
}


document.addEventListener("DOMContentLoaded",init,false);
