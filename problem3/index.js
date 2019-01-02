/*

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

 */

const primeFactors = n => {
  let factors = []

  // get all the times 2 cuts into the number
  while (n % 2 === 0) {
    factors.push(2)
    n = n / 2
  }

  // the number has to be odd now since those are the only prime numbers left
  // Can start at 3, then go up every 2
  for (let i = 3; i < Math.ceil(Math.sqrt(n)) + 1; i += 2) {
    while (n % i === 0) {
      factors.push(i)
      n = n / i
    }
  }

  if (n > 2) {
    factors.push(n)
  }

  return factors
}

console.log(primeFactors(600851475143))
