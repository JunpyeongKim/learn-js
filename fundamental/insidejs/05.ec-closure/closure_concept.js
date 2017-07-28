/**
 *
 * 5.4 클로저
 *
 *  - 5.4.1 클로저의 개념
 *      - Closure : 이미 생명주기가 끝난 외부 함수의 변수를 참조하는 함수.
 *      - (*) 여러 언어에서 차용되고 있다.
 *          - 함수를 First Class 로 취급하는 언어 (보통, Functional Language)에서 주요하게 사용된다.
 *
 *  ==> JavaScript 의 강력한 기능중 하나이다.
 *
 */

//------------------------------------------
// Example 5-7
//  - outerFunc EC는 사려졌지만, outerFunc 변수 객체는 여전히 남아있고, innerFunc 의 Scope Chain 으로 참조되고 있다.
//  - innerFunc --> "Closure" , x --> "Free Variable"
//      ==> x : innerFunc()의 [[scope]] 으로 참조되므로 GC의 대상이 되지 않는다.

function outerFunc() {
    var x = 10;
    var innerFunc = function () { console.log(x); };

    return innerFunc;
}

var inner = outerFunc();
inner();    // 10


//------------------------------------------
// Example 5-8
//  - 대부분의 Closure 가 Scope Chain 의 뒤쪽에 있는 객체에 자주 접근하므로, 성능을 저하가 발생하기도 한다.
//  - 또한, Closure 를 사용한 코드가 메모리 부담이 많다.
function outerFunc2(arg1, arg2) {
    var local = 8;
    function innerFunc2(innerArg) {
        console.log((arg1 + arg2) / (innerArg + local));
    }

    return innerFunc2;
}

var exam1 = outerFunc2(2, 4);
exam1(2);   // 0.6