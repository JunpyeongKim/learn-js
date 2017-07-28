/**
 *
 * 3. 자바스크립트 데이터 타입과 연산자
 *
 *  (*) JavaScript Data Types
 *      - Primitive Type
 *      - Reference Type
 *
 *  3.1 자바스크립트 기본 타입
 *      - number, string, boolean, null, undefined
 *      - 느슨한 타입 체크 언어
 *          - 'var' 를 이용하여 변수 선언하므로 타입을 미리 정하지 않게 된다.
 *          - 어떤 형태의 데이터를 저장하느냐에 따라 변수의 타입이 결정된다.
 *      - null 과 undefined
 *          - '값이 비어있음' 을 나타낸다.
 *          - undefined: 타입 && 값
 *          - typeof(null) --> 'object'
 *
 */

//--------------------------------------------------------------------------------
// Example 3-1
//--------------------------------------------------------------------------------
// Primitive Types - number
var intNum = 10;
var floatNum = 0.1;

// Primitive Types - string
var singleQuoteStr = 'single quote string';
var doubleQuoteStr = "double quote string";
var singleChar = 'a';

// Primitive Types - boolean
var boolVar = true;

// Primitive Types - undefined
var emptyVar;

// Primitive Types - null
var nullVar = null;

console.log('',
    typeof intNum, typeof floatNum, '\n',
    typeof singleQuoteStr, typeof doubleQuoteStr, typeof singleChar, '\n',
    typeof boolVar, '\n',
    typeof emptyVar, '\n',
    typeof nullVar);


//--------------------------------------------------------------------------------
// Example 3-2. Primitive Type - number
//--------------------------------------------------------------------------------

// 모든 숫자를 64bit Floating-point 형태로 저장
var num = 5 / 2;

console.log(num);   // 2.5
console.log(Math.floor(num));   // 2


//--------------------------------------------------------------------------------
// Example 3-3. Primitive Type - string
//--------------------------------------------------------------------------------
var str = 'test';   // Immutable !!!

// Index 를 이용하여 접근 가능
console.log(str[0], str[1], str[2], str[3]);    // t e s t

str[0] = 'T';   // Immutable 이므로 수정 불가
console.log(str);   // test


//--------------------------------------------------------------------------------
// Example 3-4. Primitive Type - null && undefined
//--------------------------------------------------------------------------------
var nullVar = null;

console.log(typeof(nullVar) === null);       // false
console.log(typeof(nullVar) === "object");   // true
console.log(nullVar === null);              //true