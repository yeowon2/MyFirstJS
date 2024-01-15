// 1. for문 : 정확히 몇 번을 회전해야 하는지 범위를 알 때 사용 
// for(초기식; 조건식; 증감식)
// array.length : 배열의 길이값을 반환해줌으로 for문의 조건식에 넣어줄 수 있음
/* for(let i = 1; i < 10; i++) {
    console.log("구구단 " + i + "단 시작")
    for(let j = 1; j < 10; j++) {
        console.log(i + " * " + j + " = " + i*j);
    }
} */

// 2.  while 문 : 주로 정확한 번위가 아닌 상태에 따라서 반복할 때 사용 
// while(조건식)

// - 무한 반복 : while(true) 혹은 for( ; ; ) 으로 할 수 잇음 
// - break : 반복문의 탈출구

// 문제 ================================================================================
// 1. 1부터 100까지 더하는 for문을 만들고 출력하기
let sum = 0;

for(let i = 1; i <= 100; i++) {
    sum += i;
}

console.log("🚀 ~ sum:", sum);

// 2. 1부터 100까지 홀수 출력하기
let odd = "";
for (let i = 1; i <= 100; i = i+2) {
    odd += i + " ";
}
console.log("🚀 ~ odd:", odd);

// 3. 1부터 50까지 369 결과를 프린트하자 
for(let i = 1; i <=50; i++){
    let stringValue = i.toString(); // 숫자 타입인 i를 문자열(String) 타입으로 변환
    let result = "";

    for(let j = 0; j<stringValue.length; j++){
        if(stringValue[j]=="3" || stringValue[j]=="6" || stringValue[j]=="9")
            result += "짝";
    }
    console.log(result.length > 0 ? result : i);
}

// 4. 주어진 숫자가 소수면 true, 아니면 false를 출력하는 프로그램 짜기
let n = 11; 
let isPrime = true;

if(n === 1){
    isPrime = false;
}

for (let i = 2; i < n; i++) {
    if(n % i == 0) {
        isPrime = false; 
    }
}
console.log(isPrime);