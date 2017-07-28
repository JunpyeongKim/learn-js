/**
 *
 * 4.5.8 Default Prototype 은 다른 객체로 변경이 가능하다
 *
 */

//------------------------------------------
// Example 4-43
function Person(name) {
    this.name = name;
}

console.log('Person.prototype.constructor :', Person.prototype.constructor);  // Person()

var foo = new Person('foo');
console.log('foo.country :', foo.country);   // undefined

Person.prototype = {
    country: 'korea'
};

console.log('Person.prototype.constructor :', Person.prototype.constructor);  // Object(), Person.prototype --> Object.prototype

var bar = new Person('bar');

console.log('foo.country :', foo.country);          // undefined
console.log('bar.country :', bar.country);          // korea
console.log('foo.constructor :', foo.constructor);  // Person(), foo --> Person.prototype
console.log('bar.constructor :', bar.constructor);  // Object(), bar --> Person.prototype --> Object.prototype
