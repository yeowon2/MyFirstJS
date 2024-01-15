let patient = {
    name: "pf",
    age: 20,
    disease: "cold"
};

console.log(patient);
console.log(patient.age); // 키값을 통해서 값에 접근할 수 있음 
console.log(patient["age"]);
console.log(patient["disease"]);

patient.name = "jk";
patient.age = 29;
console.log(patient);

let patientList = 
[
    {name: "patient", age: 30},
    {name: "student", age: 15},
    {name: "adult", age: 45}
]
console.log("🚀 ~ patientList:", patientList);
console.log("🚀 ~ patientList:", patientList[0].age);

