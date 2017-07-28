/**
 *
 * 5.3 Scope Chain
 *
 * (*) 자바스크립트 언어에도 Scope, 즉 유효 범위가 있다.
 *  - 이 유효 범위 안에서 변수와 함수가 존재한다.
 *
 * Scope Chain
 *  - Execution Context 의 변수 객체가 구성요소인 리스트
 *
 *  - 5.3.2 함수를 호출할 경우 생성되는 실행 컨텍스트의 스코프 체인
 *      - Scope Chain = 현재 실행 컨텍스트의 변수 객체 + 상위 컨텍스트의 Scope Chain
 *
 *  - (*) with
 *      - Scope Chain 을 임의로 수정가능한 키워드
 *      - eval()과 함께 성능을 높이고자 자바스크립트 개발자가 사용하지 말아야할 키워드
 *      - "pure javascript evil" 이라고까지...
 *
 *  - Scope Chain 이해하면 --> Hoisting 이해 가능
 *
 */


//------------------------------------------
// Example 5-4
//  - 전역 EC([[scope]], var1, var2, func, this) --> func EC([[scope], var1, var2, this)
console.og('Scope Chain: ...');
var var1 = 1;
var var2 = 2;

function func() {
    var var1 = 10;
    var var2 = 20;

    console.log(var1);  // 10
    console.log(var2);  // 20
}

func();
console.log(var1);  // 1
console.log(var2);  // 2

//------------------------------------------
// Example 5-5
//  - 전역 EC([[scope]], this, value) --> printFunc EC([[scope]], this, value, printValue) --> printValue EC([[scope]], this)
console.og('\nScope Chain: ...');
var value = 'value1';

function printFunc() {
    var value = 'value2';

    function printValue() {
        return value;
    }

    console.log(printValue());  // value2
}

printFunc();


//------------------------------------------
// Example 5-5
//  - 각 함수 객체가 처음 생성될 당시 EC 가 무엇인지 중요.
//      ==> 각 함수 객체가 처음 생성될 때 [[scope]] 전역 객체의 [[scope]]를 참조한다.
console.og('\nScope Chain: ...');
var value1 = 'value1';

function printValue2() {
    return value1;
}

function printFunc2(func) {
    var value1 = 'value2';
    console.log(func());    // value1
}

printFunc2(printValue2);

//------------------------------------------
// NOTE
//  - with(y) : y가 scope chain 의 제일 앞에 추가된다.
//      - 전역 객체 --> withExamFunc 변수 객체 --> z 변수 객체 --> y 객체

var y = { x: 5 };

function withExamFunc() {
    var x = 10;
    var z;

    with(y) {
        z = function () {
            console.log(x);
        };
    }

    z();
}

withExamFunc();
