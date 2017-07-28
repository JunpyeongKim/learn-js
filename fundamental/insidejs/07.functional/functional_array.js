/**
 *
 * 7.2 JavaScript 에서의 Functional Programming
 *  - (*) 가능 이유
 *      - 1) First Class 로서의 function
 *      - 2) Closure
 *
 *  - 7.2.1 배열의 각 원소 총합 구하기
 *
 */


//------------------------------------------
// Example 7-1
console.log('Function In JS: Encryption...');
var f1 = function (input) {
    var result;

    /* Encrypting... */
    console.log('f1(', input, ')');

    result = 1;
    return result;
};

var f2 = function (input) {
    var result;

    /* Encrypting... */
    console.log('f2(', input, ')');

    result = 2;
    return result;
};

var f3 = function (input) {
    var result;

    /* Encrypting... */
    console.log('f3(', input, ')');

    result = 3;
    return result;
};

// 함수가 First Class로 취급되어 함수의 인자로 함수를 전달하고, 결과로 함수를 반환
var get_encrypted = function (func) {
    // 변수 str 값이 영향을 받지 않게 하려고 Closure 사용
    var str = 'zzoon';

    return function () {
        return func.call(null, str);
    }
};


var encrypted_value = get_encrypted(f1)();
console.log('--> f1() :', encrypted_value);

var encrypted_value = get_encrypted(f2)();
console.log('--> f2() :', encrypted_value);

var encrypted_value = get_encrypted(f3)();
console.log('--> f3() :', encrypted_value);


// 7.2.1 배열의 각 원소 총합 구하기
//------------------------------------------
// Example 7-2-1
//  - Imperative Programming 방식의 해결, 즉 문제 하나하나를 각각의 함수를 구현하여 해결
console.log('\nFunction In JS: Array Summation...');
function sum(arr) {
    var len = arr.length;
    var i = 0, sum = 0;

    for (; i < len; i++) {
        sum += arr[i];
    }

    return sum;
}

var arr = [1, 2, 3, 4];
console.log(sum(arr));


//------------------------------------------
// Example 7-2-2
//  - Imperative Programming 방식의 해결, 즉 문제 하나하나를 각각의 함수를 구현하여 해결
console.log('\nFunction In JS: Array Multiply...');
function multiply(arr) {
    var len = arr.length;
    var i = 0, result = 1;

    for (; i < len; i++) {
        result *= arr[i];
    }

    return result;
}

var arr = [1, 2, 3, 4];
console.log(multiply(arr));


//------------------------------------------
// Example 7-2-3
//  -
function reduce(func, arr, memo) {
    var len = arr.length,
        i = 0,
        accum = memo;

    for (; i < len; i++) {
        accum = func(accum, arr[i]);
    }

    return accum;
}

//------------------------------------------
// Example 7-2-4
//  - 코드를 훨씬 간결하게 작성 가능하게 되었다.
console.log('\nFunction In JS: Array Functional...');
var arr = [1, 2, 3, 4];

var sum2 = function (x, y) {
    return x + y;
};

var multiply2 = function (x, y) {
    return x * y;
};

console.log('reduce(sum2, arr, 0) :', reduce(sum2, arr, 0));            // 10
console.log('reduce(multiply2, arr, 0) :', reduce(multiply2, arr, 1));  // 24
