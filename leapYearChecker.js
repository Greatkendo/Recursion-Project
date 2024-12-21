// switch method
function isLeapYear(year) {
  switch (true) {
    case year % 400 === 0:
      return "Hurrry! This year is a leap year"; // Divisible by 400
    case year % 100 === 0:
      return "Oh! No, this is not a leap year"; // Divisible by 100 but not 400
    case year % 4 === 0:
      return "Hurrry! This year is a leap year"; // Divisible by 4 but not 100
    default:
      return "Oh! No this is not a leap year"; // Not divisible by 4
  }
}

// Example usage
console.log(isLeapYear(2024)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true


// if-else method
function isLeapYear(year) {
  if (year % 4 === 0) { // Check if divisible by 4
    if (year % 100 === 0) { // Check if divisible by 100
      if (year % 400 === 0) { // Check if divisible by 400
        return "Hurrry! This year is a leap year"; // Leap year
      } else {
        return "Oh! No this is not a leap year"; // Not a leap year
      }
    } else {
      return "Hurrry! This year is a leap year"; // Leap year
    }
  } else {
    return "Oh! No this is not a leap year"; // Not a leap year
  }
}

// Example usage
console.log(isLeapYear(2024)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2023)); // true

