var text = document.getElementById("sonnet").innerHTML;
console.log( text);

console.log("Orphans begins at", text.indexOf("orphans"));

console.log("Total characters in the sonnet:", text.length);

var firstNewSonnet = text.replace("winter", "yuletide");
console.log(firstNewSonnet);
document.getElementById("sonnet").innerHTML = firstNewSonnet;

var secondNewSonnet = firstNewSonnet.replace(/\bthe\b/g, "a large");
document.getElementById("sonnet").innerHTML = secondNewSonnet;

