/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

const isMultipleOf = (myNumber) => 
  myNumber % 3 === 0 || myNumber % 5 === 0 ? myNumber : 0

const getTheSum = (theIndex) => {
  let theSum = 0

  for( let i = 0; i < theIndex; i++ ) {
    theSum += isMultipleOf(i)
  }

  return theSum
}

console.log( getTheSum(process.argv[2]))