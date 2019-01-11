/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

// Build the array of values counting down from the top number
// Build an array of values that don't divide into that number because they aren't needed
// Loop through those sons of guns to see if the number is divisible
// Smile
const topNumber = 20
const { buildCountArray } = require('../helpers/buildCountArr.js')

const removeFactors = (arr, max) =>
  arr.reduce((acc, v) => {
    if (max % v !== 0) {
      acc.push(v)
    }
    return acc
  }, [])

const getLowestThing = factor => {
  const arrToCheck = removeFactors(buildCountArray(factor))
  let holder = factor
  let retVal = 0

  while (!retVal) {
    if (!arrToCheck.every(curr => holder % curr === 0)) {
      holder += factor
    } else {
      retVal = holder
    }
  }

  return holder
}

console.log(getLowestThing(topNumber))
