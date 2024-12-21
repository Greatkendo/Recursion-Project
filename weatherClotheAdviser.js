// Prompt the user for the current temperature
const temperature = parseInt(prompt("Enter the current temperature in degrees Celsius:"));

// Ask the user if it is raining
const isRaining = prompt("Is it raining? (yes or no)").toLowerCase();

// Determine clothing advice
let clothingAdvice;

if (temperature < 10) {
  clothingAdvice = "Wear a heavy coat, scarf, and gloves.";
} else if (temperature >= 10 && temperature <= 20) {
  clothingAdvice = "Wear a jacket or sweater.";
} else {
  clothingAdvice = "Wear light clothing.";
}

if (isRaining === "yes") {
  clothingAdvice += " Don't forget an umbrella or a raincoat.";
}

// Display the advice
alert(clothingAdvice);
