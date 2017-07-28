/**
 *
 * 4. 함수와 프로토타입 체이닝
 *  - JavaScript 에서 가장 중요한 개념 1순위 ==> Function
 *  - e.g.) C 에서는 Pointer
 *
 *  4.1 함수 정의 방법 3가지
 *      - (1) Function Statement (thru 'function literal')
 *      - (2) Function Expression (thru 'function literal')
 *      - (3) Function()
 *
 *  4.1.1 Function Literal
 *      - (*) 함수도 객체 --> 값으로 취급
 *      - function optionalFunctionName(param1, param2, ..., paramN) {
 *              functionBody ...
 *        }
 *
 */

function optionaFunctionName(arg1, arg2) {
    return arg1 + arg2;
}