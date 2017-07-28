/**
 *
 * 6.4 객체지향 프로그래밍 응용 예제
 *
 *  - 6.4.1 클래스의 기능을 가진 subClass 함수
 *
 *  - 6.4.2 subClass 함수와 모듈 패턴을 이용한 객체지향 프로그래밍
 *
 */


//------------------------------------------
// hasOwnProperty()
var o = new Object();
o.prop = 'exist';

console.log("o.hasOwnProperty('prop') :", o.hasOwnProperty('prop'));
console.log("o.hasOwnProperty('toString') :", o.hasOwnProperty('toString'));
console.log("o.hasOwnProperty('hasOwnProperty') :", o.hasOwnProperty('hasOwnProperty'));


//------------------------------------------
// Example 6-13
function subClass(obj) {
    var parent = this === window ? Function : this; // Browser
    //var parent = this === global ? Function : this; // Node.js

    // Closure 에 의해 단 한번만 생성된다.
    var F = function () {}; // prototype chaining 을 위한 임시 함수 객체
    F.prototype = parent.prototype;

    // Closure
    //  - 6.4.1.7 subClass 함수에 Closure 적용
    var child = function () {
        var _parent = child.parent;

        if (_parent && _parent !== Function) {
            _parent.apply(this, arguments);
        }

        if (child.prototype._init) {
            child.prototype._init.apply(this, arguments);
        }
    };

    //F.prototype = parent.prototype;

    child.prototype = new F();
    child.prototype.constructor = child;
    child.parent = parent;
    child.subClass = arguments.callee;

    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            child.prototype[i] = obj[i];
        }
    }

    return child;
}

var super_obj = {
    _init: function () {
        console.log('super init');
    },
    supero: function () {
    }
};

var sub_obj = {
    _init: function () {
        console.log('sub init');
    },
    subo: function () {
    }
};

var subsub_obj = {
    _init: function () {
        console.log('subsub init');
    },
    subsubo: function () {
    }
};

var SuperClass = subClass(super_obj);
var superv = new SuperClass();
var SubClass = SuperClass.subClass(sub_obj);
var subv = new SubClass();
var Sub_SubClass = SubClass.subClass(subsub_obj);
var subsubv = new Sub_SubClass();

var instance = new Sub_SubClass();



// - 6.4.1.6 subClass 활용
//  - 1) Constructor 가 호출되는지?
//  - 2) Parent method 가 Child instance 에서 호출되는가?
//  - 3) Child class 가 확장 가능한가?
//  - 4) 최상위 클래스인 Person 은 Function 을 상속받는가?
//------------------------------------------
// Example 6-14
var person_obj = {
    _init: function () {
        console.log('person init');
    },
    getName: function () {
        return this._name;
    },
    setName: function (name) {
        this._name = name;
    }
};

var student_obj = {
    _init: function () {
        console.log('student init');
    },
    getName: function () {
        return 'Student Name: ' + this._name;
    }
};

var Person = subClass(person_obj);  // Person class 정의 - person_obj 를 prototype 으로 가진다.
var person = new Person();  // person init
person.setName('zzoon');
console.log(person.getName()); // zzoon

var Student = Person.subClass(student_obj); // Student class 정의
var student = new Student();    // person init --> student init
student.setName('iamhjoo');
console.log(student.getName());

console.log(Person.toString()); // Function 상속 여부 확인


// 6.4.2 subClass 함수와 모듈 패턴을 이용한 객체지향 프로그래밍
//------------------------------------------
// Example 6-15
console.log('\nExample: subClass() & Module Pattern...');
var person = function (arg) {
    var name = undefined;

    // Module Pattern 으로 Encapsulation 를 구현
    //  - Encapsulation 의 중요한 개념인 Information Hiding 에 유용한 패턴.
    // ==> name 을 encapsulation 시킨 객체를 반환
    return {
        _init: function (arg) {
            name = arg ? arg : 'zzoon';
        },
        getName: function () {
            return name;
        },
        setName: function (arg) {
            name = arg;
        }
    };
};

var Person = subClass(person());
console.dir(Person);
var iamhjoo = new Person('iamhjoo');
console.log(iamhjoo.getName()); // iamhjoo

var Student = Person.subClass();
var student = new Student('student');
console.log(student.getName()); // student

console.log(iamhjoo.getName()); // student <-- bug : not independent !!!
