var one = document.querySelector(".one");
var two = document.querySelector(".two ");
var three = document.querySelector(".three");
var four = document.querySelector(".four");
var five = document.querySelector(".five");
var six = document.querySelector(".six");
var seven = document.querySelector(".seven");
var eight = document.querySelector(".eight");
var nine = document.querySelector(".nine");
var zero = document.querySelector(".zero");

var clear = document.querySelector(".clear");
var del = document.querySelector(".del");
var decimal = document.querySelector(".decimal");
var divide = document.querySelector(".divide");
var multiply = document.querySelector(".multiply");
var plus = document.querySelector(".plus");
var minus = document.querySelector(".minus");
var equals = document.querySelector(".equals");
var output = document.querySelector(".output");
// var  = document.querySelector(".");

equals.addEventListener("click", function() {
	var answer = eval(output.textContent);
	output.textContent = answer;
});

clear.addEventListener("click", function() {
	output.textContent = "";
});

del.addEventListener("click", function() {
	var str = output.textContent;
	output.textContent = str.substring(0, str.length-1);
});

plus.addEventListener("click", function() {
	output.textContent += "+";
});

minus.addEventListener("click", function() {
	output.textContent += "-";
});

divide.addEventListener("click", function() {
	output.textContent += "/";
});

multiply.addEventListener("click", function() {
	output.textContent += "*";
});

decimal.addEventListener("click", function() {
	output.textContent += ".";
});

one.addEventListener("click", function() {
	output.textContent += 2;
});

two.addEventListener("click", function() {
	output.textContent += 2;
});

three.addEventListener("click", function() {
	output.textContent += 3;
});

four.addEventListener("click", function() {
	output.textContent += 4;
});

five.addEventListener("click", function() {
	output.textContent += 5;
});

six.addEventListener("click", function() {
	output.textContent += 6;
});

seven.addEventListener("click", function() {
	output.textContent += 7;
});

eight.addEventListener("click", function() {
	output.textContent += 8;
});

nine.addEventListener("click", function() {
	output.textContent += 9;
});

zero.addEventListener("click", function() {
	output.textContent += 0;
});