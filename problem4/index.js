/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

/*
  ceiling the length/2
  make sure the same spots === each other
  start with the largest numbers 2 numbers and check if their multiples are a palindrome
 */

const isPalindrome = (pal) => {
  const modifiedPalindrome = pal.toString().replace(/\W/g, '').toUpperCase()
  const strLen = modifiedPalindrome.length - 1

  for (let i = 0; i < Math.ceil(strLen / 2); i++) {
    if (modifiedPalindrome[i] !== modifiedPalindrome[strLen - i]) {
      return false
    }
  }
  return true
}

const products = () => {
  let max = 999
  const min = 100

  // take the max, subtract by the index, check that.
  while (max >= min) {
    for (let i = 1; i < max; i++) {
      const productToPalindrome = max * (max - i)

      // make sure this is never below the minimum to check, otherwise break out and get to the next bit
      if (max - i === min) {
        break
      }

      if (isPalindrome(productToPalindrome)) {
        return `${max} * ${max - i} = ${productToPalindrome}`
      }
    }

    // Well shucks. Didn't find anything yet
    max -= 1
  }

  return 'Sorry, there\'s nothing.'
}

console.log(products())
// Get these into a test file or something because this is awful
// const palindromes = [
//   'Anna',
//   'Civic',
//   'Kayak',
//   'Level',
//   'Madam',
//   'Mom',
//   'Noon',
//   'Racecar',
//   'Radar',
//   'Redder',
//   'Refer',
//   'Repaper',
//   'Rotator',
//   'Rotor',
//   'Sagas',
//   'Solos',
//   'Stats',
//   'Tenet',
//   'Wow'
// ]

// const multiPalindrome = [
//   'Don\'t nod.',
//   'I did, did I?',
//   'My gym',
//   'Red rum, sir, is murder',
//   'Step on no pets',
//   'Top spot',
//   'Was it a cat I saw?',
//   'Eva, can I see bees in a cave?',
//   'No lemon, no melon'
// ]

// palindromes.forEach(a => {
//   console.log(a, isPalindrome(a))
// })

// multiPalindrome.forEach(a => {
//   console.log(a, isPalindrome(a))
// })
