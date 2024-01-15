// - 함수 : 일의 단위 == 메서드 
/* 
    function 함수이름 (매개변수) { ➡️ 매개변수 : 함수에 전달해야 하는 내용이 있을 때 이 함수가 실행될 때 알아야되는 내용이 있을 때 매개변수를 통해 전달
        내용 입력
        return 반환값 (➡️ 함수가 완료된 후 반환되어야 하는 값이 있을 때 사용)
    }
*/
function makeBurger(type) {
    console.log("빵 두기");
    console.log("상추 두기");

    if(type == "불고기"){
        console.log("고기 패티 두기");
    } else if (type == "새우") {
        console.log("새우 패티 두기");
    }

    console.log("빵으로 덮기");

    return "완료되었습니다.";
};

function serverCoke() {
    console.log("콜라통 선택");
    console.log("얼음 담기");
    console.log("콜라 담기");
};

function serverFrenchFries() {
    console.log("감자튀김 박스 선택");
    console.log("감자튀김 담기");
};

function makeSet() {
    makeBurger("불고기");
    serverCoke();
    serverFrenchFries();
};

let result = makeBurger("새우"); // 함수를 만들어주고 난 다음 선언을 해주어야 콘솔에 찍히게 됨 
console.log("버거 프로세스 결과 ", result);

makeSet();

// 1. 익명 함수(Anonymous function) : 이름이 없는 함수 ➡️ 함수를 변수에 넣어줄 때 일시적으로 쓰이고 말함수들에 대해서 익명함수로 만들어줌

// 2. 람다식 함수 : =>를 사용하여 함수를 정의하는 경우 
/* let arrowFunction = (y) => {console.log)(y);} */

// 3. 콜백 함수 : 다른 함수의 매개변수로 전달된 함수 ➡️ 주로 어떤 함수에 매개변수로 들어가 어떤 특정한 조건이 되었을 때만 호출이 됨
/*
    button.addEventListener("click", setCount)
    // 버튼에 클릭 이벤트가 발생했을 때 setCount 함수를 콜한다 
    function setCount() {
        count ++ 
    }
*/