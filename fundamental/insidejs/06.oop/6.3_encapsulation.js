/**
 *
 * 6.3 캡슐화
 *  - Encapsulation : 관련된 정보(Variable & Method)를 하나의 틀(Class)안에 담는 것
 *                    --> 여기서는 Information hiding 의 여부가 중요하다.
 *
 */


//--------------------------------------------------------------------------------
// Example 6-9
//--------------------------------------------------------------------------------
var Person01 = function (arg) {
    // Private; Free variable
    var name = arg ? arg : 'zzoon';

    // Public; Closure 역할
    this.getName = function () {
        return name;
    };

    // Public; Closure 역할
    this.setName = function (arg) {
        name = arg;
    };
};

var me01 = new Person01();
console.log(me01.getName());  // zzoon

me01.setName('iamhjoo');
console.log(me01.getName());  // iamhjoo
console.log(me01.name);   // undefined


//--------------------------------------------------------------------------------
// Example 6-10
//--------------------------------------------------------------------------------
var Person02 = function (arg) {
    var name = arg ? arg : 'zzoon';

    // Module Pattern
    return {
        getName: function () {
            return name;
        },
        setName: function (arg) {
            name = arg;
        }
    };
};

var me02 = Person02();
var me02_1 = new Person02();    // me02_1에는 Person02() 가 리턴하는 인스턴스가 할당된다.
console.log(me02.getName());


//--------------------------------------------------------------------------------
// Example 6-11
//--------------------------------------------------------------------------------
var ArrCreate = function (arg) {
    var arr = [1, 2, 3];

    return {
        getArr: function () {
            return arr; // Reference(Shallow copy) --> Object 가 반환되어야 하는 경우에는 Deep copy 를 사용하자.
        }
    };
};

var obj = ArrCreate();
var obj_1 = new ArrCreate();    // obj_1에는 ArrCreate() 가 리턴하는 인스턴스가 할당된다.
var arr = obj.getArr();
arr.push(5);

console.log(obj.getArr());  // [ 1, 2, 3, 5 ]


//--------------------------------------------------------------------------------
// Example 6-12. Best Practice = Immediate function + Closure + Free variable
//--------------------------------------------------------------------------------
var Person03 = (function (arg) {
    var name = arg ? arg : 'zzoon'; // Free variable; private & static

    // Closure; public
    var Func = function () {};
    Func.prototype = {
        getName: function () {
            return name;
        },
        setName: function (arg) {
            name = arg;
        }
    };

    return Func;
})();   // Immediate Function

var me03 = new Person03();
console.log(me03.getName());