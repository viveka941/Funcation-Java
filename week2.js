function squre(a) {
  return a * a;
}
function qube(a) {
  return a * a * a;
}

function quade(a) {
  return a * a * a * a;
}

// function sumOfFn(a,b,fun){
//   let num1 = fun(a)
//   let num2 = fun(b)
//   return num1+num2
// }

// const res = sumOfFn(2,3,quade)
// console.log(res )
// const sq = sumOfFn(2,3,squre)
// console.log(sq)

// const unique = sumOfFn(squre(1),squre(2))
// console.log(unique)

// -----------------async function
// console.log("hiii vivek")

// function done(){
//   console.log("async function is waiting")
// }
// setTimeout(done,2000)
// let sum=0;
// for(let i=0; i<100; i++){
//   sum+=i
// }
// console.log("complete async time ")
// console.log(sum)

/// ------ file reading fs

// const fs = require("fs")

// fs.readFile("a.txt", "utf-8",function(err,data){
//   console.log(err)
//   console.log(data)
// })

// const myPromise = new Promise((resolve, reject) => {

//     // resolve("name fields is exist 1");

//     // reject("name fields is not exist1");

// });

// myPromise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const modernPromise = async () => {
//   try {
//     let name ;
//     if (name) {
//       console.log("name fields is exist 2");
//     } else {
//       console.log("name fields is exist 2");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// console.log("modern promise ")
// modernPromise()

// console.log("1. Script Start"); // Synchronous → goes into Call Stack

// setTimeout(() => {
//   console.log("5. setTimeout"); // Goes to Web APIs, then Callback Queue
// }, 0);

// Promise.resolve().then(() => {
//   console.log("3. Promise Microtask"); // Goes to Microtask Queue
// });

// console.log("2. Script End"); // Synchronous → continues in Call Stack

////////////////////////////////////
// const express = require("express");
// const fs = require("fs");
// const app = express();

// function sumNum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// app.post("/takedata", (req, res) => {
//   const message = req.query.message;
//   console.log(message);
//   res.json({
//     output: "2 + 2",
//   });
// });
// app.get("/sum", (req, res) => {
//   const n = req.query.n;
//   const result = sumNum(n);
//   res.send("result " + result);
// });

// app.get("/file/:file", (req, res) => {
//   const file = req.params.file
//   fs.readFile(file, "utf-8", (err, data) => {
//     console.log(data);
//     if(err){
//       res.send(err)
//     }
//     res.send(data);
//   });
// });

// app.listen(3000, () => {
//   console.log("3000 posert is listing");
// });


let arr=[1,2,3]
const allEven = arr.every(data => data %2===0) // false 
const allNotEven = arr.some((data) => data % 2 === 0); // true // anyOne divied of 2
// console.log(allNotEven) // true
// console.log(allEven)// false


const ans = arr.reduce((acc,data)=>{
 return acc+data
}
,9

)

// console.log(ans)
const arr2 = [
  "Vivek",
  "Amit",
  "Vikash",
  "Vinita",
  "Abh",
  "Kaka",
  "Vikkk",
  "Vniksk",
  "Vookki",
  "Rohit",
  "Sneha",
  "Tanvi",
  "Aryan",
  "Nisha",
  "Kunal",
  "Deepak",
  "Priya",
  "Sahil",
  "Neha",
  "Ankit",
  "Pooja",
  "Manish",
  "Shreya",
  "Lakshya",
  "Divya",
  "Kritika",
  "Rahul",
  "Simran",
  "Tanya",
  "Nikhil",
  "Gaurav",
];

let input = "T"
const namveRes = arr2.filter(function(d){
if(d.startsWith(input)){
  return true
}
})
// console.log(namveRes)

const includeFn = arr2.filter(data=>data.includes(input) && data.startsWith(input));
console.log(includeFn);

