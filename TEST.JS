"use strict";
function addNumbers (a, b){
    var addedTotal= a +b;
    return addedTotal ;
}
var myDemo = document.getElementById("parent");
console.log(myDemo.childNodes.length);

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
