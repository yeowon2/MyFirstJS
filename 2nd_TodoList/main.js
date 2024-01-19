// 유저가 input에 값을 입력하고 ADD 버튼을 누르면 할일이 추가됨
// DELETE 버튼을 누르면 삭제됨
// CHECK 버튼을 누르면 취소선이 생성됨
// 탭을 누르면 언더바가 이동
// 탭에 맞는 아이템들이 나오게 됨 
// ====================================================================

let taskInput = document.getElementById("taskInput");
let addButton = document.getElementById("addButton");
let tabs = document.querySelectorAll(".taskTabs div");
addButton.addEventListener("click", addTask);
let taskList = [];
// 원래는 filter 함수 안에 있던 지역 변수를 render 함수에서도 쓸 수 있도록 전역변수로 변경해줌 (기본값 : all)
let mode = 'all';
let filterList = [];

for (let i = 1; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function(event){
        filter(event);
    });
}

function addTask() {
    // console.log("click");
    let task = {
        id: randomIdGenerate(),
        taskContent: taskInput.value,
        isComplete: false,
    };

    taskList.push(task);
    console.log(taskList);
    render();
};

function filter(event) { // event : 우리가 누구를 클릭했는지에 대한 정보를 addEventListener에게 받아서 저장되어 있음 
    mode = event.target.id;
    filterList = [];

    if(mode === "all") {
        // 전체 리스트를 보여준다
        render();
    } else if (mode === "ongoing") {
        // 진행중인 아이템을 보여준다 task.isComplete= false
        for (let i = 0; i < taskList.length; i++) {
            if(taskList[i].isComplete === false) {
                filterList.push(taskList[i]);
            }
        }

        render();

    } else if (mode === "done"){
        // 끝나는 케이스 task.isComplete = true
        for (let i = 0; i < taskList.length; i++) {
            if(taskList[i].isComplete === true) {
                filterList.push(taskList[i]);
            }
        }

        render();
    }
}

// UI와 관련된 함수인 RENDER
function render(){
    let list = [];
    // 1. 내가 선택한 탭에 따라서
    if (mode === "all"){
        // all = taskList
        list = taskList;
    } else if (mode === "ongoing" || mode === "done") {
        // ongoing, done : filterList
        list = filterList;
    }

    // 2. 리스트를 달리 보여준다.
    let resultHTML = "";
    for (let i = 0; i < list.length; i++) {
        if (list[i].isComplete == true) {
            resultHTML += `
                <div class="task">
                    <div class="taskDone">${list[i].taskContent}</div>
                    <div>
                        <button onclick="toggleComplete('${list[i].id}')" class="btn btn-sm btn-outline-dark">RETURN</button>
                        <button onclick="deleteTask('${list[i].id}')" class="btn btn-sm btn-danger">DELETE</button>
                    </div>
                </div>
            `;
        } else {
            resultHTML += `
                <div class="task">
                    <div>${list[i].taskContent}</div>
                    <div>
                        <button onclick="toggleComplete('${list[i].id}')" class="btn btn-sm btn-success">CHECK</button>
                        <button onclick="deleteTask('${list[i].id}')" class="btn btn-sm btn-danger">DELETE</button>
                    </div>
                </div>
            `;
        }
    };

    document.getElementById("taskBoard").innerHTML = resultHTML;
};

function toggleComplete(id) {
    //console.log("id:", id);
    for (let i = 0; i < taskList.length; i++) {
        if(taskList[i].id == id){
            taskList[i].isComplete = !taskList[i].isComplete;
            break;
        }
    }
    render();
    // console.log(taskList);
};

function deleteTask(id) {
    // console.log("DELETE", id);
    for (let i = 0; i < taskList.length; i++) {
        if(taskList[i].id == id){
            taskList.splice(i, 1);
            break;
        }
    }
    console.log(taskList);
    render();
};

function randomIdGenerate() {
    return Math.random().toString(36).substr(2, 16);
};

