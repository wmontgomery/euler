/*
The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.

Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?
*/

// loop through and at each number grab the following x amount and multiply those. There is no partitioning of it, it's checking across the board
const fs = require('fs')
const partition = (str, n) => {
  let pArr = []
  const len = str.length

  for (let i = 0; i < len; i++) {
    pArr.push(str.substring(i, i + n))
  }

  return pArr
}

const productOfArray = arr => arr.reduce((acc, cVal) => acc * cVal)

const splitTheNums = x => x.split('')

fs.readFile('num.txt', 'utf-8', (err, d) => {
  if (err) throw err

  const ret = partition(d.replace(/\s/g, ''), 13)
    .map(splitTheNums)
    .map(x => productOfArray(x))
    .filter(x => x)
    .sort((a, b) => b - a)[0]

  console.log(ret)
  return ret
})
