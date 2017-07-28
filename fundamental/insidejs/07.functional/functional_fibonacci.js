/**
 *
 * 7.2 JavaScript 에서의 Functional Programming
 *  - (*) 가능 이유
 *      - 1) First Class 로서의 function
 *      - 2) Closure
 *
 *  - 7.2.3 Fibonacci 수열
 *
 */


//------------------------------------------
// Example 7-4
//  - Functional + Memoization
console.log('Fibonacci: ...');
var fibo = (function () {
    var cache = { '0': 0, '1': 1 };

    var func = function (n) {
        if (n === 11) {
            console.log('cache = ', cache);
        }
        var result;

        if ((typeof cache[n]) === 'number') {
            result = cache[n];
        } else {
            result = cache[n] = func(n-1) + func(n-2);
        }

        return result;
    };

    return func;
})();

console.log(fibo(10));
console.log(fibo(11));

//------------------------------------------
// Example 7-5
//  - Fibonacci + Factorial
console.log('\nFibonacci: Fibonacci + Factorial...');
var cacher = function (cache, func) {
    var calculate = function (n) {
        var result;

        if (typeof cache[n] === 'number') {
            result  = cache[n];
        } else {
            result = cache[n] = func(calculate, n);
        }

        return result;
    };

    return calculate;
};

//------------------------------------------
// Example 7-6
var fact = cacher({'0': 1}, function (func, n) {
    return n * func(n-1);
});

var fibo = cacher({'0': 0, '1': 1}, function (func, n) {
    return func(n-1) + func(n-2);
});

console.log(fact(10));
console.log(fibo(10));