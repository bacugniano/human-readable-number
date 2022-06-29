module.exports = function toReadable (number) {

  let arrayOne = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  let arrayTeen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let arrayTen = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let numStr = number.toString().split('');
  if (number >= 0 && number <= 10) {
    return arrayOne[number];
  }
  
  if (number > 10 && number < 20) {
    return arrayTeen[number - 10]; 
  }
  if (number >=20 && number < 100) {
    if (numStr[1] == 0) {
      return arrayTen[numStr[0]];
    }
    else return `${arrayTen[numStr[0]]} ${arrayOne[numStr[1]]}`
  }
  if (number >= 100 && number < 1000) {
    if (numStr[1] == 0 && numStr[2] == 0) {
      return `${arrayOne[numStr[0]]} hundred`
    }

    else if (numStr[1] > 1 && numStr[2] == 0) {
      return `${arrayOne[numStr[0]]} hundred ${arrayTeen[numStr[1]]}`
    }

    else if (numStr[1] == 1 && numStr[2] == 0) {
      return `${arrayOne[numStr[0]]} hundred ten`
    }

    else if (numStr[1] == 0 && numStr[2] > 0) {
      return `${arrayOne[numStr[0]]} hundred ${arrayOne[numStr[2]]}`
    }

    else if ((numStr[2] >= 0 && numStr[2] <= 9) && numStr[1] == 1) {
      return `${arrayOne[numStr[0]]} hundred ${arrayTeen[numStr[2]]}`
    }

    else return `${arrayOne[numStr[0]]} hundred ${arrayTen[numStr[1]]} ${arrayOne[numStr[2]]}`
  }
  
}
