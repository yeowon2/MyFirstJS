/* 1. let : 가변의 값을 가진 변수를 선언하는 키워드 
    String, number(정수), boolean 등 타입들을 넣어줄 수 있음 
    또한 연산도 가능함 (자바와 비슷한 성질) */

// 2. var : 가변의 값을 가진 변수를 선언하는 키워드 (하지만 이젠 쓰지 않음)
let color = "pink";

// 3. const : 불변의 값을 가진 변수를 선언하는 키워드
const password = "black";

// 문제 =================================================================================
// 1. a와 b의 값을 바꾸시오 
let a = 1
let b = 2
// console.log(a,b) // 1,2

let temp = 0;

temp = a
a = b
b = temp

console.log(a,b)

// 2. 다음 연산자들의 결과값을 예측한 후 console.log를 통해 확인해보시오 
20 + 30 // 50
console.log(20+30)
"20" + "30" // 2030
console.log("20" + "30")
"Hello"+""+2021 // Hello2021
console.log("Hello"+""+2021)
1+2*3 // 9 -> 곱하기 먼저 => 7
console.log(1+2*3)
//(1+3)**2 //16?
console.log( (1+3)**2 );
1/0 // infinite
console.log("🚀 ~ 1/0:", 1/0)
6%2 // 0
console.log("🚀 ~ 6%2:", 6%2)
7.5 % 2 //0.1 -> 몫에 대해서 물어보는 거니까 1.5
console.log("🚀 ~ 7.5 % 2:", 7.5 % 2)
5 == 5 // true
console.log("🚀 ~ 5 == 5:", 5 == 5)
5 === 5 // true
console.log("🚀 ~ 5 === 5:", 5 === 5)
5 == "5" // true (== 비교 연산자 : 둘의 값이 같으면 참을 반환)
console.log("🚀 ~ 5 == \"5\":", 5 == "5")
5 === "5" // false (=== 비교 연산자 : 둘의 값이 같고 타입 역시 같으면 참을 반환)
console.log("🚀 ~ 5 === \"5\":", 5 === "5")
5 != 5.0 // true -> false (!= 비교 연산자 : 값이 같지 않으면 참을 반환)
console.log("🚀 ~ 5 != 5.0:", 5 != 5.0)
5 !== 5.0 // -> false (!== 비교 연산자 : 둘의 값이 같지 않거나 타입이 다르면 참을 반환)
console.log("🚀 ~ 5 !== 5.0:", 5 !== 5.0)
5 <= 5.0 // true
console.log("🚀 ~ 5 <= 5.0:", 5 <= 5.0)
5 >= 5 // true
console.log("🚀 ~ 5 >= 5:", 5 >= 5)
true || true // true
console.log("🚀 ~ true || true:", true || true)
true || false // true
console.log("🚀 ~ true || false:", true || false)
true && true // true
console.log("🚀 ~ true && true:", true && true)
true && false // false
console.log("🚀 ~ true && false:", true && false)
!true // false
console.log("🚀 ~ !true:", !true)
!false // true
console.log("🚀 ~ !false:", !false)





