/**
 *
 *  6.2.2 클래스 기반의 상속
 *      - Prototypal Inheritance 와 거의 동일
 *      - 클래스 역할을 하는 function 으로 상속을 구현
 *
 */


//--------------------------------------------------------------------------------
// Example 6-7
//--------------------------------------------------------------------------------
function Person01(arg) {
    this.name = arg;
}

Person01.prototype.setName = function (value) {
    this.name = value;
};

Person01.prototype.getName = function () {
    return this.name;
};

function Student01(arg) {
    // 문제점: super() 를 호출하지 않는다.
    //       --> Person01.apply(this, arguments);
}

var you01 = new Person01('iamhjoo');
Student01.prototype = you01;    // Super Class 와 Sub Class 의 instance 는 independent 해야 한다.

var me01 = new Student01('zzoon');  // zzoon 을 인자로 넘겼으나 me01 객체는 빈 객체이다.
console.dir(me01);

console.log(me01.getName());  // iamhjoo; Student01.prototype --> you01 --> Person01.prototype
me01.setName('zzoon');        // setName()이 호출되고 나서야 me01 객체에 name Property 가 만들어 진다.
console.log(me01.getName());  // zzoon: Student01.prototype --> you01 --> Person01.prototype


//--------------------------------------------------------------------------------
// Example 6-8
//--------------------------------------------------------------------------------
function Person02(arg) {
    this.name = arg;
}

Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
};

Person02.method("setName", function (value) {
    this.name = value;
});

Person02.method("getName", function () {
    return this.name;
});

function Student02(arg) {
}

// 중개자
function F() {}
F.prototype = Person02.prototype;

Student02.prototype = new F();
Student02.prototype.constructor = Student02;
Student02.super = Person2.prototype;

var me02 = new Student02();
console.dir(me02);

me02.setName("zzoon");
console.log(me02.getName());  // zzoon


//--------------------------------------------------------------------------------
// Stoyan Stefanov ("JavaScript Patterns"). Best Practice = Example 6-8 + inherit()
//--------------------------------------------------------------------------------
var inherit = (function (Parent, Child) {
    // 중개자; Free variable ==> GC X
    var F = function () {};

    // Closure(반환되는 함수)
    return function (Parent, Child) {
        F.prototype = Parent.prototype;
        Child.prototype = new F();
        Child.prototype.constructor = Child;
        Child.super = Parent.prototype;
    };
})();   // Immediate function

function Student03(arg) {
}

inherit(Person02, Student03);
console.dir(Student03);

var me03 = new Student03();
me03.setName("m03");
console.log(me03.getName());  // m03