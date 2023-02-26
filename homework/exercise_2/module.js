'use strict';


module.exports = {
    sum,
    sub,
    mul,
    div,

};

function sum(a, b) {
    let firstOperand, secondOperand;
    try {
        [firstOperand, secondOperand] = castDataTypes(a, b);
    } catch {
        return NaN;
    }

    return  (firstOperand + secondOperand).toString();
}

function sub(a, b) {
    let firstOperand, secondOperand;
    try {
        [firstOperand, secondOperand] = castDataTypes(a, b);
    } catch {
        return NaN;
    }

    return  (firstOperand - secondOperand).toString();
}

function mul(a, b) {
    let firstOperand, secondOperand;
    try {
        [firstOperand, secondOperand] = castDataTypes(a, b);
    } catch {
        return NaN;
    }

    return  (firstOperand * secondOperand).toString();
}

function div(a, b) {
    let firstOperand, secondOperand;
    try {
        [firstOperand, secondOperand] = castDataTypes(a, b);
    } catch {
        return NaN;
    }

    return  (firstOperand / secondOperand).toString();
}

function isNumber(n) {
    const max = Number.MAX_SAFE_INTEGER;
    const min = Number.MIN_SAFE_INTEGER;
    return min <= n && n <= max;

}

function castDataTypes(a, b) {
    if (isNumber(a) && isNumber(b)) {
        return [+a, +b];
    } else {
        return [BigInt(a), BigInt(b)];
    }

}
