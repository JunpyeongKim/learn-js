/**
 *
 * 7.3 자바스크립트에서 함수형 프로그래밍을 활용한 주요 함수
 *
 *  - 7.3.1 함수 적용 (Applying functions)
 *      - 왜 apply ?
 *          - Functional Programming 에서 사용되는 용어
 *      - 인자 혹은 반환 값으로 전달된 함수를 특정 데이터에 적용시키는 개념으로 이해해야 한다
 *      - ex) func.apply(Obj, Args) : func 함수를 Obj 객체와 Args 인자 배열에 적용시킨다.
 *
 *  - 7.3.2 Currying
 *      - 특정 함수에서 정의된 인자의 일부를 넣어 고정시키고, <--- curry()
 *      - 나머지 인자를 받는 새로운 함수를 만드는 것 <-- func()
 *      - (*) Functional Programming Language 에서 기본적으로 지원하는데, JavaScript 에서는 기본 제공하지 않는다
 *            ==> Function.prototype 에 Currying 함수를 정의하여 사용 가능하다.
 *      --> Partially applying functions 라고 한다.
 *
 *  - 7.3.3 bind
 *      - currying 을 활용한 함수
 *      - 함수를 호출할 때 this에 바인딩시킬 객체를 사용자가 넣어 줄 수 있다.
 *      ==> 특정 함수에 원하는 객체를 바인딩시켜서 새로운 함수를 사용할 때 사용
 *
 *  - 7.3.4 wrapper
 *      - 특정 함수를 자신의 함수로 덮어쓰는 것
 *      - override 와 유사
 *
 *  - 7.3.5 반복 함수
 *      - 7.3.5.1 each
 *          - Array element or Object property 를 하나씩 꺼내서 차례대로 특정 함수의 인자로 넣어 실행시키는 역할
 *          - each or forEach 라는 이름으로 제공
 *          - ex) jQuery 1.0 의 each()
 *      - 7.3.5.2 map
 *          - 배열의 각 요소를 꺼내서 사용자 정의 함수를 적용시켜 새로운 값을 얻은 후, 새로운 배열에 넣는다
 *      - 7.3.5.3 reduce
 *          - 배열의 각 요소를 하나씩 꺼내서 사용자 함수를 적용시킨 뒤, 그 값을 계속해서 누적시키는 함수
 *
 */


//------------------------------------------
// Example 7-7
console.log('Functional Example: Currying...');
function calculate(a, b, c) {
    return a * b + c;
}

function curry(func) {
    var args = Array.prototype.slice.call(arguments, 1);    // [1] or [1, 3]

    return function () {
        return func.apply(null, args.concat(Array.prototype.slice.call(arguments)));    // [2, 3] or [3]
    };
}

// b, c 를 인자로 받는 새로운 함수
var new_func1 = curry(calculate, 1);
console.log(new_func1(2, 3));   //  5 = 1 * 2 + 3

// c 를 인자로 받는 새로운 함수
var new_func2 = curry(calculate, 1, 3);
console.log(new_func2(3));  // 6 = 1 * 3 + 3


//------------------------------------------
console.log('\nFunctional Example: Currying - Prototype...');
Function.prototype.curry = function () {
    var fn = this,
        args = Array.prototype.slice.call(arguments);

    return function () {
        return fn.apply(this, args.concat(Array.prototype.slice.call(arguments)));
    };
};

// b, c 를 인자로 받는 새로운 함수
var new_func3 = calculate.curry(1);
console.log(new_func3(2, 3));   //  5 = 1 * 2 + 3

// c 를 인자로 받는 새로운 함수
var new_func4 = calculate.curry(1, 3);
console.log(new_func4(3));  // 6 = 1 * 3 + 3


//------------------------------------------
// Example 7-8
//  - 첫 번째와 세 번째 인자를 고정하고 싶을 경우
//      - 주의 : 원하는 인자를 전부 넣어야 한다. 즉 고정시키지 않을 인자를 undefined 로 넘기면 된다
console.log('\nFunctional Example: Currying - Random...');
function curry2(func) {
    var args = Array.prototype.slice.call(arguments, 1);

    return function () {
        var arg_idx = 0;

        for (var i = 0; i < args.length && arg_idx < arguments.length; i++) {
            if (args[i] === undefined) {
                args[i] = arguments[arg_idx++];
            }
        }

        return func.apply(null, args);
    };
}

// b 를 인자로 받는 새로운 함수
var new_func = curry2(calculate, 1, undefined, 4);
console.log(new_func(3));  // 7 = 1 * 3 +


