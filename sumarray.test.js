const sumArray = require('./sumarray')

test('sumArray returns the correct sum for a non-empty array', () => {
  expect(sumArray([1, 2, 3, 4, 5])).toBe(15)
})

test('sumArray returns 0 for an empty array', () => {
  expect(sumArray([])).toBe(0)
})

test('sumArray returns the correct sum for an array with negative numbers', () => {
  expect(sumArray([1, -2, 3, -4, 5])).toBe(3)
})

test('sumArray returns the correct sum for an array with all negative numbers', () => {
  expect(sumArray([-1, -2, -3, -4, -5])).toBe(-15)
})

test('sumArray returns the correct sum for an array with a single element', () => {
  expect(sumArray([42])).toBe(42)
})
test('sumArray returns 0 for undefined array', () => {
  expect(sumArray(undefined)).toBe(0)
})

test('sumArray returns 0 for null array', () => {
  expect(sumArray(null)).toBe(0)
})

test('sumArray returns 0 for not array', () => {
  expect(sumArray('[]')).toBe(0)
})
