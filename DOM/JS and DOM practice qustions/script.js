// 1
// function EOchecker(n){
//     if(n%2===0){
//         return "Even"
//     }
//     return "Odd"
// }

// console.log(EOchecker(2));
// console.log(EOchecker(3));
// console.log(EOchecker(0));
// console.log(EOchecker(-91));

// 2
// function greetings(name,age){
//     return `Hello, ${name}! You are ${age} years old.`
// }
// console.log(greetings("Riya" ,21));
// console.log(greetings("Adnan" ,20));

// 3
// function rectangleAreaCal(w,h){
//     return w*h;
// }
// console.log(rectangleAreaCal(20,10));
// console.log(rectangleAreaCal(264,198));

// 4
// function outer()
// {
//     let count =0;
//     return ()=>{
//         count+=1;
//         return count;
//     }
// }
// let inner = outer();
// console.log(inner());
// console.log(inner());
// console.log(inner());
// console.log(inner());

// 5
// function largestN(arr){
//     if(arr.length ===0){
//         return undefined
//     }
//     let largeNum=arr[0];
//     for(let i=0; i<arr.length; i++){
//         if(largeNum<arr[i]){
//             largeNum=arr[i]
//         }
//     }
//     return largeNum;
// }
// console.log(largestN([1,2,3,4,3]));
// console.log(largestN([]));
// console.log(largestN([190,92,32,49,39]));

// 6
// let arr = [{
//     name:"pen",
//     price:10,
//     category:"study"
// },
// {
//     name:"knife",
//     price:150,
//     category:"kitchen"
// },{
//     name:"lamp",
//     price:1000,
//     category:"bedroom"
// },
// {
//     name:"masale",
//     price:10,
//     category:"kitchen"
// }
// ]

// let m = arr.map((n)=>n.name)
// console.log(m);

// let f = arr.filter((n)=>n.category==="kitchen")
// console.log(f);

// let r = arr.reduce((acc,n)=>acc+n.price,0)
// console.log(r);

// 7
// function hello(){
//     console.log("hello");
// }
// function debounce(fn, delaytime){
//     let setTimeoutfn;

// return ()=>{
//     clearTimeout(setTimeoutfn)
//     setTimeoutfn = setTimeout(() => {
//         fn();
//     }, delaytime);
// }
// }
// let de = debounce(hello,5000)
// de();
// de();
// de();

// 8
// function fn1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Step 1 done");
//       resolve();
//     }, 2000);
//   });
// }
// function fn2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("step 2 done");
//       resolve();
//     }, 1000);
//   });
// }
// function fn3() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("step 3 done");
//       resolve();
//     }, 500);
//   });
// }
// async function runAllfn() {
//   console.log("functions start");
//   await fn1();
//   await fn2();
//   await fn3();
//   console.log("completed");
// }
// runAllfn();

// 9
// async function apidata(){
//     try{
//         let res = await fetch("https://fakestoreapi.com/products/")
//         let data = await res.json();
//         let arr=[];
//         data.forEach(element => {
//             arr.push({
//                 id:element.id,
//                 title:element.title
//             })
//         });
//         return arr;
//     }
//     catch(err){
//         console.error(err);
//         return null;
//     }
// }

// apidata().then((r)=>{
//     console.log(r);
// })

// 10
// let arr = []
// let obj = {
//   on: (eventName, callback) => {
//     if (!arr[eventName]) {
//       arr[eventName] = [];
//     }
//     arr[eventName].push(callback);
//   },
//   emit: (eventName, data) => {
//     if (arr[eventName]) {
//       arr[eventName].forEach((element) => {
//         element(data);
//       });
//     }
//   },
//   off: (eventName, callback) => {
//     if(arr[eventName]){
//         arr[eventName] = arr[eventName].filter(n=>n!==callback)
//     }
//   },
// };

// obj.on("purchased",({name,price})=>{
//     console.log(`${name} is at ${price}`);
// })

// obj.emit("purchased",{name:"pen",price:10})
// obj.emit("purchased",{name:"pencil",price:150})
// obj.emit("purchased",{name:"book",price:50})
// obj.emit("purchased",{name:"pen",price:100})

// 11
// function memoize(fn){
//     return
// }

//DOM
// 16
// let color = ["blue","purple","black","beige","green"]
// const bgc = document.querySelector(".colorChange")
// let count = 0;
// bgc.addEventListener("click",()=>{
//     document.body.style.backgroundColor = color[count]
//     count++;
//     if(count===color.length) count=0;
// })

// 17
// const text = document.querySelector("input")
// const charCount = document.querySelector('.charCount')
// text.addEventListener('input',(n)=>{
//     charCount.textContent = text.value.length;
// })

