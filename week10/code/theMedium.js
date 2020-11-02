console.log("the Message!!");

let theYear = ["Jan", "Feb", "March","april"];

for (var i=0; i <theYear.length; i++){
 console.log(theYear[i]);
}
// add an item to the arry using push
theYear.push("may");
// console.log(theYear);
//
// pass the all the HTML in the body tags into a variable 
const theBody = document.querySelector('body');
// console.log(theBody);
// .style is the property that holds all the sub CSS properties!
console.log(theBody.style);
let theText = document.querySelector('h2');

// .textContent holds the human readable text inside the HTML element text
// console.log(theText.textContent)
// pass the HTML element into a variable
let theButton = document.querySelector("#theFirst");
// add an eventListener to the button and trigger a function when it happend
theButton.addEventListener('click', myFunction);

function myFunction(){
 // console.log("click!");
 theBody.style.backgroundColor= "yellow";
 theText.textContent = "you presssed the button!!!";
}

// ES6 Arrorow notation 
document.addEventListener('keydown', theEvent => {
 if (theEvent.keyCode === 32) {
  console.log("key 32!!");
 }
})

