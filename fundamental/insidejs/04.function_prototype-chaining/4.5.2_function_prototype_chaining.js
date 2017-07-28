/**
 *
 * 4.5 프로토타입 체이닝
 *
 *  - 4.5.2 Object Literal 방식으로 생성된 객체의 Prototype Chaining
 *      - 객체는 자기 자신의 Property 와 자신의 부모 역할을 하는 프로토타입 객체의 Property 접근 가능
 *      - (*) Prototype Chaining 정의
 *          - 접근하려는 Property 또는 Method 가 없다면 [[Prototype]] 링를 따라 자신의 부모 역할을 하는 Prototype 객체의 Property 를 차례대로 검색하는 것
 *      - Object.prototype : 모든 객체의 조상
 *
 *  - 4.5.3 Constructor 로 생성된 객체의 Prototype Chaining
 *      - "자바스크립트에서 모든 객체는 자신을 생성한 Constructor 의 'prototype' property 가 가리키는 객체를 자신의 [[Prototype]] (부모 객체)로 취급한다."
 *
 *  - 4.5.4 Prototype Chaining 의 종점
 *      - Object.prototype
 *          - 모든 객체가 Object.prototype 의 Property & Method 에 접근 가능
 *
 *  - 4.5.9 객체의 Property 읽기나 Method 를 실행할 때만 Prototype Chaining 이 동작한다
 *      - 자바스크립트는 객체에 없는 Property 에 값을 쓰려고 할 경우 동적으로 객체에 Property 를 추가하기 때문이다
 *
 */


//------------------------------------------
// Example 4-38
console.log('Prototype Chaining: Object Literal...');
var myObject = {
    name: 'foo',
    sayName: function () {
        console.log('My Name is ' + this.name);
    }
};

myObject.sayName();

// myObject --> Object.prototype
console.log("myObject.hasOwnProperty('name') -->", myObject.hasOwnProperty('name'));            // true
console.log("myObject.hasOwnProperty('nickName') -->", myObject.hasOwnProperty('nickName'));    // false

// myObject --> Object.prototype : None
//myObject.sayNickName(); // TypeError: Object #<Object> has no method 'sayNickName'


//------------------------------------------
// Example 4-39
console.log('\nPrototype Chaining: Constructor...');
function Person(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
}

var foo = new Person('foo', 30, 'tennis');

// foo --> Person.prototype --> Object.prototype
console.log("foo.hasOwnProperty('name') -->", foo.hasOwnProperty('name'));  // true

console.dir(Person.prototype);


//------------------------------------------
// Example 4-39
console.log('\nPrototype Chaining: Only Reading...');
function Person(name) {
    this.name = name;
}

Person.prototype.country = 'Korea';

var foo = new Person('foo');
var bar = new Person('bar');

console.log('foo.country :', foo.country);  // Korea, foo --> Person.prototype
console.log('bar.country :', bar.country);  // Korea, bar --> Person.prototype

foo.country = 'USA';

console.log('foo.country :', foo.country);  // USA, foo
console.log('bar.country :', bar.country);  // Korea, bar --> Person.prototype
