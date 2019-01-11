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

module.exports = {
  primeFactors
}
