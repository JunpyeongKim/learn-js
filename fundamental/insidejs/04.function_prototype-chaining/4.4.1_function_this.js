/**
 *
 * 4.4.2 호출 패턴과 this 바인딩
 *  - 함수가 호출되는 방식(호출 패턴)에 따라 this 가 다른 객체를 참조(this binding)
 *
 *  - 4.4.2.1 객체 메서드 호출할 때 this 바인딩
 *      - 해당 메서드를 호출한 객체로 바인딩 된다.
 *
 *  - 4.4.2.2 함수를 호출할 때 this 바인딩
 *      - this 는 전역객체에 바인딩
 *          - 브라우저 : window 객체
 *          - Node.js : global 객체
 *
 *  ==> this 바인딩의 한계를 극복하려고, this 바인딩을 명시적으로 할 수 있도록 call & apply 메서드를 제공한다.
 *
 *  - 4.4.2.3 생성자 함수를 호출할 때 this 바인딩
 *      - Constructor 동작 방식
 *          - 1) 빈 객체 생성 및 this 바인딩
 *              - 생성된 객체는 Constructor.prototype 객체를 [[Prototype]으로 지정
 *          - 2) this 를 통한 property 생성
 *          - 3) 생성된 객체를 리턴
 *              - 특별하게 리턴문이 없을 경우 : this 바인딩된 객체 리턴
 *              - 객체를 리턴값으로 지정할 경우 : 지정된 객체가 리턴 (Not boolean, number, string)
 *      - Object Literal vs. Constructor
 *          - Object Literal : 동일한 형태의 객체를 재생성 불가
 *          - Constructor : 동일 형태의 서로 다른 객체 생성 가능
 *      - Constructor 를 new 를 붙이지 않고 호출
 *          - 오류 발생 --> this 가 전역 객체에 바인딩되기 때문에
 *
 *  - 4.4.2.4 call 과 apply 메서드를 이용한 명시적인 this 바인딩
 *      - Function.prototype 의 메서드
 *      - call() vs. apply()
 *          - 기능은 같고, 단지 넘겨받는 인자의 형식만 다르다.
 *      - (ex) function apply(thisArg, argArray)
 *          - 호출 주체 : 함수
 *          - thisArg : this 에 바인딩할 객체
 *          - argArray : 함수를 호출할 때 넘길 인자들의 배열
 *      - 대표적인 용도
 *          - array-like object 에서 Array 메서드를 사용하는 경우
 *
 */

// 4.4.2.1 객체 메서드 호출할 때 this 바인딩
//------------------------------------------
// Example 4-23
var myObject = {
    name: 'foo',
    sayName: function () {
        console.log('...', this.name);
    }
};

var otherObject = {
    name: 'bar'
};

otherObject.sayName = myObject.sayName;

console.log('myObject.sayName() :');
myObject.sayName();     // foo
console.log('otherObject.sayName() :');
otherObject.sayName();  // bar


// 4.4.2.2 함수를 호출할 때 this 바인딩
//------------------------------------------
// Example 4-24
//  - Only in Chrome Console
/*
var foo = "I'm foo";    // global variable

console.log('foo :', foo);                  // I'm foo
console.log('window.foo :', window.foo);    // I'm foo
//*/

//------------------------------------------
// Example 4-25
//  - Only in Chrome Console
/*
var test = 'This is test';
console.log('window.test :', window.test);   // This is test

var sayFoo = function () {
    console.log('sayFoo()...this.test :', this.test); // window.test
};

sayFoo();   // This is test
//*/

//------------------------------------------
// Example 4-26
//  - 내부 함수 호출 패턴을 정의해 놓지 않았다.
//      ==> 내부 함수도 결국 함수이므로 내부 함수의 this 는 전역객체(window)에 바인딩된다
//  - Only in Chrome Console

console.log('\nthis: binding to window/global...');
var value = 100;

