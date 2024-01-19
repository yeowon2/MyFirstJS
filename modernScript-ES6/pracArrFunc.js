let names = [
    "Steven Paul Jobs", "Bill Gates", "Mark Elliot Zuckerberg", "Elon Musk",
    "Jeff Bezos", "Warren Edward Buffett", "Larry Page", "Larry Ellison", "Tim Cook", "Lloyd Blankfein"
];

// 1. map 문제
// (1) 모든 이름을 대문자로 바꾸어서 출력하시오 
let upperCaseName = names.map(item => item.toUpperCase())
console.log("🚀 ~ upperCaseName:", upperCaseName);

// (2) 성을 제외한 이름만 출력하시오
let firstName = names.map(item => item.split(' ')[0]);
console.log("🚀 ~ firstName:", firstName);

// (3) 이름의 이니셜만 출력하시오 
let initialOnly = names.map(item => {
    let splitName = item.split(" ");
    let initial = "";
    splitName.forEach(nameItem => (initial += nameItem[0]));
    return initial;
});
console.log("🚀 ~ initialOnly ~ initialOnly:", initialOnly)

// 2. filter 문제
// (1) 이름에 a를 포함한 사람들을 출력하기
let includeA = names.filter(item => item.includes('a'))
console.log("🚀 ~ includeA:", includeA);

// (2) 이름에 같은 글자가 연속해서 들어간 사람들을 출력하시오
let doubleLetter = names.filter(item =>{
    let splitName = item.split("");
    return splitName.some((letter, index) => letter == splitName[index+1]);
});
console.log("🚀 ~ doubleLetter ~ doubleLetter:", doubleLetter);

// 3. some 문제
// (1) 전체 이름의 길이가 20 자 이상인 사람이 있는가?
console.log(names.some(item => item.length >= 20));

// (2) 성을 제외한 이름에 p를 포함한 사람이 있는가? 
console.log(names.some(item => {
    let splitName = item.split(' ');
    splitName.pop();
    return splitName.some(eachName => eachName.toLocaleLowerCase().includes("p"));
}))

// 4. every 문제
// (1) 전체 이름의 길이가 20자 이상인 사람을 찾기
console.log(names.every(item => {item.length >= 20}));

// (2) 모두의 이름에 a가 포함되어 있는가?
console.log(names.every(item => item.includes('a')));

// 5. find 문제
// (1) 전체 이름의 길이가 20자 이상인 사람 찾기
console.log(names.find(item => item.length >= 20));

// (2) 미들 네임이 포함되어 있는 사람을 찾으시오
console.log(names.find(item => item.split(' ').length >= 3));

// 6. findIndex 문제
// (1) 전체 이름의 길이가 20자 이상인 사람의 인덱스 번호 찾기
console.log(names.findIndex(item => item.length >= 20));

// (2) 미들네임이 포함되어 있는 사람의 인덱스 번호를 찾기
console.log(names.findIndex(item => item.split(' ').length >= 3));