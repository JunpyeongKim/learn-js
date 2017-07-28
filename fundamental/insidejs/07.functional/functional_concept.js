/**
 *
 * 7. Functional Programming
 *  - (*) Programming 의 여러 Paradigm 중 하나.
 *      - 개념이 수학자의 머리에서 출발
 *      - JavaScript 로 Functional Programming 에서 제시하는 방법론 중 일부는 구현 가능하지만
 *        순수한 Functional Programming Language 는 아님.
 *        --> Lisp, Haskell 을 사용하라.
 *
 * 7.1 Functional Programming 의 개념
 *  - (*) Functional Programming --> function 의 조합으로 작업을 수행
 *      - 작업의 필요한 데이터와 상태는 변하지 않는다. --> 변할 수 있는 것은 오로지 function 뿐이다.
 *
 *  - 암호화 함수를 새롭게 만드는 방식으로 암호화 방법을 개선 가능
 *    즉, pure function 구현으로 모듈 집약적인 프로그래밍이 가능하다.
 *
 *  - (*) 명령형 프로그래밍 (Imperative Programming)
 *      - 함수 = 순수한 의미의 함수 + Procedure(특정 작업을 수행하는 함수)
 *          - ex) int ret = printf("print this to screen")
 *              - 결과값(보조적 역할)이 아닌, printf() 가 실행되면서 화면에 출력되는 동작이 중요
 *          - ==> 특정 작업의 순차적인 명령을 기술하는데 중점
 *              - Functional Programming 의 Pure function 과 다르다.
 */

//Pseudo Code
/*
// 특정 문자열을 암호화 하는 함수들
//  - 입력값이 정해지지 않고, 서로 다른 암호화 알고리즘만 있다.
//  - "Pure function" 이라고 한다.
f1 = encrypt1;
f2 = encrypt2;
f3 = encrypt3;

// 암호화할 문자열
//  - 작업이 수행되는 동안 변하지 않는다.
pure_value = 'zzoon';

// 암호화 함수를 받아서 이 함수로 pure_value 를 암호화 후 반환
//  - 작업하는 동안 변할 수 있는 것은 단지 입력 함수뿐.
//  - 즉, f1, f2, f3 는 외부에 아무런 영향을 미치지 않는 함수 <-- Pure function
// 결과 값(반환 값)을 다른 형태의 함수로서 반환 가능
//  - 함수를 또 하나의 값으로 간주하여 함수의 인자 혹은 반환값으로 사용할수 있는 함수 <-- Higher-order function
encrypted_value = get_encrypted(x);

encrypted_value = get_encrypted(f1);
encrypted_value = get_encrypted(f2;
encrypted_value = get_encrypted(f3);
*/
