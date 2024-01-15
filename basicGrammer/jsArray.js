/* 1. 배열을 사용하지 않는 경우 
    let fruit = "banana"
    let fruit2 = "apple"
    let fruit3 = "mango"
*/

// 2. 배열을 사용하는 경우 
// 배열 : 관련 있는 데이터들을 하나로 묶어서 하나의 변수 아래에 저장하는 것 
let fruit = ["banana", "apple", "mango"];
console.log("🚀 ~ fruit:", fruit);
console.log("🚀 ~ fruit:", fruit[0]);

fruit[0] = "grape";
console.log("🚀 ~ fruit:", fruit);

// 3. 배열과 관련된 함수
// - pop : 마지막에 있는 아이템을 뺌
fruit.pop()
console.log("🚀 ~ fruit:", fruit);
// - push : 배열의 마지막에 아이템을 추가
fruit.push("cherry");
fruit.push("watermelon");
console.log("🚀 ~ fruit:", fruit);
// - includes() : 해당 아이템을 배열이 포함하고 있는지 알려줌
console.log("🚀 ~ fruit.includes(\"apple\"):", fruit.includes("apple"));
// - indexOf() : 해당 아이템의 인덱스를 알려줌
fruit.indexOf("apple")
console.log("🚀 ~ fruit.indexOf(\"apple\"):", fruit.indexOf("apple"));
// - slice() & splice() : 배열을 자르고 싶을 때 사용
    // - slice(n) : n번째 인덱스부터 시작하기 (n-1까지는 잘라서 버림) ✨ 기존의 배열을 건들이지 않음 ➡️ 잘라낸 값을 새로운 변수로 지정해줄 수 있음 
    // console.log("🚀 ~ fruit.slice(1):", fruit.slice(1))
    // - splice(x, y) : x부터 시작해서 y개만큼 잘라내기 ✨ 기존의 배열을 건들임 
    console.log("🚀 ~ fruit.splice(0,2):", fruit.splice(0,2));
// - length() : 배열함수는 아니지만 배열의 크기를 리턴해줌

// 배열 문제 ============================================================================================================================================
let animals= [
    "Aardvark", "Albatross", "Alligator", "Alpaca", "Ant", "Ape", "Armadillo", "Donkey", 
    "Baboon", "Badger", "Barracuda", "Bat", "Bear", "Beaver", "Bee", "Bison",
    "Cat", "Caterpillar", "Cattle", "Chamois", "Cheetah", "Chicken", "Chimpanzee", "Chinchilla", "Chough", "Clam", "Cobra", "Cockroach", "Cod", "Cormorant",
    "Dugong", "Dunlin",
    "Eagle", "Echidna", "Eel", "Eland", "Elephant", "Elk", "Emu", 
    "Falcon", "Ferret", "Finch", "Fish", "Flamingo", "Fly", "Fox", "Frog",
    "Gaur", "Gazelle", "Gerbil", "Giraffe", "Grasshopper",
    "Heron", "Herring", "Hippopotamus", "Hornet", "Horse",
    "Kangaroo", "Kingfisher","Koala", "Kookabura", 
    "Moose",
    "Narwhal", "Newt", "Nightingale", 
    "Octopus", "Okapi", "Opossum",
    "Quail", "Quelea", "Quetzal", 
    "Rabbit", "Raccoon", "Rail", "Ram", "Rat", "Raven", "Red deer",
    "Sandpiper", "Sardine", "Sparrow", "Spider", "Spoonbill", "Squid", "Squirrel", "Starling", "Stingray", 
    "Tiger", "Toad",
    "Whale", "Wildcat", "Wolf", "Worm", "Wren",
    "Yak",
    "Zebra"
];

// 1. 배열에 마지막 아이템인 "Zebra" 제거하기
animals.pop();
console.log("🚀 ~ animals:", animals);

// 2. 배열에 Dog 추가하기
animals.push("Dog");
console.log("🚀 ~ animals:", animals);

// 3. 배열에 Mosquito, Mouse, Mule 추가하기
animals.push("Mosquito", "Mouse", "Mule");
console.log("🚀 ~ animals:", animals);

// 4. 배열에 "Human"이 있는가?
console.log("🚀 ~ animals.includes(\"Human\"):", animals.includes("Human"));

// 5. 배열에 "Cat"이 있는가?
console.log("🚀 ~ animals.includes(\"Cat\"):", animals.includes("Cat"));

// 6. "Red deer"을 "Deer"로 바꾸시오 ➡️ animals[animals.indexOf("Red deer")] = "Deer"
animals.indexOf("Red deer");
console.log("🚀 ~ animals.indexOf(\"Red deer\"):", animals.indexOf("Red deer"));
animals.splice(77, 1, "Deer");
console.log("🚀 ~ animals:", animals);

// 7. "Spider"부터 3개의 아이템을 기존 배열에서 제거하시오 ➡️ animals.splice(animals.indexOf("Spider"),3)
animals.indexOf("Spider");
console.log("🚀 ~ animals.indexOf(\"Spider\"):", animals.indexOf("Spider"));
animals.splice(81, 3);
console.log("🚀 ~ animals:", animals);

// 8. "Tiger"이후의 값을 제거하시오 ➡️ animals.splice(animals.indexOf("Tiger"))
animals.indexOf("Tiger");
console.log("🚀 ~ animals.indexOf(\"Tiger\"):", animals.indexOf("Tiger"));
animals = animals.slice(0, 85);
console.log("🚀 ~ animals:", animals);

// 9. B로 시작되는 아이템인 "Baboon"부터 "Bison"까지 가져와 새로운 배열에 저장하세요 
// ➡️ let newList = animals.slice(animals.indexOf("Baboon"),animals.indexOf("Bison")+1)

console.log("🚀 ~ animals.indexOf(\"Baboon\"):", animals.indexOf("Baboon"));
console.log("🚀 ~ animals.indexOf(\"Bison\"):", animals.indexOf("Bison"));
let newAnimals = animals.slice(8, 16);
console.log("🚀 ~ newAnimals:", newAnimals);











