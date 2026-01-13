/**
 * Calculates the sum of all numbers in an array
 * @param {number[]} numbers - An array of numbers to sum
 * @returns {number} The sum of all numbers in the array
 * @throws {TypeError} If the input is not an array or contains non-numeric values
 */
function calculateTotal(numbers) {
  // Check if input is an array
  if (!Array.isArray(numbers)) {
    throw new TypeError('Input must be an array');
  }

  // Handle empty arrays
  if (numbers.length === 0) {
    return 0;
  }

  // Calculate sum with error handling for non-numbers
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const value = numbers[i];

    // Check if the value is a number
    if (typeof value !== 'number' || isNaN(value)) {
      throw new TypeError(`Invalid value at index ${i}: expected a number but got ${typeof value}`);
    }

    sum += value;
  }

  return sum;
}

module.exports = calculateTotal;
