/**
 * Item 2. Understand JavaScript's Floating-Point Numbers
 *
 * 숫자는 double-정확도의 부동 소수점
 * 정수는 double의 부분집합
 * 비트단위 연산자는 숫자를 32bit integer처럼 처리
 * 부동 소수점은 정확도에 한계
 *
 */

// 숫자형 데이터 단 하나밖에 없다 --> "number"
// IEEE 754
//  - 64 bit double
//  - integer : double의 53bit 까지의 정확도록 완벽하게 표현
//      - 즉, 정수는 double의 부분 집합
console.log(typeof 17);  // "number"가능
console.log(typeof 98.6);    // "number"
console.log(typeof -2.1);    // "number"

// bitwise operation : 32bit integer로 변환하여 처리
//  - 32bit, big-endian, 2의 보수

8 | 1;  // 9
    // 8, 1 : double
    // 32bit 정수형으로 처리

(8).toString(2);  // "1000", 2 : radix

parseInt("10001", 2);   // 9

// 부동 소수점 숫자는 부정확하다
console.log(0.1 + 0.2);   // 0.30000000000000004

console.log((0.1 + 0.2) + 0.3); // 0.6000000000000001
console.log(0.1 + (0.2 + 0.3)); // 0.6

// -->
console.log((10 + 20) + 30); // 60
console.log(10 + (20 + 30)); // 60
