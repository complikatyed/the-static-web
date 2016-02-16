
// °C to °F    Multiply by 9, then divide by 5, then add 32
// °F to °C    Deduct 32, then multiply by 5, then divide by 9



//-------------  CONVERTING FUNCTIONS  ---------------------//

function toCelsius(temp) {
  var scale = "&#8451;";
  newTemp = ((temp - 32) * 5) / 9;
  displayTemp(newTemp, scale);
  //console.log(newTemp);
};

function toFahrenheit(temp) {
  var scale = "&#8457;";
  newTemp = ((temp * 9) / 5) + 32;
  displayTemp(newTemp, scale);
  //console.log(newTemp);
};


var convertTemp = function() {
  var temp;
  temp = document.getElementById("temp").value;

  if (document.TempConv.Fahrenheit.checked === true) {
    toFahrenheit(temp);
  }
  else {
    toCelsius(temp);
  }
};

// -------------- CHECK TEMP FOR HOT OR COLD -------------------------//

var displayTemp = function(newTemp, scale){
  document.getElementById("convertedTemp").innerHTML = "Your converted temperature is " + newTemp.toFixed(2) + scale + ".";
  if (scale === "&#8451;") {
    if (newTemp >= 32) {
    document.getElementById("convertedTemp").setAttribute("class", "hot");
     console.log("It's hot!");
    }
    else if (newTemp <= 0) {
      document.getElementById("convertedTemp").setAttribute("class", "cold");
      console.log("That's cold!");
    }
    else {
      document.getElementById("convertedTemp").setAttribute("class", "temperate");
      console.log("Nice out, huh?");
    }
  }
  else {
      if (newTemp >= 90) {
       document.getElementById("convertedTemp").setAttribute("class","hot");
       console.log("It's hot!");
    }
    else if (newTemp <= 32) {
      document.getElementById("convertedTemp").setAttribute("class", "cold");
      console.log("That's cold!");
    }
    else {
      document.getElementById("convertedTemp").setAttribute("class", "temperate");
      console.log("Nice out, huh?");
     }
   }
}



//-------------  CLICK ON FAHRENHEIT RADIO BUTTON  ---------------------//

var fahrenheitIt = document.getElementById("Fahrenheit");

fahrenheitIt.addEventListener("click", function() {
  document.TempConv.Fahrenheit.checked = true;
});


//-------------  CLICK ON CONVERT BUTTON  ---------------------//

var convertButton = document.getElementById("convert");

convertButton.addEventListener("click", function() {
  event.preventDefault();
  convertTemp();
});








