/**
 *
 * 3.3 참조 타입의 특성
 *
 */


//--------------------------------------------------------------------------------
// Example 3-9. 동일 객체 참조
//--------------------------------------------------------------------------------
var objA = {
    val: 40
};

var objB = objA;

console.log(objA.val);  // 40
console.log(objB.val);  // 40

objB.val = 50;
console.log(objA.val);  // 50
console.log(objB.val);  // 50


//--------------------------------------------------------------------------------
// Example 3-10. 비교
//--------------------------------------------------------------------------------
var a = 100;
var b = 100;

var objA = { value: 100 };
var objB = { value: 100 };
var objC = objB;

console.log(a === b);           // true
console.log(objA === objB);     // false
console.log(objB === objC);     // true


//--------------------------------------------------------------------------------
// Example 3-11. Call-by-Value vs. Call-by-Reference
//--------------------------------------------------------------------------------
var a = 100;
var objA = { value: 100 };

function changeArg(num, obj) {
    num = 200;  // Call by Value
    obj.value = 200;    // Call by Reference

    console.log(num);   // 200
    console.log(obj);   // { value: 200 }
}

changeArg(a, objA);

console.log(a); // 100
console.log(objA);  // { value: 200 }