// 18
// const shortOrlongP = document.querySelector(".ReadMore");
// shortOrlongP.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (shortOrlongP.classList.value === "ReadMore") {
//     document.querySelector("p").textContent =
//       `Lorem, ipsum dolor sit amet consectetur
// Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo assumenda neque mollitia fugiat consequatur magnam non odit numquam ducimus totam impedit suscipit asperiores soluta, ullam incidunt dolorum facilis facere nisi!
// Sit, dolorem obcaecati blanditiis sequi totam, explicabo quia, illum voluptatibus sed repellat necessitatibus ipsam dicta saepe ducimus eveniet quidem nostrum nulla maxime tenetur. Quibusdam quos ullam consequatur praesentium iste enim.
// Reiciendis illum perferendis eius corporis ab recusandae illo dolore ipsum rem at. Enim obcaecati, quo, magni numquam odit quos soluta quasi error provident delectus mollitia ducimus excepturi, doloremque placeat sit.
// Alias nobis veritatis reiciendis mollitia oetur voluptas. Corporis magni quas unde ipsam! Excepturi id sed, officiis, dicta debitis, nemo itaque quos eum facere velit eligendi eius?
// A dolor quos harum eum consectetur ratione rem soluta non iste tempora quibusdam officia, magni quisquam vero incidunt ab deserunt! A numquam explicabo modi aut voluptatibus optio non ipsa minus!`;

//     shortOrlongP.classList.replace("ReadMore", "ReadLess");
//     shortOrlongP.textContent = "ReadLess";
//   } else {
//     document.querySelector("p").textContent =
//       ` Lorem, ipsum dolor sit amet consectetur`;
//     shortOrlongP.classList.replace("ReadLess", "ReadMore");
//     shortOrlongP.textContent = "ReadMore";
//   }
// });

// 19
// const btn = document.querySelector("button")
// const num = document.querySelector(".num")
// let count =0;
// btn.addEventListener("click",()=>{
//     count++;
//     num.textContent =count
// })

// 20
// const input = document.querySelector("input");
// const btn = document.querySelector("button");
// const ul = document.createElement("ul");
// document.querySelector(".todo").append(ul);

// btn.addEventListener("click", () => {
//   ul.innerHTML += `<li>${input.value} <button class = "dlt">Dlt</button></li>`;
//   input.value = "";
// });

// 21
// ul.addEventListener("click",(e)=>{
//     console.log(e);
//     console.log(e.target);
//     console.log(e.target.classList);
//     console.log(e.target.tagName);

//     if(e.target.classList.contains("dlt")){
//         e.target.parentElement.remove()
//     }
// })

// 22
// ul.addEventListener("click",(e)=>{
//     if(e.target.tagName ==="LI"){
//         e.target.classList.toggle("completed")
//     }
// })

// 23
// const inp = document.querySelector('input')
// const far = document.querySelector(".convert")

// inp.addEventListener("input",(e)=>{
//     console.log(e.target.value);

//     let val = (e.target.value *(9/5))+32
//     far.textContent = val;
// })

//24

// const time = document.querySelector('.time')
// setInterval(() => {
//     const date = new Date()
//     time.textContent = date.toLocaleTimeString();
// }, 1000);

// 25
// const inp1 = document.querySelector('.input1')
// const inp2 = document.querySelector('.input2')
// const form = document.querySelector("form")
// const m1 = document.querySelector(".msg1")
// const m2 = document.querySelector(".msg2")

// form.addEventListener("submit",(e)=>{
//     e.preventDefault()
//     if(e.target[0].value === "") {
//         m1.textContent = "This field is required"
//     }
//     else{
//         m1.textContent = ""
//     }
//     if(e.target[1].value === "") {
//         m2.textContent = "This field is required"
//     }
//     else{
//         m2.textContent = ""
//     }
// })

// 27
// let images = [
//   "https://images.unsplash.com/photo-1549088521-94b6502fec3d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1549001799-6e14a59da830?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1548913344-66177da9425e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1548736614-128923fa2a11?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D",
// ];

// const img = document.querySelector("img");
// const prev = document.querySelector(".prev");
// const next = document.querySelector(".next");
// let count = 0;
// img.src = images[count];
// function updateImg() {
//   img.src = images[count];
// }
// prev.addEventListener("click", () => {
//   count--;
//   if (count < 0) {
//     count = images.length - 1;
//   }
//   updateImg();
// });
// next.addEventListener("click", () => {
//   count++;
//   if (count >= images.length) {
//     count = 0;
//   }
//   updateImg();
// });

// 28
// const inp = document.querySelector("#txt");
// const btn = document.querySelector("button");
// let val;
// inp.addEventListener("input", (e) => {
//   val = e.target.value;
// });
// btn.addEventListener("click", () => {
//   localStorage.setItem("inputTxt", val);
// });
// document.addEventListener("DOMContentLoaded",()=>{
//     inp.textContent = localStorage.getItem("inputTxt")
// })



