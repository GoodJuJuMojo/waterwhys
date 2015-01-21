//quiz



function renderQuiz(qNum) {
	console.log(quizSize);

	if (quizNumIdx <= 1) {
		quizPrev.style.visibility = "hidden";
	} else {
		quizPrev.style.visibility = "visible";
	}
	if (quizNumIdx >= quizSize) {
		quizNext.style.visibility = "hidden";
	} else {
		quizNext.style.visibility = "visible";
	}
	//todo same for last q.

	quizResult.style.visibility = "hidden";
	// quizCorrect.style.visibility = "hidden";
	// quizWrong.style.visibility = "hidden";

	document.getElementById('wq-question').innerHTML = quiz[qNum][0];
	document.getElementById('wq-ans-1').innerHTML = quiz[qNum][1];
	document.getElementById('wq-ans-2').innerHTML = quiz[qNum][2];
	document.getElementById('wq-ans-3').innerHTML = quiz[qNum][3];
	document.getElementById('wq-ans-4').innerHTML = quiz[qNum][4];

	// var qImgBck = "url('assets/imgs/qb" + qNum + ".jpg')";
	var qImgBck = "url('assets/imgs/q-" + (qNum) + "-bg.svg')";
	quizForm.style.backgroundSize = "cover";
	quizForm.style.backgroundImage = qImgBck;
	 
}

function getPrev(e) {

	quizNumIdx--;
	console.log(quizNumIdx);
	renderQuiz(quizNumArray[quizNumIdx]);
}

function getNext(e) {
	quizNumIdx++;
	// console.log(quizNumArray[quizNumIdx]);
	renderQuiz(quizNumArray[quizNumIdx]);
}


function ansSubmit(e) {
	quizResult.style.visibility = "hidden";
	// quizCorrect.style.visibility = "hidden";
	// quizWrong.style.visibility = "hidden";
	var answer = 0;
	var qForm = document.getElementById("wk-form");
	console.log(qForm);
	console.log(qForm.qopt);
	console.log(qForm.qopt[1].checked);
	console.log(qForm.qopt[0].value);
	
	for (var i = 0; i < qForm.qopt.length; i++) {
		if (qForm.qopt[i].checked) {
			answer = qForm.qopt[i].value;
		}
	}



  	var idx = quizNumArray[quizNumIdx];
  	console.log("idx=" + idx);
  	console.log(answer);
  	console.log(quizNumArray + ":" + quizNumIdx);
  	console.log(quiz[idx][5] + ">");

  	if (answer == quiz[idx][5]) {
  		console.log("correct");
  		// quizCorrect.style.visibility = "visible";
  		quizResult.innerHTML = "Well done!";
  		quizResult.className = "alert alert-success";
  		quizResult.style.visibility = "visible";
  	} else {
  		console.log("wrong");
  		quizResult.innerHTML = "Ooops!";
  		quizResult.className = "alert alert-danger";
  		quizResult.style.visibility = "visible";
  		// quizWrong.style.visibility = "visible";
  	}

  	return false;
}

function numArray (size) {
	var array = [];
	for (var i = 0; i < size; i++) {
		array[i] = i;
	}
	array = shuffle(array);
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
	console.log(array);
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

var quiz = [
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
		"What proportion of the Earth's surface is covered by water? ", 
		"25%", 
		"40%", 
		"55%",
		"70%",
		4
		],[
		"What proportion of the Earth's surface is covered by water? ", 
		"25%", 
		"40%", 
		"55%",
		"70%",
		4
		],[
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

var quizSize = quiz.length;
var quizForm;
var quizResult;
// var quizCorrect;
// var quizWrong;
var quizNumArray = numArray(quiz.length);
var quizNumIdx = 0;


function init () {

	quizResult = document.getElementById("wq-result");
	// quizCorrect = document.getElementById("wq-correct");	
	// quizWrong = document.getElementById("wq-wrong");
	quizResult.style.visibility = "hidden";
	// quizCorrect.style.visibility = "hidden";
	// quizWrong.style.visibility = "hidden";
	quizPrev = document.getElementById("wq-prev");
	quizNext = document.getElementById("wq-next");
	quizForm = document.getElementById("wk-quiz");
	quizPrev.addEventListener("click", function(){return getPrev()}, false);
	document.getElementById("wq-submit").addEventListener("click", function(){return ansSubmit()}, false);
	quizNext.addEventListener("click", function(){return getNext()}, false);
	// document.getElementById("wq-prev").addEventListener("click", function(){return getPrev()}, false);
	//document.getElementById("wq-submit").addEventListener("click", function(){return ansSubmit()}, false);
	// document.getElementById("wq-next").addEventListener("click", function(){return getNext()}, false);
	//renderQuiz(quizNumArray[quizNumIdx]);
	
	
	// document.getElementById("wc-shower-inc").addEventListener("click", function(){clickResponse(1, "wc-shower-val", avgShower)}, false);
	// document.getElementById("wc-shower-dec").addEventListener("click", function(){clickResponse(0, "wc-shower-val", avgShower)}, false);
	// document.getElementById("wc-bath-inc").addEventListener("click", function(){clickResponse(1, "wc-bath-val", avgBath)}, false);
	// document.getElementById("wc-bath-dec").addEventListener("click", function(){clickResponse(0, "wc-bath-val", avgBath)}, false);
	// document.getElementById("wc-flush-inc").addEventListener("click", function(){clickResponse(1, "wc-flush-val", avgFlush)}, false);
	// document.getElementById("wc-flush-dec").addEventListener("click", function(){clickResponse(0, "wc-flush-val", avgFlush)}, false);	
	//alert("init");
}


document.addEventListener("DOMContentLoaded",init,false);
