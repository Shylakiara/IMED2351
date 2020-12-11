"use strict";
function addNumbers (a, b){
    var addedTotal= a +b;
    return addedTotal ;
}
var myDemo = document.getElementById("parent");
console.log(myDemo.childNodes.length);

var myDemoTags = document.getElementsByTagName("li");
console.log("Mumber of li links:"+ myDemoTags.length);

var linksInMenu = myDemo.getElementsByTagName("li");
console.log ("Number of Li items in Menu:"+ linksInMenu.length);

var myComments = document.getElementById("commentary");
myComments.setAttribute("align","right");
myComments.setAttribute("style","color:pink");

var newItem = document.createElement("li");
var newText = document.createTextNode("Every day is a great!!!");
myDemo.appendChild(newItem);
newItem.appendChild(newText);


var addNumbers2=  addNumbers(7, 9);
alert (addNumbers2) ;

var studentName= prompt ("Who is your name?");

switch(studentName) {
   case "Tashyla":
   alert("Hello!");
   break;

   case "Nobles":
   alert ("Nice to Meet You");
   break;

   default:
       alert ("This is not the right student");

}
var a = 6;
var b = 9;
var theNumbersMatch;

if (a = b) {
    theNumbersMatch = true;

} else {
    theNumbersMatch = false;
}

console.log("Thhe numbers match " + theNumbersMatch);
const IMAGES = document.querySelectorAll("img");
const SIZES = {
    showcase: "100vw",
    right: "(max-width: 799px) 100vw, 372px",
    backwards: "(max-width: 799px) 100vw, 558px",
};

function makeSrcset(imgSrc) {
    let markup = [ ];
    let width = 400;

    for (let i = 0; i<5; i++){
markup[i] = imgSrc = "-" + width + ".jpg" + width + "w";
width+400;
}

return markup.join();
}
for (let i = 0; i<IMAGES.length; i++) {
    let imgSrc = IMAGES[i].getAttribute("src");
    imgSrc =imgSrc.slice(0,-8);
    let srcset = makeSrcset(imgSrc);
    console.log(srcset);

    let type = IMAGES[i].getAttribute("data-type");
    let sizes = SIZES[type];
    IMAGES[i].setAttribute("sizes", sizes);
}

const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

let hrPosition = (hr*360/12)+(min*(360/60)/12);
let minPosition = (min*360/60)+(sec*(360/60)/60);
let secPosition = sec*360/60;

function runTheClock() {

    hrPosition = hrPosition+(3/360);
    minPosition = minPosition+(6/60);
    secPosition = secPosition+6;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}

var interval = setInterval(runTheClock, 1000);

const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer = [0,0,0,0];
var interval;
var timerRunning = false;

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

// Match the text entered with the provided text on the page:
function spellCheck() {
    let textEntered = testArea.value;
    let originTextMatch = originText.substring(0,textEntered.length);

    if (textEntered == originText) {
        clearInterval(interval);
        testWrapper.style.borderColor = "#429890";
    } else {
        if (textEntered == originTextMatch) {
            testWrapper.style.borderColor = "#65CCf3";
        } else {
            testWrapper.style.borderColor = "#E95D0F";
        }
    }

}

// Start the timer:
function start() {
    let textEnterdLength = testArea.value.length;
    if (textEnterdLength === 0 && !timerRunning) {
        timerRunning = true;
        interval = setInterval(runTimer, 10);
    }
    console.log(textEnterdLength);
}

// Reset everything:
function reset() {
    clearInterval(interval);
    interval = null;
    timer = [0,0,0,0];
    timerRunning = false;

    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.borderColor = "grey";
}

// Event listeners for keyboard input and the reset
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);