/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

const { primeFactors } = require('../helpers/primeFactors.js')

// loop odd numbers and keep a counter of how many are there 


const getNthPrime = (n) => {
  let counter = 1
  let numToCheck = 3

  while (counter < n) {
    if (primeFactors(numToCheck).length === 1) {
      counter++
    }  

    if (counter < n) {
      numToCheck += 2
    }
  }

  return numToCheck
}

console.log(getNthPrime(10001))
