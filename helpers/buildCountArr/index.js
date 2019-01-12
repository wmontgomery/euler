const buildCountArray = (max, startNum = 1) => {
  let retArr = []
  for (let i = startNum; i <= max; i++) {
    retArr.push(i)
  }

  return retArr
}

module.exports = {
  buildCountArray
}