var myObject = {
    value: 1,
    func1: function () {
        this.value += 1;    // this --> myObject
        console.log('func1() called, this.value :', this.value);    // 2

        func2 = function () {
            this.value += 1;    // this --> window/global
            console.log('func2() called, this.value :', this.value);    // 101

            func3 = function () {
                this.value += 1;    // this --> window/global
                console.log('func3() called, this.value :', this.value);    // 102
            };

            func3();
        };

        func2();
    }
};

myObject.func1();


//------------------------------------------
// Example 4-27
//  - 4-26의 해결책 :  this 를 내부 함수가 접근 가능한 다른 변수에 저장
console.log('\nthis: binding solution...');
var value = 100;

var myObject = {
    value: 1,
    func1: function () {
        var that = this;    // this --> myObject

        this.value += 1;
        console.log('func1() called, this.value :', this.value);    // 2

        func2 = function () {
            that.value += 1;    // that --> myObject
            console.log('func2() called, this.value :', that.value);    // 3

            func3 = function () {
                that.value += 1;    // that --> myObject
                console.log('func3() called, this.value :', that.value);    // 4
            };

            func3();
        };

        func2();
    }
};

myObject.func1();


// 4.4.2.3 생성자 함수를 호출할 때 this 바인딩
//------------------------------------------
// Example 4-28
var Person = function (name) {
    this.name = name;
};

var foo = new Person('foo');
console.log(foo.name);

//------------------------------------------
// Example 4-29
//  - in Chrome Console
/*
console.log('\nConstructor: vs. Object Literal...');
var foo = {
    name: 'foo',
    age: 35,
    gender: 'man'
};
console.dir(foo);   // [[Prototype]] --> Object.prototype

function Person(name, age, gender, position) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var bar = new Person('bar', 33, 'woman');
console.dir(bar);   // [[Prototype]] --> Person.prototype

var baz = new Person('baz', 25, 'woman');
console.dir(baz);   // [[Prototype]] --> Person.prototype
//*/


//------------------------------------------
// Example 4-30
//  - in Chrome Console
/*
console.log('\nConstructor: without new...');
var qux = Person('qux', 20, 'man');
console.log(qux);   // undefined

console.log(window.name);
console.log(window.age);
console.log(window.gender);
//*/

//------------------------------------------
// 더글라스 크락포드의 코드 패턴
//  - in Chrome Console
//  - Constructor 를 잘못하용하는 위험성을 피하기 위한 객체 생성 패턴
/*
function A(arg) {
    //if (!(this instanceof A)) {
    if (!(this instanceof arguments.callee)) {
        return new A(arg);
    }

    this.value = arg ? arg : 0;
}

var a = new A(100);
var b = A(10);

var global = global ? global : window;
console.log(a.value);   // 100
console.log(b.value);   // 10
console.log(global.value);  // undefined
//*/


// 4.4.2.4 call 과 apply 메서드를 이용한 명시적인 this 바인딩
//------------------------------------------
// Example 4-31
//  - in Chrome Console
/*
console.log('\nFunction.prototype: call() vs. apply()...');
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var foo = {};

Person.apply(foo, ['foo', 30, 'man']);
console.dir(foo);
//*/


//------------------------------------------
// Example 4-32
console.log('\nFunction.prototype: apply()...');
function myFunction() {
    console.dir(arguments);

    //arguments.shift();  //  Uncaught TypeError: arguments.shift is not a function

    // slice(start, end)
    //  - start ~ end-1
    //  - no end : length
    //  - no start & end : 전체 배열 복사
    var args = Array.prototype.slice.apply(arguments);
    console.dir(args);

    // different ==> arguments.__proto__ vs. args.__proto__
}

myFunction(1, 2, 3);


//------------------------------------------
// Example 4-33
console.log('\nArray: slice()...');
var arrA = [1, 2, 3];
console.log('arrA :', arrA);

var arrB = arrA.slice(0);       // [ 1, 2, 3 ]
console.log('arrB :', arrB);
var arrC = arrA.slice();        // [ 1, 2, 3 ]
console.log('arrC :', arrC);
var arrD = arrA.slice(1);       // [ 2, 3 ]
console.log('arrD :', arrD);
var arrE = arrA.slice(1, 2);    // [ 2 ]
console.log('arrE :', arrE);