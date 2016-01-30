var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];




// Loop through the reindeer and add the name of the reindeer to the div.
// Prepend the name of the reindeer with the corresponding color from the other array.

var hohohoElement = [];
for(i=0; i < reindeer.length; i++) {
  hohohoElement.push("<p>" + colors[i] + " " + reindeer[i] + "</p>");
}
console.log(hohohoElement);

document.getElementById("coloredReindeer").innerHTML = hohohoElement;


