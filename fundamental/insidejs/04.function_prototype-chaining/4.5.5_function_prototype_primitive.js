/**
 *
 * 4.5.5 기본 데이터 타입 확장
 *  - Object.prototype 의 메서드 --> 모든 객체의 표준 메서드
 *      - Number.prototype, String.prototype, Array.prototype ==> Object.prototype
 *  - 표준 빌트인 프로토타입 객체에도 사용자가 직접 정의한 메서드들을 추가하는 것을 허용한다
 *
 * 4.5.6 prototype 도 자바스크립트 객체이다
 *  - 동적으로 Property 를 추가/삭제하는 것이 가능 --> 실시간으로 Prototype Chaining 에 바인딩된다
 *
 */

//------------------------------------------
// Example 4-40
String.prototype.testMethod = function() {
    console.log('This is the String.prototype.testMethod()');
};

var str = 'this is test';
str.testMethod();

console.dir(String.prototype);

//------------------------------------------
// Example 4-41
function Person(name) {
    this.name = name;
}

var foo = new Person('foo');

//foo.sayHello(); // TypeError: Object #<Person> has no method 'sayHello'

Person.prototype.sayHello = function () {
    console.log('Hello');
};

foo.sayHello();