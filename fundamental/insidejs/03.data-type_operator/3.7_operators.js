/**
 *
 * 3.7 연산자
 *  - '+'
 *      - Operand 가 모두 숫자일 경우만 더하기 연산
 *      - 나머지는 문자열 연결 연산
 *  - typeof
 *      - 숫자: 'number'
 *      - 문자열: 'string'
 *      - 불린값: 'boolean'
 *      - null: 'object'
 *      - undefined: 'undefined'
 *      - 객체: 'object'
 *      - 배열: 'object'
 *      - 함수: 'function'
 *  - '==' vs. '==='
 *      - '=='(동등, coercive equality): 타입 변환후 비교
 *      - '==='(일치, strict equality): 타입 변환없이 비교
 *  - !!
 *      - Operand 를 boolean 값으로 변환
 *
 */

//--------------------------------------------------------------------------------
// Example 3-28. '+'
//--------------------------------------------------------------------------------
var add1 = 1 + 2;
var add2 = 'my' + 'string';
var add3 = 1 + 'string';
var add4 = 'string' + 2;

console.log(add1);  // 3
console.log(add2);  // mystring
console.log(add3);  // 1string
console.log(add4);  // string2


//--------------------------------------------------------------------------------
// Example 3-29. ==(coercive) vs. ===(strict)
//--------------------------------------------------------------------------------

// 타입 변환후 비교 (타입 변환 규칙은 ECMAScript 명세서 참조)
console.log(1 == '1');  // true

// 타입 변환없이 비교 (권장)
console.log(1 === '1'); // false


//--------------------------------------------------------------------------------
// Example 3-30. '!!'
//--------------------------------------------------------------------------------
console.log('\t!!0 :', !!0);           // false
console.log('\t!!1 :', !!1);           // true
console.log("\t!!'string' :", !!'string');    // true
console.log("\t!!'' : ", !!'');          // false
console.log('\t!!true : ', !!true);        // true
console.log('\t!!false : ', !!false);       // false
console.log('\t!!null : ', !!null);        // false
console.log('\t!!undefined : ', !!undefined);   // false
console.log('\t!!{} : ', !!{});          // true <-- important!!!
console.log('\t!![1, 2, 3] : ', !![1, 2, 3]);   // true