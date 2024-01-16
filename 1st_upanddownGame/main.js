// 1. 랜덤번호 지정
// 2. 유저가 번호를 입력하고 'GO'라는 버튼을 누름 
// 3. 유저가 번호를 맞췄으면 "맞췄습니다!"
// 4. 랜덤번호보다 낮으면 UP, 랜덤번호보다 높으면 DOWN
// 5. 5번의 기회를 다쓰면 게임이 끝나며 GO 버튼이 DISABLED 됨
// 6. RESET 버튼을 누르면 게임이 리셋 
// 7. 유저가 1~100 범위 밖의 숫자를 입력하면 알려주며 기회를 깎지 않는다.
// 8. 유저가 이미 입력한 숫자를 입력하면 알려주며 기회를 깎지 않는다.
// ======================================================================================

let randomNumber = 0;   // 랜덤 번호
let chances = 5;    // 번호를 넣을 수 있는 기회 갯수
let gameOver = false;
let history = [];

let userInput = document.getElementById("userInput");   // 유저가 입력한 번호
let goButton = document.getElementById("goButton");
let resultArea = document.getElementById("resultArea"); // 결과값
let resetButton = document.getElementById("resetButton");
let chanceArea = document.getElementById("chanceArea");

// GO 버튼을 누를 때 랜덤번호와 유저번호를 비교하기 위한 코드
goButton.addEventListener("click", play);

resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function () {
    // 여기서 function() : 익명함수 (내용이 크게 없고 다른 곳에서 쓰지 않으며 userInput만 잠깐 쓰고 마니까 익명함수를 사용함)
    userInput.value = "";
});

function play() {
    let userValue = userInput.value;

    // 유효성 검사
    if(userValue < 1 || userValue > 100) {
        alert("PLEASE CHECK NUMBER (1~100)");
        return;
    }
    // 중복성 검사
    if(history.includes(userValue)){
        alert("ALREADY EXISTS NUMBER");
        return;
    }

    chances--;
    chanceArea.textContent = `LEFT CHANCE =  ${chances}`;
    // console.log("🚀 ~ play ~ chances:", chances)

    if(userValue < randomNumber) {
        resultArea.textContent = "UP";
    } else if (userValue > randomNumber) {
        resultArea.textContent = "DOWN";
    } else {
        resultArea.textContent = "CORRECT";
        gameOver = true;
    }

    history.push(userValue);
    console.log("🚀 ~ play ~ history:", history);
    

    if(chances < 1) {
        gameOver = true;
    }

    if(gameOver == true) {
        goButton.disabled = true;
    }


}

function reset() {
    // user input 창이 깨끗하게 정리되고 
    userInput.value = "";
    // 새로운 번호가 생성되어야 함
    pickRandomNum();
    resultArea.textContent = "결과값이 여기에 나타납니다.";
}

function pickRandomNum() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log("🚀 정답", randomNumber);
};

pickRandomNum();
