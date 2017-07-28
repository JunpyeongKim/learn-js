/**
 *
 * 4.4.1 arguments 객체
 *  - array-like object
 *  - 함수 호출할 때 인수들과 함께 암묵적으로 arguments 객체가 함수 내부로 전달된다
 *  - 함수로 넘겨지지 않은 인자에는 undefined 값이 할당된다
 *      - 함수를 호출할 때 함수 형식에 맞춰 인자를 넘기지 않더라도 에러가 발생하지 않는다
 *
 * 용도
 *  - 매개변수 개수가 정확하게 정해지지 않은 함수를 구현하거나
 *  - 전달된 인자의 개수에 따라 서로 다른 처리를 해줘야 하는 함수를 개발하는데 유용
 *
 */


//------------------------------------------
// Example 4-21
console.log('arguments: func(arg1, arg2)...');
function func(arg1, arg2) {
    //console.log('\t\t', arg1, arg2);
    console.log('\tfunc(', arg1, ',', arg2, ')');
}

func();         // undefined, undefined
func(1);        // 1, undefined
func(1, 2);     // 1 2
func(1, 2, 3);  // 1 2


//------------------------------------------
// Example 4-22
console.log('\narguments: array-like object...');
function add(a, b) {
    console.log('\nadd(', a, ',', b, ') has the arguments object as follows,');
    console.dir(arguments);
    return a + b;
}

console.log('add(1) returns...', add(1));        // NaN
console.log('add(1, 2) returns...', add(1, 2));     // 3
console.log('add(1, 2, 3) returns...', add(1, 2, 3));  // 3


//------------------------------------------
console.log('\narguments: sum()...');
function sum() {
    var result = 0;

    for (var i = 0; i< arguments.length; i ++) {
        result += arguments[i];
    }

    return result;
}

console.log('sum(1, 2, 3) :', sum(1, 2, 3));                                        // 6
console.log('sum(1, 2, 3, 4, 5, 6, 7, 8, 9) :', sum(1, 2, 3, 4, 5, 6, 7, 8, 9));    // 45
