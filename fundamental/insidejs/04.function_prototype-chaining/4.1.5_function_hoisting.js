/**
 *
 * 4.1.5 Function Hoisting
 *  - Hoisting 발생 원인
 *      - Variable 의  "Instantiation && Initialization"의 분리
 *      - ==> 더글라스 크락포드: "Function Expression"만을 사용할 것을 권고
 *  - Function Statement: Statement 전체가 Hoisting 된다.
 *  - Function Expression: Function Variable 만 Hoisting 된다.
 *
 */


//--------------------------------------------------------------------------------
// Example 4-6
//--------------------------------------------------------------------------------
/* Statement 전체가 Hoisting
function add01(x, y) {
    return x + y;
}
*/

console.log('add01(2, 3) =', add01(2, 3));

function add01(x, y) {
    return x + y;
}

console.log('add01(3, 4) =', add01(3, 4));


//--------------------------------------------------------------------------------
// Example 4-7
//--------------------------------------------------------------------------------
/* Function Variable 만 Hoisting
var add02;
*/

console.log('add02(2, 3) =', add02(2, 3));  // TypeError: undefined is not a function

var add02 = function (x, y) {
    return x + y;
};

console.log('add02( 3, 4) =', add02( 3, 4));