/**
 *
 * OOP Language
 *  - Class-based : Java, C++, ...
 *  - Prototype-based : JavaScript, ...
 *
 * 6.1 클래스, 생성자, 메서드
 *  - 'function' 으로 모두 구현 가능
 *  - Methods 는 "function.prototype" Object 에 정의하자.
 *      - <== 'Prototype Chaining' 으로 접근 가능하므로
 *      - e.g.) Function.prototype.method(name, func) from 더글라스 크락포드
 *
 * (*) 더글라스 크락포드
 *  - new Constructor() vs. Constructor()
 *      - ==> this 에 바인딩되는 객체가 다르다.
 *  - Constructor 의 첫글자는 Uppercase
 *
 */


//--------------------------------------------------------------------------------
// Example 6-1
//--------------------------------------------------------------------------------

// Class && Constructor
function Person01(arg) {
    this.name = arg;

    this.getName = function () {
        return this.name;
    };

    this.setName = function (value) {
        this.name = value;
    }
}

var me01 = new Person01('zzoon');
console.log('me.getName(): ', me01.getName());    // zzoon

me01.setName('iamhjoo');
console.log('me.getName(): ', me01.getName());    // iamhjoo


var you01 = new Person01('you01');
var him01 = new Person01('him01');

// ==> Conclusion: 각 객체(me01, you01, him01)는 공통으로 사용할 수 있는 setName(), getName() 을
//                 따로 생성하여 불필요하게 중복, 즉 자원 낭비.
// ==> Solution: 'function' Object 의 [[Prototype]], 즉 "Prototype Chaining" 을 이용하자.


//--------------------------------------------------------------------------------
// Example 6-2
//--------------------------------------------------------------------------------
function Person02(arg) {
    this.name = arg;
}

// Class's Method 는 Prototype Object 에 정의하자.
Person02.prototype.getName = function () {
    return this.name;
};

Person02.prototype.setName = function (value) {
    this.name = value;
};

var me02 = new Person02('me02');
var you02 = new Person02('you02');
console.log('me02.getName() :', me02.getName());      // me02; Person02.prototype.getName()
console.log('you02.getName() :', you02.getName());    // you02; Person02.prototype.getName()


//--------------------------------------------------------------------------------
// Example 6-3
//--------------------------------------------------------------------------------

// 더글라스 크락포드가 제시하는 메서드 정의 방법
Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
    }
};

function Person03(arg) {
    this.name = arg;
}

Person03.method('setName', function (value) {
    this.name = value;
});

Person03.method('getName', function () {
    return this.name;
});

var me03 = new Person03('me03');
var you03 = new Person03('you03');
console.log('me03.getName() :', me03.getName());      // me03; Person03.prototype.getName()
console.log('you03.getName() :', you03.getName());    // you03; Person03.prototype.getName()