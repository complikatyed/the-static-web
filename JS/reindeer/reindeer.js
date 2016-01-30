var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("coloredReindeer");

// This version is probably the most straightforward:

// for(i=0; i < reindeer.length; i++) {
//   hohohoElement.innerHTML += ("<p>" + colors[i] + " " + reindeer[i] + "</p>");
// }

// console.log(hohohoElement);

// This is what I was trying to do from the beginning:

var hohohoElement = [];
  for(i=0; i < reindeer.length; i++) {
hohohoElement.push(colors[i] + " " + reindeer[i]);
  }


document.getElementById("coloredReindeer").innerHTML = hohohoElement.join('<br>');



