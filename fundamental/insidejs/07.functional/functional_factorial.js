/**
 *
 * 7.2 JavaScript 에서의 Functional Programming
 *  - (*) 가능 이유
 *      - 1) First Class 로서의 function
 *      - 2) Closure
 *
 *  - 7.2.2 Factorial
 *
 */


//------------------------------------------
// Example 7-3-1
//  - Imperative
console.log('\nFunctional Example: Factorial Simple...');
function fact(num) {
    var val = 1;

    for (var i = 2; i <= num; i++) {
        val = val * i;
    }

    return val;
}

console.log(fact(100));


//------------------------------------------
// Example 7-3-2
//  - Imperative
console.log('\nFunctional Example: Factorial Recursive...');
function fact2(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * fact2(num - 1);
    }
}

console.log(fact2(100));

//------------------------------------------
// Example 7-3-3
//  - Functional
//  - 가정 : 10!을 실행한 후 20!을 실행
//    --> 20!을 실행할때 10!을 중복 계산한다.
console.log('\nFunctional Example: Factorial Recursive...');
var fact3 = (function () {
    // Memoization Pattern
    //  - (*) memoize : 계산 결과를 저장해 놓아 이후 다시 계산할 필요 없이 사용할 수 있게 한다.
    var cache = { '0': 1 };

    var func = function (n) {
        var result = 0;

        if (n === 10) { // for debugging
            console.log('cache :', cache);
        }

        if (typeof cache[n] === 'number') {
            result = cache[n];
        } else {
            result = cache[n] = n * func(n-1);
        }

        return result;
    };

    return func;
})();

console.log(fact3(10));
console.log(fact3(20));


//------------------------------------------
// Example. Memoization Pattern 01
//  - memorize : "계산 결과를 저장해 놓아 이후 다시 계산할 필요가 없이 사용할 수 있게 한다"는 컴퓨터 용어
console.log('\nFunctional Example: Memoization 01...');
function Calculate(key, input, func) {
    Calculate.data = Calculate.data || {};  // like "Cache"

    if (!Calculate.data[key]) {
        var result;

        result = func(input);
        Calculate.data[key] = result;
    }

    return Calculate.data[key];
}

var result = Calculate(1, 5, function (input) {
    return input + input;
});

console.log(result);

result = Calculate(2, 5, function (input) {
    return input * input / 4;
});

console.log(result);

console.log(Calculate(1));
console.log(Calculate(2));

//------------------------------------------
// Example. Memoization Pattern 02
//  - jQuery : cache, cleanData(), ...
console.log('\nFunctional Example: Memoization 02...');
Function.prototype.memoization = function (key) {
    var arg = Array.prototype.slice.call(arguments, 1);
    console.log('memoization(): arg =', arg);
    this.data = this.data || {};

    return this.data[key] !== undefined ? this.data[key] : this.data[key] = this.apply(this, arg);
};

function myCalculate1(input) {
    return input * input;
}

function myCalculate2(input) {
    return input * input / 4;
}

var r1 = myCalculate1.memoization(1, 5);
var r2 = myCalculate1.memoization(2, 4);
var r3 = myCalculate2.memoization(1, 6);
var r4 = myCalculate2.memoization(2, 7);
console.log(r1, r2, r3, r4);

console.log(myCalculate1.memoization(1));
console.log(myCalculate1.data[1]);

console.log(myCalculate1.memoization(2));
console.log(myCalculate1.data[2]);

console.log(myCalculate2.memoization(1));
console.log(myCalculate2.data[1]);

console.log(myCalculate2.memoization(2));
console.log(myCalculate2.data[2]);