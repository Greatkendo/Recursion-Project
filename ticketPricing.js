// Prompt the user to enter their age
const age = parseInt(prompt("Enter your age:"));

// Determine the ticket price based on age
let ticketPrice;

if (age <= 12) {
  ticketPrice = 10; // Children
} else if (age >= 13 && age <= 17) {
  ticketPrice = 15; // Teenagers
} else {
  ticketPrice = 20; // Adults
}

// Display the ticket price
alert(`Your ticket price is $${ticketPrice}.`);
