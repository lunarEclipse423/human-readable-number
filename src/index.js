module.exports = function toReadable (number) {
  let numberOfDigits = number.toString().length;
  return numberOfDigits === 1 ? toUnit(number) : numberOfDigits === 2 ? toDecimal(number) : toHundred(number);
}

const toUnit = (unit) => {
    let res = '';
    switch(unit) {
        case 0:
            res += 'zero';
            break;
        case 1:
            res += 'one';
            break;
        case 2:
            res += 'two';
            break;
        case 3:
            res += 'three';
            break;
        case 4:
            res += 'four';
            break;
        case 5:
            res += 'five';
            break;
        case 6:
            res += 'six';
            break;
        case 7:
            res += 'seven';
            break;
        case 8:
            res += 'eight';
            break;
        case 9:
            res += 'nine';
            break;
      }
      return res;
}

const toDecimal = (decimal) => {
    let res = '';
    if (Math.floor(decimal / 10) === 1) {
        switch(decimal) {
            case 10:
                res += 'ten';
                break;
            case 11:
                res += 'eleven';
                break;
            case 12:
                res += 'twelve';
                break;
            case 13:
                res += 'thirteen';
                break;
            case 14:
                res += 'fourteen';
                break;
            case 15:
                res += 'fifteen';
                break;
            case 16:
                res += 'sixteen';
                break;
            case 17:
                res += 'seventeen';
                break;
            case 18:
                res += 'eighteen';
                break;
            case 19:
                res += 'nineteen';
                break;
          }
    } else {
        switch(Math.floor(decimal / 10)) {
            case 2:
                res += 'twenty';
                break;
            case 3:
                res += 'thirty';
                break;
            case 4:
                res += 'forty';
                break;
            case 5:
                res += 'fifty';
                break;
            case 6:
                res += 'sixty';
                break;
            case 7:
                res += 'seventy';
                break;
            case 8:
                res += 'eighty';
                break;
            case 9:
                res += 'ninety';
                break;
          }
          res += decimal % 10 === 0 ? '' : ' ' + toUnit(decimal % 10);
    }
    return res;
}

const toHundred = (hundred) => {
    let res = toUnit(Math.floor(hundred / 100)) + ' hundred';
    res += hundred % 100 !== 0 ? Math.floor(hundred / 10) % 10 === 0 ? 
        ' ' + toUnit(hundred % 10) : ' ' + toDecimal(hundred % 100) : '';
    return res;
}
