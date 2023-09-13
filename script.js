const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// text change
// function text_change() {
//     document.getElementById('h2').innerHTML="My name is Tanmay Maitra Tanu";
// }

// function ShowDate() {
//     document.getElementById('d_h2').innerHTML=Date();
// }

// document.getElementById("demo").innerHTML = 5 + 6;

// document.write(6 + 6);

// window.alert(8 + 6);

// console.log(9 + 6);

// var x, y;
// x = 5 + 6;
// y = x * 10;
// document.getElementById("demo1").innerHTML = y;

// let a_t = 5;
// let b_t = 6;
// let c_t = a_t + b_t;
// document.getElementById("demo2").innerHTML =
// "The value of z is: " + c_t;

// text-change

function textChange() {

	document.getElementById('h2').innerHTML="Hello World";
}

// Show date 
function showDate(){

	document.getElementById('d_h2').innerHTML = Date();
}

// Bulb On/off
function bulbOn(){
	document.getElementById('img').src = "images/pic_bulbon.gif";
}
function bulbOff(){
	document.getElementById('img').src = "images/pic_bulboff.gif";
}

//Font change
function fontSize(){
	document.getElementById('f_h2').style.fontSize = "45px";
}

//show/hide
function show(){
	document.getElementById('c_h2').style.display = "block";
}
function hide(){
	document.getElementById('c_h2').style.display = "none";
}
//dWrite
function dWrite(){
	document.write('Hello World');
}
//walart
function wAlert(){
	window.alert('Hello World');
}
//cLog
function cLog(){
	console.log('Hello World');
}
//variable

let number1,number2;

     number1 = 10;
     number2 = 20;

    number1 += number2;

function vOutput(){
	document.getElementById('vh2').innerHTML=number1;

}
//gvariable

let g1,g2;

   g1 = 25;
   g2 = 15;

    g1 *= g2;

function gOutput(){
	document.getElementById('gh2').innerHTML=g1;

}
//variable

let m1,m2;

    m1 = 75;
    m2 = 33;

    m1 -= m2;

function mOutput(){
	document.getElementById('mh2').innerHTML=m1;

}
//variable

let d1,d2;

    d1 = 375;
    d2 = 42;

    d1 /= d2;

function dOutput(){
	document.getElementById('dh2').innerHTML=d1;

}
//variable

let p1,p2;

    p1 = 1000;
    p2 = 32;

    p1 %= p2;

function pOutput(){
	document.getElementById('ph2').innerHTML=p1;

}
//variable

var a1,x2;

	a = 3;
    x = (100 + 50) * a;

function axOutput(){
	document.getElementById('axh2').innerHTML=x;

}

//color change
function cColor(){
	document.getElementById('fc_h2').style.color = "blue";
}
// max value

let y = Number.MAX_VALUE;

function maxValue(){
	document.getElementById('mx_h2').innerHTML = y;
}
// number methods
var m = 9.656;

function numberMethods(){
	document.getElementById('nm_h2').innerHTML = 
	m.toExponential() + "<br>" + 
    m.toExponential(2) + "<br>" + 
    m.toExponential(4) + "<br>" + 
    m.toExponential(6);
}
//car model

const cars = ["Saab", "Volvo", "BMW"];

function carModel(){
	document.getElementById('cm_h2').innerHTML =cars[2];
}
//fruits

const fruits = ["Banana", "Orange", "Apple", "Mango"];;

function fFruits(){
	document.getElementById('fru_h2').innerHTML = fruits [3];
}