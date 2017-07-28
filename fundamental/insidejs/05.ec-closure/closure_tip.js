/**
 *
 * 5.4.3 Closure 를 활용할 때 주의 사항
 *
 *  - 5.4.3.1 Closure 의 property 값이 쓰기 가능하므로 그 값이 여러 번 호출로 항상 변할 수 있음에 유의 필요
 *
 *  - 5.4.3.2 하나의 Closure 가 여러 함수 객체의 Scope Chain 에 들어가 있는 경우도 있다.
 *
 *  - 5.4.3.3 Loop 안에서 Closure 활용할 때는 주의 필요
 *
 *
 */


// 5.4.3.1 Closure 의 property 값이 쓰기 가능하므로 그 값이 여러 번 호출로 항상 변할 수 있음에 유의 필요
//------------------------------------------
// Example 5-14
console.log('Closure Tips : Free Variable...');
function outerFunc(argNum) {
    var num = argNum;

    return function (x) {
        num += x;
        console.log('num :', num);
    };
}

var exam = outerFunc(40);
exam(5);    // 45
exam(-10);  // 35


// 5.4.3.2 하나의 Closure 가 여러 함수 객체의 Scope Chain 에 들어가 있는 경우도 있다.
//------------------------------------------
// Example 5-15
console.log('\nClosure Tips : Scope Chain...');
function func() {
    var x = 1;

    return {
        func1: function () { console.log(++x); },
        func2: function () { console.log(-x); }
    };
}

var exam = func();
exam.func1();   // 2
exam.func2();   // -2

// 5.4.3.3 Loop 안에서 Closure 활용할 때는 주의 필요
//------------------------------------------
// Example 5-16
console.log('\nClosure Tips : Loop...');
function countSeconds(howMany) {

    // i : free variable
    for (var i = 1; i <= howMany; i++) {
        setTimeout(function () {
            console.log('Loop :', i);
        }, i * 1000);
    }
}

countSeconds(3);    // 4 4 4

//------------------------------------------
console.log('\nClosure Tips : Modified Loop...');
function countSeconds2(howMany) {

    for (var i = 1; i <= howMany; i++) {
        // i : local variable
        // currentI : free variable
        (function (currentI) {
            setTimeout(function () {
                console.log('Modified Loop :', currentI);
            }, currentI * 1000);
        })(i);
    }
}

countSeconds2(3);    // 1 2 3
