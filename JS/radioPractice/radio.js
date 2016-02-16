    window.onload = function() {

      var ex1 = document.getElementById('exampleR');
      var ex2 = document.getElementById('exampleB');
      var ex3 = document.getElementById('exampleG');
      var clicker = document.getElementById('clicker');

      ex1.onclick = document.colorForm.colors[0].checked=true;
      ex2.onclick = document.colorForm.colors[1].checked=true;
      ex3.onclick = document.colorForm.colors[2].checked=true;

    }


function getRadioValue() {
var thingy;
  for (var i = 0; i < document.getElementsByName('colors').length; i++) {
        if (document.getElementsByName('colors')[i].checked) {
            thingy = document.getElementsByName('colors')[i].value;
        }
  }
  console.log("Thingy", thingy);
};

var changeColor = function() {
  var chosenColor = getRadioValue();
  console.log(chosenColor);
  var c = document.getElementById("color");

  if (chosenColor === "red"){
      c.className("red");
    }
    else if (chosenColor === "green") {
      c.setAttribute("class", "green");
    }
    else if (chosenColor === "purple"){
      c.setAttribute("class", "purple");
    }
  };

     clicker.onclick = changeColor();
