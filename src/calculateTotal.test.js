const calculateTotal = require('./calculateTotal');

describe('calculateTotal', () => {
  // Test basic sum functionality
  test('should calculate sum of positive numbers', () => {
    expect(calculateTotal([1, 2, 3, 4, 5])).toBe(15);
  });

  test('should calculate sum of negative numbers', () => {
    expect(calculateTotal([-1, -2, -3])).toBe(-6);
  });

  test('should calculate sum of mixed positive and negative numbers', () => {
    expect(calculateTotal([10, -5, 3, -2])).toBe(6);
  });

  test('should handle decimal numbers', () => {
    expect(calculateTotal([1.5, 2.5, 3.0])).toBe(7.0);
  });

  test('should handle single number', () => {
    expect(calculateTotal([42])).toBe(42);
  });

  // Test empty array handling
  test('should return 0 for empty array', () => {
    expect(calculateTotal([])).toBe(0);
  });

  // Test error handling for non-numbers
  test('should throw TypeError for string in array', () => {
    expect(() => calculateTotal([1, 2, 'three'])).toThrow(TypeError);
    expect(() => calculateTotal([1, 2, 'three'])).toThrow('Invalid value at index 2');
  });

  test('should throw TypeError for null in array', () => {
    expect(() => calculateTotal([1, null, 3])).toThrow(TypeError);
  });

  test('should throw TypeError for undefined in array', () => {
    expect(() => calculateTotal([1, undefined, 3])).toThrow(TypeError);
  });

  test('should throw TypeError for object in array', () => {
    expect(() => calculateTotal([1, {}, 3])).toThrow(TypeError);
  });

  test('should throw TypeError for NaN in array', () => {
    expect(() => calculateTotal([1, NaN, 3])).toThrow(TypeError);
  });

  // Test error handling for non-array input
  test('should throw TypeError for non-array input (string)', () => {
    expect(() => calculateTotal('not an array')).toThrow(TypeError);
    expect(() => calculateTotal('not an array')).toThrow('Input must be an array');
  });

  test('should throw TypeError for non-array input (number)', () => {
    expect(() => calculateTotal(123)).toThrow(TypeError);
  });

  test('should throw TypeError for non-array input (null)', () => {
    expect(() => calculateTotal(null)).toThrow(TypeError);
  });

  test('should throw TypeError for non-array input (undefined)', () => {
    expect(() => calculateTotal(undefined)).toThrow(TypeError);
  });
});
