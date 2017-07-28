/**
 * Item 1. Know Which JavaScript You are Using
 *
 * 1997: ECMAScript
 * 1999: ECMAScript 3
 * 2009: ECMAScript 5
 *  - strict mode 추가
 *      - 특정 버전의 자바스크립트에서는 오류를 일으키기 쉽거나
 *      - 문제를 일으킬 만한 기능들을 사용할 수 없게 만들 수 있다.
 *      - 프로그램(스크립트)나 함수의 맨 처음에 선언되었을 때만 인식된다.
 *      - 병합에 민감 - 즉시 실행되는 함수 표현식을 사용해 파일들의 본문을 감싸라.
 *
 */

// ECMAScript 는 const 를 정의하고 있지 않다.
const PI = 3.141592653589793;
PI = "modified!";
console.log(PI); // 3.141592653589793

//const PI = 3.141592653589793;
//PI = "modified!";
//console.log(PI); // "modified!"

// strict mode
function f(x) {
    //'use strict';   // on/off
        // SyntaxError: Variable name may not be eval or arguments in strict mode

    var arguments = [];
}