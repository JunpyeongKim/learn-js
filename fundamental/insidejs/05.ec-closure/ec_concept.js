/**
 *
 * 5.1 Execution Context 개념
 *  - Call Stack 에 들어가는 실행 정보 하나와 비슷
 *  - ECMAScript
 *      - 실행 가능한 코드를 형상화하고 구분하는 추상적인 개념 --> 실행 가능한 자바스크립트 코드 블록이 실행되는 환경
 *      - 이 Context 안에 실행에 필요한 여러 가지 정보 저장
 *      - Execution Context 가 생성되는 경우 3가지
 *          - 1) 전역 코드
 *          - 2) eval() 함수로 실행되는 코드
 *          - 3) 함수 안의 코드
 *      - Execution Context 생성
 *          - 현재 실행되는 Context 에서 이 Context 와 관련 없는 실행 코드가 실행되면,
 *          - 새로운 Context 가 생성되어 Stack 에 들어가고 제어권이 그 Context 로 이동한다.
 *
 */


//------------------------------------------
// Example 5-1
console.log('This is global context.');

function ExContext1() {
    console.log('This is ExContext1');
}

function ExContext2() {
    ExContext1();
    console.log('This is ExContext2');
}

ExContext2();