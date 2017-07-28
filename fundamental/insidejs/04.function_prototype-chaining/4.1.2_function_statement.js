/**
 *
 * 4.1.2 Function Statement 방식으로 함수 생성하기
 *  - function-literal + function-name(mandatory)
 *  - function mandatoryFunctionName(param1, param2, ..., paramN) {
 *          functionBody
 *    }
 *      - ==> Statement --> Expression (interpreted by JavaScript Engine)
 *            var mandatoryFunctionName = function mandatoryFunctionName(param1, param2, ..., paramN) {
 *                  functionBody
 *            };
 *
 */

//--------------------------------------------------------------------------------
// Example 4-1
//--------------------------------------------------------------------------------
function add(x, y) {    // add: mandatory
    return x + y;
}
/* ==> interpreted by JavaScript Engine,
     var add = function add(x, y) {
        return x + y;
     };
*/

console.log('add(3, 4) = ', add(3, 4));     // 7
console.log('typeof add = ', typeof add);   // "function"