/*------------------------------------------
// bind() 기본 기능만 구현.
Function.prototype.bind = function (thisArg) {
    var fn = this,
        slice = Array.prototype.slice,
        args = slice.call(arguments, 1);

    return function () {
        return fn.apply(thisArg, args.concat(slice.call(arguments)));
    };
};
*/

//------------------------------------------
// Example 7-9
console.log('\nFunctional Example: Bind...');
var print_all = function (arg) {
    for (var i in this) {
        console.log('[this] ' + i + ' : ' + this[i]);
    }

    for (var i in arguments) {
        console.log('[arguments] ' + i + ' : ' + arguments[i]);
    }
};

var myobj = { name: 'zzoon' };

// myfunc() : myobj 객체를 this에 바인딩시켜 print_all() 실행하는 새로운 함수
console.log('\nmyfunc()...');
var myfunc = print_all.bind(myobj);
myfunc();

console.log('\nmyfunc1()...');
var myfunc1 = print_all.bind(myobj, 'iamhjoo', 'others');
myfunc1('insidejs');

//------------------------------------------
console.log('\n');
function Person(arg) {
    if (this.name === undefined) {
        this.name = arg ? arg : 'zzoon';
    }
    console.log('Name :', this.name);
}

Person.prototype.setName = function (value) {
    this.name = value;
};

Person.prototype.getName = function () {
    return this.name;
};

var myobj = { name: 'iamhjoo' };
var new_func = Person.bind(myobj);
new_func();  // iamhjoo

var obj = new new_func();  // zzoon
console.log(obj.getName()); // zzoon


//------------------------------------------
// Example 7-10
//  - 문제점
//      - original()이 호출될 때의 this와 반환되는 익명 함수가 호출될 때의 this가 다르다
//      - [fn] --> [fn.bind(this)] 로 해결 가능
//  - ex) 특정 플랫폼에서 버그를 발생시키는 함수가 있을 경우 이를 컨트롤 가능.
console.log('\nFunctional Example: Wrapper...');
function wrap(object, method, wrapper) {
    var fn = object[method];

    return object[method] = function () {
        // zzoon, 20
        //return wrapper.apply(this, [fn].concat(Array.prototype.slice.call(arguments)));

        // zzoon, zzoon
        return wrapper.apply(this, [fn.bind(this)].concat(Array.prototype.slice.call(arguments)));
    };
}

Function.prototype.original = function (value) {
    this.value = value;
    console.log('value :', this.value);
};

var mywrap = wrap(Function.prototype, 'original', function (orig_func, value) {
    this.value = 20;
    orig_func(value);
    console.log('wrapper value :', this.value);
});

var obj = new mywrap('zzoon');


//------------------------------------------
// Example 7-11
console.log('\nFunctional Example: each...');
function each(obj, fn, args) {
    if (obj.length === undefined) {
        // object
        for (var i in obj) {
            //console.log(i + '-' + obj[i]);
            fn.apply(obj[i], args || [i, obj[i]]);
        }
    } else {
        // array
        for (var i = 0; i < obj.length; i++) {
            //console.log(i + '-' + obj[i]);
            fn.apply(obj[i], args || [i, obj[i]]);
        }
    }

    return obj;
}

each([1,2, 3], function (idx, num) {
    console.log(idx + ": " + num);
});

var zzoon = {
    name: 'zzoon',
    age: 30,
    sex: 'Male'
};

each(zzoon, function (idx, value) {
    console.log(idx + ': ' + value);
});

//------------------------------------------
// Example 7-12
console.log('\nFunctional Example: map...');
Array.prototype.map = function (callback) {
    // whether this is null or not
    // where callback is function or not

    var obj = this;
    var value, mapped_value;
    var A = new Array(obj.length);

    for (var i = 0; i < obj.length; i++) {
        value = obj[i];
        mapped_value = callback.call(null, value);
        A[i] = mapped_value;
    }

    return A;
};

var arr = [1, 2, 3];
var new_arr = arr.map(function (value) {
    return value * value;
});

console.log(new_arr);   // [ 1, 4, 9 ]

//------------------------------------------
// Example 7-13
console.log('\nFunctional Example: reduce...');
Array.prototype.reduce = function (callback, memo) {
    // whether this is null or not
    // where callback is function or not

    var obj = this;
    var value, accumulated_value = 0;

    for (var i = 0; i < obj.length; i++) {
        value = obj[i];
        accumulated_value = callback.call(null, accumulated_value, value);
    }

    return accumulated_value;
};

var arr = [1, 2, 3];
var accumulated_val = arr.reduce(function (a, b) {
    return a + b * b;
});

console.log(accumulated_val);   // 14 = 1 * 1 + 2 * 2 + 3 * 3