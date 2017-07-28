/**
 *
 * 3.5 배열
 *  - 크기 지정 불필
 *  - 어떤 타입의 데이터도 저장 가능
 *
 */

//--------------------------------------------------------------------------------
// Example 3-13. Array Literal
//--------------------------------------------------------------------------------
var colorArr = ['orange', 'yellow', 'blue', 'green', 'red'];

console.log(colorArr[0]);   // orange
console.log(colorArr[1]);   // yellow
console.log(colorArr[4]);   // red


//--------------------------------------------------------------------------------
// Example 3-14
//--------------------------------------------------------------------------------
var emptyArr = [];
console.log(emptyArr[0]);   // undefined

emptyArr[0] = 100;
emptyArr[3] = 'eight';
emptyArr[7] = true;
console.log(emptyArr);          // [ 100, , , 'eight', , , , true ]
console.log(emptyArr.length);   // 8 <-- 현재 배열의 인덱스중 가장 큰 값을 기준으로 정하기 때문


//--------------------------------------------------------------------------------
// Example 3-15. length 와 실제 할당 메모리
//--------------------------------------------------------------------------------
var arr = [];
console.log(arr.length);    // 0

arr[0] = 0;
arr[1] = 1;
arr[2] = 2;
arr[100] = 100;
console.log(arr.length);    // 101 <-- 그러나, 실제 메모리는 length 크기처럼 할당되지 않는다.


//--------------------------------------------------------------------------------
// Example 3-16
//--------------------------------------------------------------------------------
var arr = [0, 1, 2];
console.log(arr.length);    // 3

arr.length = 5;
console.log(arr);   // [0, 1, 2, , ] --> 2개의 undefined --> 실제 메모리가 할당되지는 않는다.

arr.length = 2;
console.log(arr);       // [0, 1] --> '2'가 실제로 삭제된다.
console.log(arr[2]);    // undefined


//--------------------------------------------------------------------------------
// Example 3-17. Array methods 는 length 를 기반으로 동작
//--------------------------------------------------------------------------------
var arr = ['zero', 'one', 'two'];

arr.push('three');
console.log(arr);   // ['zero', 'one', 'two', 'three']

arr.length = 5; // ['zero', 'one', 'two', 'three', ]
arr.push('four');
console.log(arr);   // ['zero', 'one', 'two', 'three', , 'four']


//--------------------------------------------------------------------------------
// Example 3-18. Array vs. Object
//--------------------------------------------------------------------------------
var colorsArray = ['orange', 'yellow', 'green'];
console.log(colorsArray[0]);    // oragne
console.log(colorsArray[1]);    // yellow
console.log(colorsArray[2]);    // green

var colorsObj = {
    0: 'orange',
    1: 'yellow',
    2: 'green'
};
console.log(colorsObj[0]);  // orange; JavaScript Engine 이 0 --> '0'으로 변경해준다.
console.log(colorsObj[1]);  // yellow
console.log(colorsObj[2]);  // green

console.log(typeof colorsArray);    // 'object'
console.log(typeof colorsObj);      // 'object'

console.log(colorsArray.length);    // 3
console.log(colorsObj.length);      // undefined

colorsArray.push('red');    // Array.prototype --> Object.prototype
                            // 그러므로, Array 는 두 객체의 모든 메서드를 사용 가능
//colorsObj.push('red');      // TypeError: Object #<Object> has no method 'push'


//--------------------------------------------------------------------------------
// Example 3-19. [[Prototype]] 비교
//--------------------------------------------------------------------------------
var emptyArray = [];
var emptyObj = {};

console.dir(emptyArray.__proto__);
console.dir(emptyObj.__proto__);


//--------------------------------------------------------------------------------
// Example 3-20. 동적 프로퍼티 추가
//--------------------------------------------------------------------------------
var arr = ['zero', 'one', 'two'];
console.log(arr.length);    // 3

// 프로퍼티 동적 추가
arr.color = 'blue';
arr.name = 'number_array';
console.log(arr.length);    // 3

arr[3] = 'red';
console.log(arr.length);    // 4

console.dir(arr);
/*
    Array[4]
        0: "zero"
        1: "one"
        2: "two"
        3: "red"
        color: "blue"
        length: 4
        name: "number_array"
        __proto__: Array[0]
*/


//--------------------------------------------------------------------------------
// Example 3-21. for 문 사용 권장
//--------------------------------------------------------------------------------
// 불필요한 Property 가 출력
for (var prop in arr) {
    console.log(prop, arr[prop]);
}

// for 문 사용 권장
for (var i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
}


//--------------------------------------------------------------------------------
// Example 3-22
//--------------------------------------------------------------------------------
var arr = ['zero', 'one', 'two', 'three'];

delete arr[2];  // 배열도 객체이므로 delete 사용 가능 --> undefined 로 설정할 뿐
console.log(arr);   // ['zero', 'one', , 'three']
console.log(arr.length);    // 4


//--------------------------------------------------------------------------------
// Example 3-23. 완전 삭제는 splice(start, deleteCount, item...)
//--------------------------------------------------------------------------------
var arr = ['zero', 'one', 'two', 'three'];

arr.splice(2, 1);
console.log(arr);           // [ 'zero', 'one', 'three' ]
console.log(arr.length);    // 3


//--------------------------------------------------------------------------------
// Example 3-24. new Array()
//--------------------------------------------------------------------------------

// 숫자 Parameter 1개 --> Parameter 를 length 하는 빈 배열
var foo = new Array(3);
console.log(foo);           // [ , , ]
console.log(foo.length);    // 3

// 그외 --> Parameter 를 요소로 가지는 배열
var bar = new Array(1, 2, 3);
console.log(bar);               // [1, 2, 3]
console.log(bar.length);        // 3

var baz = new Array('a');
console.log(baz);               // ['a']
console.log(baz.length);        // 1


//--------------------------------------------------------------------------------
// Example 3-25. Array-like Object: length 프로퍼티를 가진 객체
//--------------------------------------------------------------------------------
var arr = ['bar'];
var obj = {
    name: 'foo',
    length: 1   // --> array-like object
};

arr.push('baz');
console.log(arr);   // ['bar', 'baz']

//obj.push('baz');    // TypeError: Object #<Object> has no method 'push'
Array.prototype.push.apply(obj, ['baz']);   // apply() 를 이용하여 표준 배열 메서드 이용 가능
console.log(obj);   // {'1': 'baz', name: 'foo', length: 2}