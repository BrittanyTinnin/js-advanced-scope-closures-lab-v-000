function produceDrivingRange(blockRange) {
  return function(startingBlock, endingBlock) {
    let startBlockInt = parseInt(startingBlock)
    let endBlockInt = parseInt(endingBlock)
    let calRange = endBlockInt - startBlockInt
    if (calRange > blockRange) {
      return `${calRange - blockRange} blocks out of range`
    } else if (calRange < blockRange) {
      return `within range by ${blockRange - calRange}`
    }
  }
}

function produceTipCalculator(percent) {
  return function(amount) {
    return percent * amount
  }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
    }
  }
}
