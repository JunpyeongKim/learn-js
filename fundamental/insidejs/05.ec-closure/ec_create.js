/**
 *
 * 5.2 Execution Context 생성 과정
 *  - Activation Object & Variable Object
 *  - Scope Chain
 *  - Closure
 *
 *  ( Execution Context 생성 )
 *
 *  - 5.2.1 Activation Object (= Variable Object) 생성
 *      - 해당 Execution Context 에서 실행에 필요한 여러 가지 정보를 담을 객체인 Activation Object 을 생성.
 *        <-- JavaScript Engine 내부에서 접근 가능
 *
 *  - 5.2.2 arguments 객체 생성
 *      - Activation Object 는 "arguments" property 로 arguments 객체를 참조
 *
 *  - 5.2.3 Scope 정보 생성
 *      - Context 의 유효 범위 --> Scope
 *      - Scope Chain
 *          - [[Scope]] property 로 참조된다. --> Linked List 와 유사
 *          - 현재 생성된 활성 객체가 Scope Chain 의 제일 앞에 추가된다.
 *          - ex) 특정 변수에 접근해야할 경우,
 *                이 리스트를 활용하여 현재 Context 의 변수뿐 아니라, 상위 Execution Context 의 변수도 접근 가능.
 *
 *  - 5.2.4 변수 생성
 *      - Execution Context 내부에서 사용되는 지역 변수 생성
 *      - 변수나 내부 함수를 단지 메모리에 생성(instantiation)만 한다.
 *          - (*) initialization 은 표현식이 실행될때 이루어 진다. --> 5.2.6 코드 실행
 *      - ex) "execute" Execution Context 의 변수
 *          - param1, param2, a, b, func
 *
 *  - 5.2.5 this 바이딩
 *      - 마지막 단계로 this 가 바인딩 된다.
 *
 *  - 5.2.6 코드 실행
 *      - Expression 이 실행된다.
 *      - (*) Global Execution Context
 *          - arguments 객체가 없으며,
 *          - 전역 객체 하나만을 포한하는 Scope Chain 이 있다.
 *          - 전역 객체 === 변수 객체
 *          - this : 전역 객체에 바인딩
 */

//------------------------------------------
// Example 5-2
function execute(param1 ,param2) {
    var a = 1, b = 2;

    function func() {
        return a + b;
    }

    return param1 + param2 + func();
}

execute(3, 4);
