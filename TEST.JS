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

