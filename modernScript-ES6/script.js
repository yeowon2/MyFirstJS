let name = "wonwon";
let age = 20;

let person = {name:name, age:age}; // 오래된 버전
console.log("🚀 ~ person:", person)

let onewon = {name, age}; // 요즘 쓰는 문법 방식 (동일한 이름과 value 라면 한 번만 적음)
console.log("🚀 ~ onewon:", onewon)

// 2. destructuring
let aespa = {
    teamName : "에스파",
    num : 4,
};

let {teamName, num} = aespa; // destructuring
console.log(teamName, num);

// 3. 백틱
console.log(`제 이름은 ${name}이며  나이는 ${age}입니다.`);

// 4. 배열
let array = [1, 2, 3];
let [a, b, c] = array;
console.log("🚀 ~ a, b, c:", a, b, c);

// 4-1) 배열의 spread 연산자 (...) => 객체에서도 사용할 수 있음 
let array1 = [1, 2, 3];
let[x, ... rest] = array1;
console.log("🚀 ~ x:", x);
console.log("🚀 ~ rest:", rest);

let o = [1,2];
let p = [3,4];
let q = [5,6];

let result = o.concat(p,q);
let result1 = [...o, ...p, ...q];
console.log("🚀 ~ result:", result)
console.log("🚀 ~ result1:", result1)

// 5. ✨ 함수 적용 방식 (return 생략 가능, 실행문이 한 줄이라면 중괄호 생략 가능)
// 화살표 방식으로 함수를 간단하게 표현할 수 있지만 완전 대체 가능하지 않음
// 바로 this 때문! (this : 함수를 부르는 객체 -> 화살표 함수는 이를 가지고 있지 않음)
let foo = () => {
    console.log("hello");
}

let myAge = 20;
let onePerson = {
    myName: "won2",
    myAge: 30,
    getInfo: function() {
        console.log("🚀 ~ myAge:", myAge); 
        console.log("🚀 ~ this.myAge:", this.myAge); // 객체 안의 값을 가져오기 위해서 this를 사용 
        console.log("🚀 ~ ", this); 
    } 
}

onePerson.getInfo();