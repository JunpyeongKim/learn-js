/**
 * 5.2.6 코드 실행
 *  - NOTE : 브라우저에서는 최상위 코드가 곧 전역 코드이지만, Node.js 에서는 다르다.
 *
 * $ node ec_filename.js
 */

//------------------------------------------
// in Chrome
/*
var a = 10;
b = 15;

console.log(window.a);  // 10
console.log(window.b);  // 15
//*/

//------------------------------------------
// in Node.js
// - filename.js 가 하나의 모듈로 동작하므로,
//  - var a --> 모듈의 지역 변수
//  - b     --> global 의 변수
var a = 10;
b = 15; // filename 모듈의 지역변수가 된다.

console.log(global.a);  // undefined
console.log(global.b);  // 15