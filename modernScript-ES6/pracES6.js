// 1. 다음 코드를 es6 문법을 이용하여 재작성하기
/*  문제 
    let name = "won's fruit store"
    let fruits = ["banana", "apple", "mango"];
    let address = "Daegu";

    let store = {name: name, fruits: fruits, address:address};
    console.log(store);
    */

    /* 답
    let name = "won's fruit store"
    let fruits = ["banana", "apple", "mango"];
    let address = "Daegu";

    let store = {name, fruits, address};
    console.log(store); */

// 2. es6 문법을 이용하여 문자열 출력하기
// console.log(`제 가게 이름은 ${name}이고, 가게의 위치는 ${address}에 있습니다.`);

// 3. destructuring을 이용하기 
function calculate(obj) {
    let {a, b, c} = obj;

    return a+b+c;
}

calculate({a:1, b:2, c:3});
console.log("🚀 ~ calculate({a:1, b:2, c:3}):", calculate({a:1, b:2, c:3}));

// 4. true가 출력되도록 하기
    let name = "won's store"
    let fruits = ["banana", "apple", "mango"];
    let address = {
        country: "Korea",
        city: "Daegu",
    };

    function findStore(obj) {
        let {name, address : {city}} = obj

        return name = "one's store" && city == "Daegu";
    }

    console.log(findStore({name, fruits, address}));

// 5. 다음과 같이 프린트 되도록 코드 바꾸기
function getNumber(){
    let array = [1,2,3,4,5,6];
    let [first, ,third,forth] = array;

    return {first, third, forth};
};

console.log("🚀 ~ getNumber ~ getNumber():", getNumber()); // 이 때 결과값 : { first : 1, third : 3, forth : 4}

// 6. 다음의 결과가 true가 되도록 하기
function getCalender(first, ...rest) {
    return (
        first == "January" &&
        rest[0] == "Feburary" &&
        rest[1] == "March" &&
        rest[2] == undefined
        )
    };
    
console.log("🚀 ~ getCalender ~ getCalender(first, ...rest):", getCalender("January", "Feburary", "March"));