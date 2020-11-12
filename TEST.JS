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
