'use strict';

let {sub, sum, mul, div} = require("./module_without_bigint.js");


function checkSub() {
    let i = 0;
    let mistakeFlag = false;
    while (true) {
        let a = (Math.random() > 0.5 ? '-' : '') + Math.floor(Math.random() * 100_000_000_000).toString();
        let b = (Math.random() > 0.5 ? '-' : '') + Math.floor(Math.random() * 100_000_000_000).toString();

        let myOperation = sub(a.toString(), b.toString());
        let jsOperation = (+a - +b).toString();
        if (!(myOperation === jsOperation)) {
            console.log('a:', a, 'b:', b);
            console.log(myOperation, jsOperation);
            mistakeFlag = true;
        }

        i++;
        if (i === 100000) break;
    }
    mistakeFlag ? console.log('mistakes in sub') : console.log('sub is ok');
}

function checkSum() {
    let i = 0;
    let mistakeFlag = false;
    while (true) {
        let a = (Math.random() > 0.5 ? '-' : '') + Math.floor(Math.random() * 100_000_000_000).toString();
        let b = (Math.random() > 0.5 ? '-' : '') + Math.floor(Math.random() * 100_000_000_000).toString();

        let myOperation = sum(a.toString(), b.toString());
        let jsOperation = (+a + +b).toString();
        if (!(myOperation === jsOperation)) {
            console.log('a:', a, 'b:', b);
            console.log(myOperation, jsOperation);
            mistakeFlag = true;
        }

        i++;
        if (i === 100000) break;
    }
    mistakeFlag ? console.log('mistakes in sum') : console.log('sum is ok');
}

function checkMul() {
    let i = 0;
    let mistakeFlag = false;
    while (true) {
        let a = (Math.random() > 0.5 ? '-' : '') + Math.floor(Math.random() * 100_000_000_000).toString();
        let b = (Math.random() > 0.5 ? '-' : '') + Math.floor(Math.random() * 100_000_000_000).toString();

        let myOperation = mul(a.toString(), b.toString());
        let jsOperation = (+a * +b).toString();
        if (!(+myOperation === +jsOperation)) {
            console.log('a:', a, 'b:', b);
            console.log(myOperation, jsOperation);
            mistakeFlag = true;
        }

        i++;
        if (i === 100000) break;
    }

    mistakeFlag ? console.log('mistakes in mul') : console.log('mul is ok');
}

function checkDiv() {
    let i = 0;
    let mistakeFlag = false;
    while (true) {
        let a = (Math.random() > 0.5 ? '-' : '') + Math.floor(Math.random() * 100_000_000_000).toString();
        let b = (Math.random() > 0.5 ? '-' : '') + Math.floor(Math.random() * 100_000_000_000).toString();

        let myOperation = div(a.toString(), b.toString());
        let jsOperation = (BigInt(a) / BigInt(b)).toString();
        if (!(+myOperation === +jsOperation)) {
            console.log('a:', a, 'b:', b);
            console.log(myOperation, jsOperation);
            mistakeFlag = true;
        }

        i++;
        if (i === 100000) break;
    }

    mistakeFlag ? console.log('mistakes in div') : console.log('div is ok');
}

checkSum();
checkSub();
checkMul();
checkDiv();
