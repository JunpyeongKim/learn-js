/**
 *
 * 4.1.4 Function() Constructor 를 통한 함수 생성하기
 *  - new Function(arg1, arg2, ..., argN, functionBody)
 *      - arg1, arg2, ..., argN : string
 *      - functionBody : string
 *  - Function Statement/Expression 도 내부적으로는 Function() 사용
 *
 */


//--------------------------------------------------------------------------------
// Example 4-5
//--------------------------------------------------------------------------------
var add = new Function('x', 'y', 'return x + y');
// in Chrome Console,
//    function anonymous(x,y
//     /*''*/) {
//        return x + y
//    }

console.log('add(3, 4) =', add(3, 4));  // 7
console.log('typeof add =', typeof add);    // "function"