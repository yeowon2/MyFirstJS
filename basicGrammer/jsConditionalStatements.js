// 1. if 
// if문 같은 경우 조건에 참이 나오게 되면 그 조건에 맞는 값을 출력하고 전체 if문은 종료해버림

let age = 21; 
let license = true;

if(age >= 18) {
    if(license == true) { // 이런 식으로 이중 if문(중첩 if문)이 가능하다는 것을 알 수 있음
        console.log("운전이 가능합니다!");
    } else {
        console.log("운전은 가능하지만 운전 면허가 없습니다. 운전 면허를 따세요!");
    }
} else {
    console.log("운전이 불가능합니다.");
}

// 첫 번째 조건에 부합해서 "오토바이 운전이 가능합니다."이 출력되고 난 다음 if문은 종료가 됨 
// => 조건이 작은 것부터 큰 것의 순서로 적어주기 

// 2. switch 
// 조금 더 간결하고 의미가 명확해보인다는 장점이 존재하며 case가 값으로 딱 정해진 경우에만 사용 가능
// 조건이 비교식일 경우 사용 불가
// break를 매번 case마다 적어줘야 하는 이유는 적어주지 않는다면 밑에 있는 케이스들도 다 들리기 때문 (모든 값을 출력하게 된다)
// default = else처럼 매칭되는 case가 없을 때 실행됨
let menu = 1;

if(menu == 1) {
    console.log("물건 사기")
} else if(menu == 2) {
    console.log("잔고 확인")
} else if(menu == 3) {
    console.log("히스토리 확인")
} else {
    console.log("홈으로 돌아가기")
}

switch (menu) {
    case 1 :
        console.log("물건 사기");
        break;
    case 2 :
        console.log("잔고 확인");
        break;
    case 3 :
        console.log("히스토리 확인");
        break;
    default :
        console.log("홈으로 돌아가기");
        break;
};


// 3. 삼항연산식 
// : if문을 간단하게 표현할 수 있음
// 조건에 따라 실행하는 내용이 다르며 실행하는 내용이 한 가지일 때 사용하기 좋음 
// 조건식 ? 참일 때 : 거짓일 때 
let answer = menu <= 3? menu : "범위 밖의 숫자입니다.";

let answer2 = food == "피자" ? "피자 좋아" : food == "햄버거"? "햄버거 좋아" : "다 싫어"

// 문제 ======================================================================================================
// 1. 유저가 입력하는 숫자가 0인지 양수인지 음수인지 판단하는 프로그램 만들기
let number = 20;

if(number > 0 ) {
    console.log("🚀 ~ number는 양수입니다!")
} else if (number == 0) {
    console.log("🚀 ~ number는 0입니다!")
} else {
    console.log("🚀 ~ number는 음수입니다!")
}

// 2. 레포트 점수에 따라 등급을 매기는 프로그램을 만드시오 
let report = 78;

if (report >= 90) {
    console.log("🚀 ~ report : ", report, "점이니 A등급입니다.");
} else if (report >= 80 && report < 90) {
    console.log("🚀 ~ report : ", report, "점이니 B등급입니다.");
}  else if (report >= 70 && report < 80) {
    console.log("🚀 ~ report : ", report, "점이니 C등급입니다.");
}  else if (report >= 60 && report < 70) {
    console.log("🚀 ~ report : ", report, "점이니 D등급입니다.");
}  else {
    console.log("🚀 ~ report : ", report, "점이니 F등급입니다.");
} 

// 3. 지원자의 사용 가능한 스킬이 적힌 배열을 보고 합격/예비/불합격을 보여주는 프로그램 만들기

let skills = ["HTML", "CSS"];
console.log("🚀 ~ input skills = ", skills);

if (skills.includes("JS") && skills.includes("React")){
    console.log("output : 합격");
} else if (skills.includes("JS") || skills.includes("React")) {
    console.log("output : 예비");
} else {
    console.log("output : 탈락");
}
