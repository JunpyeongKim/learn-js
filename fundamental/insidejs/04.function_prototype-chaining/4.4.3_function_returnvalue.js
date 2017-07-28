/**
 *
 * 4.4.3 함수 리턴
 *  - 자바스크립트 함수는 항상 리턴값을 반환한다.
 *
 */


// 4.4.3.1 규칙 1) 일반 함수나 메서드는 리턴값을 지정하지 않을 경우 undefined 값이 리턴된다.
//------------------------------------------
// Example 4-34
console.log('Return Value: function or method...');
var noReturnFunc = function () {
    console.log('This function has no return statement.');
};

var result = noReturnFunc();
console.log('result :', result);


// 4.4.3.2 규칙 2) 생성자 함수에서 리턴값을 지정하지 않을 경우 생성된 객체가 리턴된다.
//------------------------------------------
// Example 4-35
console.log('\nReturn Value: Constructor with object type...');
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    return { name: 'bar', age: 20, gender: 'woman'};
}

var foo = new Person('foo', 30, 'man');

console.dir(foo);

//------------------------------------------
// Example 4-36
//  - Hoisting 때문에 4-35와 한 스크립트로 실행하면 비정상 결과가 나온다. ==> Constructor 이름을 변
console.log('\nReturn Value: Constructor with primitive type...');
function Person2(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    return 100;
}

var foo2 = new Person2('foo', 30, 'man');
console.dir(foo2);
