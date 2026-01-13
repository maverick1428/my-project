const calculateTotal = require('./calculateTotal');

// Example usage of calculateTotal function

console.log('Example 1 - Basic sum:');
console.log(calculateTotal([1, 2, 3, 4, 5])); // Output: 15

console.log('\nExample 2 - Empty array:');
console.log(calculateTotal([])); // Output: 0

console.log('\nExample 3 - Decimal numbers:');
console.log(calculateTotal([1.5, 2.5, 3.0])); // Output: 7.0

console.log('\nExample 4 - Mixed positive and negative:');
console.log(calculateTotal([10, -5, 3, -2])); // Output: 6

console.log('\nExample 5 - Error handling (non-number):');
try {
  calculateTotal([1, 2, 'three']);
} catch (error) {
  console.log('Error:', error.message);
}

console.log('\nExample 6 - Error handling (non-array):');
try {
  calculateTotal('not an array');
} catch (error) {
  console.log('Error:', error.message);
}
