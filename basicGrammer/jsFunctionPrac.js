// 1. 문장을 프린트하는 함수 'greet'만들기
function greet_1() {
    console.log("안녕 내 이름은 제시카야");
};

greet_1();

// 2. 이름을 매개변수로 전달받아 다양한 이름을 프린트하는 함수로 수정하기
function greet_2(name) {
    console.log("안녕 내 이름은", name, "야");
};

greet_2("애밀리");
greet_2("할리");

// 3. 매개변수로 전달받은 이름을 반환하게 함수를 수정하기
function greet_3(name) {
    return name;
};

greet_3("원원");
console.log("🚀 ~ greet_3(\"원원\"):", greet_3("원원"));
greet_3("복희");
console.log("🚀 ~ greet_3(\"복희\"):", greet_3("복희"));

// 4. meetAt() 함수 만들어주기

function meetAt(year, month, day) {
    if(month == null && day == null) {
        return year + "년";
    } else if (day == null) {
        return year + "년 " + month + "월"
    } else {
        return year + "/" + month + "/" + day
    }
};

let result = meetAt(2022, 10, 5);
console.log("🚀 ~ result:", result);

// 5. findSmallestElement 함수 만들기 
function findSmallestElement(arr) {
    let min = arr[0];
    if (arr.length === 0 ) {
        return 0;
    }

    for (let i = 1; i < arr.length; i++) {
        if(min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}

let smallestElement = findSmallestElement([100, 200, 3, 200, 2, 1]);
console.log("🚀 ~ smallestElement:", smallestElement);


// 6. 돈을 매개변수로 받아 몇 개의 지폐와 동전이 필요한지 최소 개수를 계산해주는 함수 만들기
/* function countMoney(money) {
    let first = money / 50000;
    console.log("🚀 50000 *", first);
    let last = money - (50000 * first);

    let second = last / 10000;
    console.log("🚀 10000 *", second);
    last = last - (10000 * second);

    let third = last / 5000;
    console.log("🚀 5000 *", third)
    last = last - (5000 * third);

    let forth = last / 1000;
    console.log("🚀 1000 *", forth)
    last = last - (1000 * forth);

    let fifth = last / 500;
    console.log("🚀 500 *", fifth)
    last = last - (500 * fifth);

    let sixth = last / 100;
    console.log("🚀 100 *", sixth)
};

countMoney(12300);
 */

let unit = [50000, 10000, 5000, 1000, 500, 100];
function changeCalc(money) {
    for (let i = 0; i < unit.length; i++) {
        
        let num = Math.floor(money / unit[i]);  // ✨ JS에서는 연산의 값이 floor 타입으로 나오기 때문에 parseInt()나 Math.floor()함수를 써줘야 함
        console.log(unit[i] + "X" + num);

        money = money - (unit[i] * num);
    }
};

changeCalc(12300);