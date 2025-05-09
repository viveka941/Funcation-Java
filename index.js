//--------callback------------//

// function sum(a, b, funToCall) {
//   let result = a + b;
// funToCall(result)
// }
// function displayReslut(data) {
//   console.log("result is sum of two number is "+ data);
// }
// sum(4,5,displayReslut)

//2 example

// function calculate(a,b,fun){
// const res = fun(a,b)
// return res
// }

// function sum(a,b){
//   return a+b
// }

// const res = calculate(5,6,sum)
// console.log(res)

//-----------setTimeOut---------//
// console.time("greetTime");

// function greet() {
//   let sum = 0;
//   for (let i = 0; i <999 ; i++) {
//     sum += i;
//   }
//   console.log(sum);
//   console.timeEnd("greetTime");
// }

// greet(); // Call the function directly
// console.log("vivek");

//------String function --------//
// function findIndexOf(str, target) {
//   console.log("Original String", str);
//   // console.log("Index ",str.indexOf(target))
//   console.log("Index ", str.lastIndexOf(target));
// }

// findIndexOf("hello world world world world", "world");

// -----get slice

// function getSlice(str,start,end){
//   console.log("Original String", str)
//   console.log("After slice", str.slice(start,end))
//     console.log("After slice", str.substr(start, end));

// }

// getSlice("hellovivek world" ,5,10)

// const initialArray = [1,2,3]
// // initialArray.shift() // 2,3
// initialArray.unshift(0)// 0,1,2,3
// console.log(initialArray)

//----------- cancat
const firstArray = [1, 2, 3, 4];
const secondArray = [5, 6, 7, 8];
// const merge =firstArray.concat(secondArray)
// console.log(merge)

// const merge1 =[...firstArray, ...secondArray]
// console.log(merge1)
// function addOne(num){
//   console.log(num + 1, "add one")
// }

// merge1.forEach(addOne);

// ---------callback funtion

// function log1(){
//   console.log("console log 1")
// }

// function log2() {
//   console.log("console log 2");
// }

// function callbackFn(fn){
//   fn()
// }

// callbackFn(log1)
// callbackFn(log2)

const animal = {
  cat: {
    name: "cat",
    legCount: 4,
    speak: "meow",
  },
  dog: {
    name: "dog",
    legCount: 4,
    speak: "bhok",
  },
};

// console.log(JSON.stringify(animal))

// console.log(animal)

// console.log("animal " + cat.name + " speak " + cat.speak);
// console.log("animal " + cat["name"] + " speak " + cat["speak"]);

class Animal {
  constructor(name, legCount, speak) {
    this.name = name;
    this.legCount = legCount;
    this.speak = speak;
  }

  static typeo() {
    console.log("this is animal types ");
  }

  AnimalSpeak() {
    console.log(this.speak);
  }
}

// const dog = new Animal("dog",4,"bhow")
// const cat = new Animal("Cat",4,"meow")

// cat.AnimalSpeak()
// Animal.typeo()

/// -----date

// const currDate = new Date()
// console.log(currDate)
// console.log(currDate.getDate())
// console.log(currDate.getMonth())
// console.log(currDate.getFullYear())
// console.log(currDate.getTime())

//------------object

const obj = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
  key4: "value4",
};

function objectMethods(obj) {
  console.log("Origininal object:", obj);
  let key = Object.keys(obj);
  console.log("After Object.key() ", key);
  let value = Object.values(obj);
  console.log("After object.value() ", value);
  let entries = Object.entries(obj);
  console.log("after object.entries() ", entries);
  let hasProp = obj.hasOwnProperty("property");
  console.log("after hasOwnProperty()", hasProp);
  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After object.assign()", newObj);
}

// objectMethods(obj)

// function sum(a,b,fn){
//   return a+b+fn(a)
// }

// const ans = sum(2,2,function(a){
//   return a*a*a
// })
// console.log(ans)

//async function

// function findSum(n) {
//   let sum = 0;
//   for (let i = 0; i < n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// function findTill100() {
//   console.log(findSum(100));
// }

// function asyncSleep(){
//   let a=0;
//   for (let i = 0; i < 100000000; i++) {
//     a++
//   }
// }
// asyncSleep()

// setTimeout(findTill100,1000)
// console.log("hello world")
