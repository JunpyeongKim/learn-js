/**
 *
 * 3.6 기본 타입과 표준 메서드
 *  - Primitive Type 을 위해 정의된 표준 메서드들을 객체처럼 호출 가능하다.
 *  - Primitive Type 값 --> 메서드 처리 순간에 Object 로 변환 --> 메서드 호출이 끝나면 다시 Primitive Type 값으로 복귀
 *
 */


//--------------------------------------------------------------------------------
// Example 3-27
//--------------------------------------------------------------------------------
var num = 0.5;

// number --> Number.toExponential() --> number
console.log(num.toExponential(1));  // '5.0e-1'

// string --> String.charAt() --> string
console.log('test'.charAt(2));  // 's'