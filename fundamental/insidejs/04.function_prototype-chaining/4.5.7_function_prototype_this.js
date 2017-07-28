/**
 *
 * 4.5.7 프로토타입 메서드와 this 바인딩
 *  - 그 메서드를 호출한 객체에 바인딩된다
 *
 */

//------------------------------------------
// Example 4-42
function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
};

var foo = new Person('foo');

// this --> foo
console.log(foo.getName());     // foo

Person.prototype.name = 'person';

// this --> Person.prototype
console.log(Person.prototype.getName());    // person