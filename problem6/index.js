/*
The sum of the squares of the first ten natural numbers is,
12 + 22 + ... + 102 = 385

The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)2 = 552 = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */

const topNumber = 100
const { buildCountArray } = require('../helpers/buildCountArr.js')
const theArray = buildCountArray(topNumber)

const sumIt = arr => arr.reduce((acc, val) => acc + val, 0)

const squareItAll = arr => arr.map(x => Math.pow(x, 2))

console.log(Math.pow(sumIt(theArray), 2) - sumIt(squareItAll(theArray)))
