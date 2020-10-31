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