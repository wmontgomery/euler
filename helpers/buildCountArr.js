const buildCountArray = max => {
  let retArr = []
  for (let i = 1; i <= max; i++) {
    retArr.push(i)
  }

  return retArr
}

module.exports = {
  buildCountArray
}
