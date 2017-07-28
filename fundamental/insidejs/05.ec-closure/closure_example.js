/**
 *
 * 5.4.2 Closure 의 활용
 * - Closure 는 성능적인 면과 자원적인 면에서 약간 손해
 * - "7. 함수형 프로그래밍"의 대부분 예제가 Closure 활용
 *
 *  - 5.4.2.1 특정 함수에 사용자가 정의한 객체의 메서드 연결하기
 *
 *  - 5.4.2.2 함수의 캡슐화
 *
 *  - 5.4.2.3 setTimeout() 에 저장되는 함수의 사용자 정의
 *
 */

// 5.4.2.1 특정 함수에 사용자가 정의한 객체의 메서드 연결하기
//------------------------------------------
// Example 5-9
console.log('Closure: Custom Method...');
function HelloFunc(func) {
    this.greeting = 'hello';
}

HelloFunc.prototype.call = function (func) {
    func ? func(this.greeting) : this.func(this.greeting);
};

var userFunc = function (greeting) {
    console.log(greeting);
};

var objHello = new HelloFunc();
objHello.func = userFunc;
objHello.call();    // hello


//------------------------------------------
// Example 5-10
// - ex) onclick.onmouseover 의 이벤트 핸들러 형식은 function (event) {},
//       --> event 이외의 원하는 인자를 더 추가한 이벤트 핸들러를 사용하고 싶을 경우 Closure 를 적절히 활용 가능.
function saySomething(obj, methodName, name) {

    // free variable : obj, methodName, name
    return function (greeting) {
        return obj[methodName](greeting, name);
    };
}

function newObj(obj, name) {
    obj.func = saySomething(this, 'who', name);
    return obj;
}

newObj.prototype.who = function (greeting, name) {
    console.log(greeting + ' ' + (name || 'everyone'));
};

var obj1 = new newObj(objHello, 'zzoon');
obj1.call();


// 5.4.2.2 함수의 캡슐화
console.log('\nClosure: Encapsulation...');
//------------------------------------------
// Example 5-11
//  - 단점 : buffAr 배열은 전역 변수로서 외부에 노출
//          --> 다른 코드와의 통합이나 라이브러리로 만들려고 할때 문제 발생 가능.
var buffAr = [
    'I am ',
    '',
    '. I live in ',
    '',
    '. I\'am ',
    '',
    ' years old.'
];

function getCompletedStr(name, city, age) {
    buffAr[1] = name;
    buffAr[3] = city;
    buffAr[5] = age;

    return buffAr.join('');
}

var str = getCompletedStr('zzoon', 'seoul', 16);
console.log(str);


//------------------------------------------
// Example 5-12
var getCompletedStr2 = (function () {
    var buffAr = [
        'I am ',
        '',
        '. I live in ',
        '',
        '. I\'am ',
        '',
        ' years old.'
    ];

    return function (name, city, age) {
        buffAr[1] = name;
        buffAr[3] = city;
        buffAr[5] = age;

        return buffAr.join('');
    };
})();

var str2 = getCompletedStr2('zzoon', 'seoul', 16);
console.log(str2);


// 5.4.2.3 setTimeout() 에 저장되는 함수의 사용자 정의
console.log('\nClosure: setTimeout()...');
//------------------------------------------
// Example 5-13
//  - 이슈 : 실제 실행될 때 함수에 인자를 넘겨줄 수 없다.
function callLater(obj, a, b) {
    return function () {
        obj['sum'] = a + b;
        console.log(obj['sum']);
    };
}

var sumObj = {
    sum: 0
};

var func = callLater(sumObj, 1, 2);
setTimeout(func, 500);