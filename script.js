/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(printIfDeveloperMap)
  function printIfDeveloperMap(employee){
    if(employee.profession === "developer"){
      console.log(employee)
    }
  }
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
   arr.forEach(printIfDeveloperForEach)

  function printIfDeveloperForEach(employee){
    if(employee.profession === "developer"){
      console.log(employee)
    }
  }
}

function addData() {
  //Write your code here, just console.log
  let objToBeAdded={id:4,name:"susan",age:"20",profession:"intern"}
  arr.push(objToBeAdded)
  console.log(arr)
}

function removeAdmin() {
  //Write your code here, just console.log
  arr=arr.filter(person=> person.profession !== "admin")
  
  console.log(arr)
}

function concatenateArray() {
  //Write your code here, just console.log
  let arrayToBeConcatenated = [
    { id: 5, name: "excal", age: "30", profession: "swordsman" },
    { id: 6, name: "mag", age: "31", profession: "mage" },
    { id: 7, name: "volt", age: "32", profession: "needforspeeeeeed" },
  ];

  arr=arr.concat(arrayToBeConcatenated)

  console.log(arr)
}
