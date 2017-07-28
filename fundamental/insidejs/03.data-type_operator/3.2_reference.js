/**
 *
 * 3.2 자바스크립트 참조 타입 (객체 타입)
 *
 *  3.2.1 객체 생성
 *      - (1) new Object() 이용
 *      - (2) 객체 리터럴 이용
 *      - (3) 생성자 이용
 *
 *  3.2.2 객체 프로퍼티 읽기/쓰기/갱신
 *      - []
 *      - '.'
 *
 */

//--------------------------------------------------------------------------------
// Example 3-5. new Object() 이용
//--------------------------------------------------------------------------------
var foo = new Object();

foo.name = 'foo';
foo.age = 30;
foo.gender = 'male';

console.log(typeof foo);    // object
console.log(foo);           // { name: 'foo', age: 30, gender: 'male' }


//--------------------------------------------------------------------------------
// Example 3-6. Object Literal 이용
//--------------------------------------------------------------------------------
var foo = {
    name: 'foo',
    age: 30,
    gender: 'male'
};

console.log(typeof foo);    // object
console.log(foo);           // { name: 'foo', age: 30, gender: 'male' }


//--------------------------------------------------------------------------------
// Example 3-7. Access to properties in Object
//--------------------------------------------------------------------------------
var foo = {
    name: 'foo',
    major: 'computer science'
};

// Read
console.log(foo.name);      // foo
console.log(foo['name']);   // foo
console.log(foo.nickname);  // undefined

// Update
foo.major = 'electronics engineering';
console.log(foo.major);     // electronics engineering
console.log(foo['major']);  // electronics engineering

// Create
foo.age = 30;   // property 가 동적으로 생성된 후 값이 할당
console.log(foo.age);   // 30

// [] 만 사용해야하는 경우
foo['full-name'] = 'foo bar';
console.log(foo['full-name']);  // foo bar
//console.log(foo.full-name);     // ReferenceError: name is not defined; (*) NaN: 수치 연산 결과 정상적인 값이 아닐 때
//console.log(foo.full);          // undefined
//console.log(name);              // ReferenceError: name is not defined


//--------------------------------------------------------------------------------
// Example 3-8. for~in && Object's properties
//--------------------------------------------------------------------------------
var foo = {
    name: 'foo',
    age: 30,
    major: 'computer science'
};

var prop;

// for (var property in Object) {...}
for (prop in foo) {
    console.log(prop, foo[prop]);
}


//--------------------------------------------------------------------------------
// 객체 프로퍼티 삭제
//--------------------------------------------------------------------------------
var foo = {
    name: 'foo',
    nickname: 'babo'
};

console.log(foo.nickname);  // babo
delete foo.nickname;
console.log(foo.nickname);  // undefined

delete foo; // Property 만 삭제 가능
console.log(foo.name);  // foo