/**
 *
 * 4.5 프로토타입 체이닝
 *
 *  - 4.5.1 프로토타입의 두 가지 의미
 *      - 자바스크립트는 Prototype-based OOP 를 지원
 *          - 모든 자바스크립트 객체는 자신의 부모를 가리키는 참조 링크 형태의 숨겨진 프로퍼티가 있다.
 *          - ==> ECMAScript : "implicit prototype link" --> [[Prototype]]
 *      - 자바스크립트에서 OOP Inheritance 의 근간
 *          - Prototype
 *          - Prototype Chaining
 *
 *      ==> "prototype" property vs. "[[Prototype]" Link
 */


//------------------------------------------
// Example 4-37
//  - in Chrome Console
function Person(name) {
    this.name = name;
}

var foo = new Person('foo');

// Person.prototype === foo.__proto__
console.dir(Person);    // Person.prototype
console.dir(foo);       // foo.__proto__ <-- [[Prototype]]

console.log('Person.prototype === foo.__proto__ :', Person.prototype === foo.__proto__);
