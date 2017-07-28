/**
 *
 * 4.1.3 Function Expression 방식으로 함수 생성하기
 *  - function-literal + function-name(optional --> 'Anonymous function')
 *  - var functionVariable = function optionalFunctionName(param1, param2, ..., paramN) {
 *          functionBody
 *    };
 *      - JavaScript's Function 은 'First Class' 이므로 하나의 값처럼 취급되어 변수에 할당 가능
 *
 * (*) ';' 사용: 강력 권고
 *
 */


//--------------------------------------------------------------------------------
// Example 4-2
//--------------------------------------------------------------------------------
var add01 = function (x, y) { // Anonymous function
    return x + y;
};

var plus = add01; // add01: reference --> 'function variable'

console.log('add01(3, 4) =', add01(3, 4));  // 7
console.log('plus(5, 6) =', plus(5, 6));    // 11


//--------------------------------------------------------------------------------
// Example 4-3
//--------------------------------------------------------------------------------
var add02 = function sum(x, y) {
    return x + y;
};

console.log('add02(3, 4): ', add02(3, 4));
//console.log('sum(3, 4): ', sum(3, 4));  // ReferenceError: sum is not defined
                                          // 함수 이름, sum, 은 외부 코드에서 접근 불가
                                          // --> 재귀적 호출이나 디버거에서 함수 구분용으로 사용


//--------------------------------------------------------------------------------
// Example 4-4
//--------------------------------------------------------------------------------
var factorialVar = function factorial(n) {
    if (n <= 1) {
        return 1;
    }

    return n * factorial(n-1);
};

console.log('factorialVar(3) =', factorialVar(3));
//console.log('factorial(3) =', factorial(3));  // ReferenceError: factorial is not defined