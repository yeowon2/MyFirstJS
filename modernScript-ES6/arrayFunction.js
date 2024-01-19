/* 
[배열함수 리스트]
    - forEach : 반환값이 없음 (단순 for문과 같이 작동함)
    - map : 반환값을 배열에 담아 반환함
    - filter : 조건에 충족(true)하는 아이템만 배열에 담아 반환함
    - some : 조건에 충족하는 아이템이 하나라도 있으면 true 반환, 아니면 false 반환
    - every : 모든 배열에 아이템이 조건을 충족하면 true 반환, 아니면 false
    - find : 조건에 충족하는 아이템 하나만 반환 (여러 개라면 첫 번째것만 반환)
    - findIndex : 조건에 충족하는 아이템의 인덱스값을 반환 (여러 개라면 첫 번째 아이템의 인덱스 번호만 반환)
*/

let month = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
]

/* for (let i = 0; i < month.length; i++) {
    console.log("🚀 ~ month:", month[i])
} */


// 1. function을 직접 만들어서 forEach에 대입하는 방법
function printMonth(item) {
    console.log("🚀 ~ printMonth ~ item:", item);
}

month.forEach(printMonth); 

// 2. forEach 안에 익명함수를 넣어서 사용하는 방법
month.forEach(function (item) {
    console.log("🚀 ~ use anonymous function ~:", item);
}); 

// 3. es6 문법을 사용하여 출력하는 방법
month.forEach(item => { console.log("index없이 item 출력 :",item)});
month.forEach((item, index) => { console.log("index추가하여 item 출력 :",item, index)});

// 4. map 함수 이용 -> return 필요
// ✨ 객체에서 필요한 값만 가지고 오고 싶을 때 사용
let data = month.map((item, index)=>{
    return item
})
console.log("🚀 ~ data ~ data:", data);

