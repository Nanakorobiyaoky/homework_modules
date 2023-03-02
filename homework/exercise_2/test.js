'use strict';

let {sub, sum, mul, div} = require("./module_without_bigint.js");


function checkSub() {
    let i = 0;

    while (true) {
        let a = (Math.random() > 0.5 ? '-' : '') + Math.floor(Math.random() * 100_000_000_000).toString();
        let b = (Math.random() > 0.5 ? '-' : '') + Math.floor(Math.random() * 100_000_000_000).toString();

        let myOperation = sub(a.toString(), b.toString());
        let jsOperation = (+a - +b).toString();
        if (!(myOperation === jsOperation)) {
            console.log('mistakes in sub')
            console.log('a:', a, 'b:', b);
            console.log(myOperation, jsOperation);
            break;
        }

        i++;
        if (i === 100_000) break;
    }

    console.log('sub is ok');
}

function checkSum() {
    let i = 0;

    while (true) {
        let a = (Math.random() > 0.5 ? '-' : '') + Math.floor(Math.random() * 100_000_000_000).toString();
        let b = (Math.random() > 0.5 ? '-' : '') + Math.floor(Math.random() * 100_000_000_000).toString();

        let myOperation = sum(a.toString(), b.toString());
        let jsOperation = (+a + +b).toString();
        if (!(myOperation === jsOperation)) {
            console.log('mistakes in sum')
            console.log('a:', a, 'b:', b);
            console.log(myOperation, jsOperation);
            break;
        }

        i++;
        if (i === 10_000) break;
    }

    console.log('sum is ok');
}

function checkMul() {
    let i = 0;

    while (true) {
        let a = (Math.random() > 0.5 ? '-' : '') + Math.floor(Math.random() * 100_000_000_000).toString();
        let b = (Math.random() > 0.5 ? '-' : '') + Math.floor(Math.random() * 100_000_000_000).toString();

        let myOperation = mul(a.toString(), b.toString());
        let jsOperation = (+a * +b).toString();
        if (!(+myOperation === +jsOperation)) {
            console.log('mistakes in mul')
            console.log('a:', a, 'b:', b);
            console.log(myOperation, jsOperation);
            break;
        }

        i++;
        if (i === 10_000) break;
    }

    console.log('mul is ok');
}

function checkDiv() {
    let i = 0;

    while (true) {
        let a = (Math.random() > 0.5 ? '-' : '') + Math.floor(Math.random() * 100_000_000_000).toString();
        let b = (Math.random() > 0.5 ? '-' : '') + Math.floor(Math.random() * 100_000_000_000).toString();

        let myOperation = div(a.toString(), b.toString());
        let jsOperation;
        try {
            jsOperation = (BigInt(a) / BigInt(b)).toString()
        } catch {
            jsOperation = Infinity
        }
        if (!(myOperation === jsOperation)) {
            console.log('mistakes in div')
            console.log('a:', a, 'b:', b);
            console.log(myOperation, jsOperation);
            break;
        }

        i++;
        if (i === 10_000) break;
    }

    console.log('div is ok');
}

checkSum();
checkSub();
checkMul();
checkDiv();




