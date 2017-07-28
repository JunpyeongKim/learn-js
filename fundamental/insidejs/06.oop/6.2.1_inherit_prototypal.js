/**
 *
 * 6.2 상속
 *  - Prototype Chaining 이용
 *  - 2 가지 구현 방법
 *      - 1) 클래스 기반 전통적인 상속을 흉내내는 방식
 *      - 2) 프로토타입으로 상속을 구현하는 방식
 *
 * 6.2.1 프로토타입을 이용한 상속
 *
 */


//--------------------------------------------------------------------------------
// Example 6-4. 더글라스 크락포드가 소개
//--------------------------------------------------------------------------------
function create_object(o) {
    function F() {}
    F.prototype = o;    // 객체 o 와 prototype chain 을 이룬다.

    return new F();
}
// ==> ECMAScript 5에서, Object.create() 로 제공되고 있다.


//--------------------------------------------------------------------------------
// Example 6-5. create_object() 를 이용한 상속
//--------------------------------------------------------------------------------
var person02 = {
    name: 'zzoon',
    getName: function () {
        return this.name;
    },
    setName: function (value) {
        this.name = value;
    }
};

function create_object02(o) {
    function F() {}
    F.prototype = o;

    return new F();
}

var student02 = create_object02(person02);

console.log(student02.getName()); // zoon
student02.setName('me02');
console.log(student02.getName()); // me02
// ==> No Constructor && No 'new'


//--------------------------------------------------------------------------------
// Example 6-6
//--------------------------------------------------------------------------------
var person03 = {
    name: "zzoon",
    getName: function () {
        return this.name;
    },
    setName: function (arg) {
        this.name = arg;
    }
};

// Prototypal Inheritance
function create_object03(o) {
    function F() {}
    F.prototype = o;

    return new F();
}

// Shallow copy
function extend(obj, prop) {
    if (!prop) {
        obj = this;
        prop = obj;
    }

    for (var i in prop) {
        obj[i] = prop[i];
    }

    return obj;
}
// ==> 자식 클래스를 확장할 때 유용하게 사용하나,
// ==> 일반적으로 extend()를 구현할 때는 "Deep copy" 를 해야한다.
//     e.g.) jQuery.extend()

var student03 = create_object03(person03);
console.log('Before extension :');
console.dir(student03); // {}

var added = {
    setAge: function (age) {
        this.age = age;
    },
    getAge: function () {
        return this.age;
    }
};

extend(student03, added);

console.log('After extension :');
console.dir(student03);

student03.setAge(25);
console.log(student03.getAge());