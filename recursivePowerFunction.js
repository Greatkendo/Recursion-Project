function power(base, exponent) {
  // Base case: Any number to the power of 0 is 1
  if (exponent === 0) {
    return 1;
  }

  // Recursive case: Multiply the base with the result of the smaller problem
  return base * power(base, exponent - 1);
}

// Example usage
console.log(power(2, 3)); // 8 (2^3)
console.log(power(5, 0)); // 1 (5^0)
console.log(power(3, 4)); // 81 (3^4)
