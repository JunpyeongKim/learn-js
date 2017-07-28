/**
 *
 * 4.3 함수의 다양한 형태
 *
 * 4.3.1 Callback Function
 *  - Anonymous function 의 대표적인 사용 예
 *  - (*) Callback Function 의 대표적인 사용 예 --> Event Handler
 *
 *  window.onload = function () {
 *      alert('This is the callback function.')
 *  };
 *
 * 4.3.2 Immediate Function
 *  - 정의와 동시에 실행하는 함수
 *  - Anonymous Function 의 응용
 *  - 사용 이유 : 변수 유효 범위가 함수 코드 내부에서만 유효하기 때문
 *      - Global Namespace 를 더럽히지 않는다.
 *      - 라이브러리간 변수 이름 충돌 문제 방지
 *  - (ex) 최초 한 번의 실행만을 필요로 하는 초기화 코드 부분 등에서 사용 --> 대부분의 라이브러리가 이런 방싱 사용
 *
 * 4.3.3 Inner Function
 *  - 함수 내부에서 정의된 함수
 *      - 부모 함수의 변수에 접근 가능 <-- Scope Chaining 때문에
 *      - 부모 함수 내부에서만 호출 가능 <-- Scope Chaining 때문에
 *  - (ex)
 *      - Closure
 *      - Helper Function
 *
 * 4.3.4 함수를 리턴하는 함수
 *  - (ex)
 *      - 함수 호출과 동시에 다른 함수로 변경
 *      - 자기 자신을 재정의 하는 함수 구현
 *
 */

// 4.3.2 Immediate Function
(function (name ) {
    console.log('This is the immediate function -->', name);
})('foo');

// 4.3.3 Inner Function
function parent() {
    var a = 100;
    var b= 100;

    // inner function
    function child() {
        var b = 300;
        console.log('a =', a);
        console.log('b =', b);
    }

    child();
}

parent();   // 100, 300
//child();    // ReferenceError: child is not defined

function parent2() {
    var a = 100;

    // inner function
    var child2 = function () {
        console.log('a =', a);
    };

    return child2;
}

var inner = parent2();
inner();    // Closure - 실행이 끝난 부모 함수 scope 의 변수를 참조하는 함수

// 4.3.4 함수를 리턴하는 함수
var self = function () {
    console.log('a');

    return function () {
        console.log('b');
    };
};

self = self();  // a
self();         // b