/**
 *
 * 4.2 함수 객체: 함수도 객체다
 *
 */


//--------------------------------------------------------------------------------
// Example 4-8. Function is an Object
//--------------------------------------------------------------------------------

// 함수 코드: 함수 객체의 [[Code]]에 자동으로 저장 (ECMAScript Spec.)
//  - e.g. In Chrome, [[FunctionLocation]]
function add01(x, y) {
    return x + y;
}

// Property 를 가질수 있다.
add01.result = add01(3, 2);
add01.status = 'OK';

console.dir(add01);   // { [Function: add01] result: 5, status: 'OK' }
// ==> Function is a 'First Class' Object ==> Functional Programming 이 가능
/* 'First Class' Object 특성
 (1) Literal 에 의해서 생성 가능
 (2) Variable, Array, Object 에 Assign 가능
 (3) 함수의 argument 로 전달 가능
 (4) 함수의 return value 로 사용
 (5) 동적으로 property 를 생성 & 할당 가능
 */


//--------------------------------------------------------------------------------
// Example 4-9. Literal 로 생성 && Variable, Array, Object 에 Assign
//--------------------------------------------------------------------------------
var foo = 100;
var bar = function () { return 100; };
console.log('bar() =', bar()); // 100

var obj = {};
obj.baz = function () { return 200; };
console.log('obj.baz() =', obj.baz()); // 200


//--------------------------------------------------------------------------------
// Example 4-10. 함수의 argument
//--------------------------------------------------------------------------------
var foo2 = function (func) {
    func();
};

foo2(function () {
    console.log('Function can be used as the argument.');
});

//--------------------------------------------------------------------------------
// Example 4-11. 함수의 return value
//--------------------------------------------------------------------------------
var foo3 = function() {
    return function () {
        console.log('this function is the return value.');
    };
};

var bar3 = foo3();
bar3();


//--------------------------------------------------------------------------------
// Example 4-12
//--------------------------------------------------------------------------------
function add02(x, y) {
    return x + y;
}

console.dir(add02);   // mandatory: length, prototype (ECMAScript)
// ==> 모든 함수의 부모 -> Function.prototype --> Object.prototype
//     e.g.) Chrome: Function.prototype --> Empty()


//--------------------------------------------------------------------------------
// Example 4-13. function.length
//--------------------------------------------------------------------------------
function func0 () {

}

function func1 (x) {
    return x;
}

function func2 (x, y) {
    return x + y;
}

function func3 (x, y, z) {
    return x + y + z;
}

console.log('func0.length = ', func0.length);
console.log('func1.length = ', func1.length);
console.log('func2.length = ', func2.length);
console.log('func3.length = ', func3.length);


//--------------------------------------------------------------------------------
// Example 4-14. function.prototype
//--------------------------------------------------------------------------------

// myFunction 함수가 생성될때 --> myFunction.prototype 이 동시에 생성된다.
// myFunction.prototype 은 'constructor' property 하나만 가진다.
// myFunction.prototype 은 myFunction() 을 통해 생성된 객체의 부모가 된다.
function myFunction() {
    return true;
}

console.dir(myFunction.prototype);
console.dir(myFunction.prototype.constructor);