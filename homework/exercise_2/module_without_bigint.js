'use strict';

module.exports = {
    sum,
    sub,
    mul,
    div,

};

function sum(a, b) {
    if (notANumber(a) || notANumber(b)) return NaN;
    let isNegative = false;

    if (a.startsWith('-') && b.startsWith('-')) {
        a = a.slice(1);
        b = b.slice(1);
        isNegative = true;
    } else if (a.startsWith('-')) {
        return sub(b, a.slice(1));
    } else if (b.startsWith('-')) {
        return sub(a, b.slice(1));
    }

    let firstOperand = a.split('').reverse();
    let secondOperand = b.split('').reverse();

    if (firstOperand.length < secondOperand.length) {
        [firstOperand, secondOperand] = [secondOperand, firstOperand];
    }

    let resultArr = [];
    let storedValue = 0

    for (let i = 0; i < firstOperand.length; i++) {
        let value = +firstOperand.at(i) + (+secondOperand.at(i) ? +secondOperand.at(i) : 0);
        let currentValue = value + storedValue;
        let pushValue = currentValue % 10;

        resultArr.push(pushValue);
        storedValue = (currentValue - pushValue) / 10;

    }
    resultArr.push(storedValue);
    let result = resultArr.reverse().join('').replace(/^0+(0?.+)/, '$1');
    return formatResult(isNegative, result)

}

function sub(a, b) {
    if (notANumber(a) || notANumber(b)) return NaN;
    if (a.startsWith('-') && b.startsWith('-')) {
        a = a.slice(1);
        b = b.slice(1);
        [a, b] = [b, a]
    } else if (a.startsWith('-')) {
        return sum(a, '-' + b);
    } else if (b.startsWith('-')) {
        return sum(a, b.slice(1));
    }

    let firstOperand = a.split('').reverse();
    let secondOperand = b.split('').reverse();
    let isNegative = false;

    if (firstOperand.length < secondOperand.length) {
        [firstOperand, secondOperand] = [secondOperand, firstOperand];
        isNegative = true;

    } else if (firstOperand.length === secondOperand.length) {
        for (let i = -1; i > -firstOperand.length; i--) {
            if (secondOperand.at(i) > firstOperand.at(i)) {
                [firstOperand, secondOperand] = [secondOperand, firstOperand];
                isNegative = true;
                break;

            } else if ( secondOperand.at(i) < firstOperand.at(i) ) {
                break;
            }
        }
    }

    let resultArr = [];
    let storedValue = 0

    for (let i = 0; i < firstOperand.length; i++) {
        let value = +firstOperand.at(i) + storedValue - (+secondOperand.at(i) ? +secondOperand.at(i) : 0);

        if (value < 0) {
            value = +firstOperand.at(i) + storedValue + 10 - (+secondOperand.at(i) ? +secondOperand.at(i) : 0);
            storedValue = -1
        } else {
            storedValue = 0
        }

        resultArr.push(value);
    }

    let result = resultArr.reverse().join('').replace(/^0+(0?.+)/, '$1');
    return formatResult(isNegative, result)
}

function mul(a, b) {
    if (notANumber(a) || notANumber(b)) return NaN;
    let isNegative = false;

    if (a.startsWith('-') && b.startsWith('-')) {
        a = a.slice(1);
        b = b.slice(1);
    } else if (a.startsWith('-')) {
        a = a.slice(1);
        isNegative = true;
    } else if (b.startsWith('-')) {
        b = b.slice(1);
        isNegative = true;
    }

    let firstOperand = a.split('').reverse();
    let secondOperand = b.split('').reverse();

    if (firstOperand.length < secondOperand.length) {
        [firstOperand, secondOperand] = [secondOperand, firstOperand];
    }

    let terms = [];
    
    for (let j = 0; j < secondOperand.length; j++) {
        let term = firstOperand.slice();
        term = term.map(item => +item * +secondOperand.at(j));

        let termArr = [];
        let storedValue = 0

        for (let i = 0; i < term.length; i++) {
            let value = +term.at(i) + storedValue
            termArr.push(value % 10)
            storedValue = (value - (value % 10)) / 10
        }
        termArr.push(storedValue)
        terms.push( termArr.reverse().join('') + ('0').repeat(j) )

    }
    let result = terms.reduce( (a, b) => sum(a, b), '0');
    return formatResult(isNegative, result)
}

function div(a, b) {
    if (notANumber(a) || notANumber(b)) return NaN;
    let isNegative = false;

    if (a.startsWith('-') && b.startsWith('-')) {
        a = a.slice(1);
        b = b.slice(1);
    } else if (a.startsWith('-')) {
        a = a.slice(1);
        isNegative = true;
    } else if (b.startsWith('-')) {
        b = b.slice(1);
        isNegative = true;
    }

    if (b === '0') return Infinity;

    let firstOperand = a;
    let secondOperand = b;

    let i = 0;
    let result = '0';
    while (true) {
        let resultLen = result.length;
        let firstOperandLen = firstOperand.length;
        if (resultLen === firstOperandLen) {
            for (let j = 0; j < resultLen; j++) {

                if (result.at(j) > firstOperand.at(j)) return (isNegative ? '-' : '') + (i - 1).toString();
                else if (result.at(j) === firstOperand.at(j)) continue
                else break
            }

        } else if (resultLen > firstOperandLen) {
            return (isNegative ? '-' : '') + (i - 1).toString()
        }

        i++
        result = mul(secondOperand, i.toString())

    }
}

function notANumber(n) {
    return isNaN(n) || n === null;
}

function formatResult(isNegative, result) {
    if (result === '0') return result
    return (isNegative ? '-' : '') + result
}