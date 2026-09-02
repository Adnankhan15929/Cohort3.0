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
// function memoize(fn) {
//   let cache = {};
//   return function (...args) {
//     let i = JSON.stringify(...args);
//     if (cache[i]) {
//       return cache[i];
//     } else {
//       cache[i] = fn(...args);
//       return cache[i];
//     }
//   };
// }
// function add(a, b) {
//   return a + b;
// }
// console.log(memoize(add)(2, 3));
// console.log(memoize(add)(3, 3));
// console.log(memoize(add)(2, 3));
// console.log(memoize(add)(5, 3));

// 12
// let count = 0;
// async function fake() {
//   count++;
//   if (count === 3) {
//     return new Promise(r=>r("successful"));
//   }
//   throw new Error("failed");
// }
// async function retry(asyncfunc, attempts) {
//   for (let i = 0; i < attempts; i++) {
//     try {
//       const result = await asyncfunc();
//       return result;
//     } catch (err) {
//       console.log(err.message, i + 1);
//     }
//   }
// }
// retry(fake, 3).then((r) => {
//   console.log(r);
// });

// 13
// let obj = {
//   name: "adnan",
//   state: "student",
// };
// let callbackStore;
// function getState() {
//   return obj.state;
// }
// function updateState(data) {
//   obj.state = data;
//   if(callbackStore) callbackStore()
// }
// function subscribe(callback) {
//   callbackStore=callback
// }
// function callbackfn() {
//   console.log("state changed");
// }
// console.log(getState());
// subscribe(callbackfn);
// updateState("Employee");
// console.log(getState());

// 14
// let arr = [
//   {
//     name: "adnan",
//     state: {
//       city: {
//         address: "jinsi Bhopal MP",
//       },
//     },
//     stage: "student",
//   },
//   2,
//   6,
//   4,
//   {
//     "10th": 60,
//     "12th": 87,
//   },
// ];
// function deepClone(val) {
//     if(Array.isArray(val)){
//       let newArr =[]
//       for(let i=0; i<val.length; i++){
//         // console.log("array=>",val[i]);
//         newArr.push(deepClone(val[i]))
//       }
//       return newArr
//     }
//     else if(typeof val ==="object"){
//       let newObj = {}
//       let objKey =Object.keys(val)
//       for(let i=0; i<objKey.length; i++){
//         // console.log("object=>",val[objKey[i]]);
//         newObj[objKey[i]]=deepClone(val[objKey[i]])
//       }
//       return newObj
//     }
//     else{
//       return val;
//     }
// }
// let deepCopy = deepClone(arr)
// console.log(deepCopy);
// console.log(arr);
// deepCopy[0].state.city.address = "Ali"
// console.log(deepCopy);
// console.log(arr);

// 15
// async function t1() {
//   return new Promise(function (r) {
//     setTimeout(function () {
//       console.log("Task 1 done");
//       r();
//     }, 1000);
//   });
// }
// async function t2() {
//   return new Promise(function (r) {
//     setTimeout(function () {
//       console.log("Task 2 done");
//       r();
//     }, 4000);
//   });
// }
// async function t3() {
//   return new Promise(function (r) {
//     setTimeout(function () {
//       console.log("Task 3 done");
//       r();
//     }, 1500);
//   });
// }
// async function t4() {
//   return new Promise(function (r) {
//     setTimeout(function () {
//       console.log("Task 4 done");
//       r();
//     }, 1000);
//   });
// }
// async function t5() {
//   return new Promise(function (r) {
//     setTimeout(function () {
//       console.log("Task 5 done");
//       r();
//     }, 4000);
//   });
// }
// async function t6() {
//   return new Promise(function (r) {
//     setTimeout(function () {
//       console.log("Task 6 done");
//       r();
//     }, 1500);
//   });
// }
// async function t7() {
//   return new Promise(function (r) {
//     setTimeout(function () {
//       console.log("Task 7 done");
//       r();
//     }, 1000);
//   });
// }
// async function t8() {
//   return new Promise(function (r) {
//     setTimeout(function () {
//       console.log("Task 8 done");
//       r();
//     }, 4000);
//   });
// }
// async function t9() {
//   return new Promise(function (r) {
//     setTimeout(function () {
//       console.log("Task 9 done");
//       r();
//     }, 1500);
//   });
// }
// async function t10() {
//   return new Promise(function (r) {
//     setTimeout(function () {
//       console.log("Task 10 done");
//       r();
//     }, 1500);
//   });
// }

// let taskArr = [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10];
// let index = 0;
// let running = 0;
// let completed = 0;
// function tasks(N) {
//   for (let i = 0; i < N; i++) {
//     startNext(N);
//   }
// }
// function startNext(N) {
//   if (running < N && index < taskArr.length) {
//     let task = taskArr[index];
//     index++;
//     running++;
//     task().then(function () {
//       running--;
//       completed++;
//       if (completed === taskArr.length) {
//         console.log("sb chl gye");
//       } else {
//         startNext(N);
//       }
//     });
//   }
// }
// tasks(5);

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

//29
// const q1 = document.querySelector(".qus1")
// const a1 = document.querySelector(".ans1")
// const q2 = document.querySelector(".qus2")
// const a2 = document.querySelector(".ans2")
// const q3 = document.querySelector(".qus3")
// const a3 = document.querySelector(".ans3")

// q1.addEventListener("click",()=>{
//     a1.classList.toggle("hidden")
//     a2.classList.add("hidden")
//     a3.classList.add("hidden")
// })
// q2.addEventListener("click",()=>{
//     a2.classList.toggle("hidden")
//     a1.classList.add("hidden")
//     a3.classList.add("hidden")
// })
// q3.addEventListener("click",()=>{
//     a3.classList.toggle("hidden")
//     a2.classList.add("hidden")
//     a1.classList.add("hidden")
// })

// const q = document.querySelectorAll(".faq p[class^='qus']")

// q.forEach(element => {
//     element.addEventListener("click",()=>{
//         const currans= element.nextElementSibling;
//         const isOpen = !currans.classList.contains("hidden");
//         document.querySelectorAll(".faq p[class^='ans'").forEach(ans => {
//         ans.classList.add("hidden")
//         });
//         if(!isOpen){
//             currans.classList.remove("hidden")
//         }
//     })
// });

//30
// const buttons = document.querySelectorAll(".btn")
// const contents = document.querySelectorAll(".content")

// buttons.forEach(button => {
//     button.addEventListener("click",()=>{
//         buttons.forEach(btn => {
//             btn.classList.remove("active")
//         });
//         contents.forEach(content => {
//             content.classList.remove("active")
//         });
//         button.classList.add("active")
//         contents[button.dataset.id].classList.add("active")
//     })

// });

// 31
// const div = document.querySelector("div");
// let n;
// const allS = document.querySelectorAll("#i");
// allS.forEach((e) => {
//   e.addEventListener("click", (e) => {
//     n = e.target.dataset.id;
//     coloring(n);
//   });
// });

// function coloring(n) {
//   for (let i =0; i <5; i++) {
//     div.children[i].classList.remove("coloring");
//   }
//     for (let i = 0; i <= n; i++) {
//     div.children[i].classList.add("coloring");
//   }
// }

// 32
// let names = ["adnan","ali","alzeba","ramesh","ram","raj","nobita","ibaad"]
// const inp = document.querySelector("input")
// const box = document.querySelector('.namesBox')
// inp.addEventListener("input",(e)=>{
//     let name =e.target.value
//     if(!name) {
//         names.forEach(n => {
//             box.innerHTML += `<p>${n}</p>`
//         });
//         return ;
//     }
//     let filterNames =names.filter(n=>{return n.startsWith(name)})
//     if(filterNames.length>0){
//         box.innerHTML = filterNames.map(n=>`<p>${n}</p>`).join('')
//     }
//     else{
//         box.innerHTML=`<p>"No names are found"</p>`
//     }
// })

// 33
// const pass = document.querySelector("input");
// const label = document.querySelector("label");
// pass.addEventListener("input", (e) => {
//   let p = e.target.value;

//   if (p.length > 8 && /\d/.test(p) && /[a-z]/.test(p) && /[A-Z]/.test(p)) {
//     label.textContent = "STRONG";
//   }
//   else if (p.length > 8 && /\d/.test(p) && /[a-z]/.test(p) ) {
//     label.textContent = "MEDIUM";
//   }
//   else {
//     label.textContent = "WEAK";
//   }
// });

// 34
// const btn = document.querySelector("button");
// const div = document.querySelector(".box");
// const h1 = document.querySelector("h1");
// const outer = document.querySelector(".outer");

// btn.addEventListener("click", (e) => {
//   div.style.display = "flex";
//   outer.style.display = "flex";
//   e.stopPropagation();

// });
// h1.addEventListener("click", (e) => {
//   div.style.display = "none";
//   outer.style.display = "none";
// });
// div.addEventListener("click",(e)=>{
//     e.stopPropagation()
// })
// outer.addEventListener("click", (e) => {
//   div.style.display = "none";
//   outer.style.display = "none";
// });

// 35
// const btn = document.querySelector("button")
// const ul = document.querySelector("ul")

// btn.addEventListener("click",()=>{
//     ul.classList.toggle('hidden')
// })
// ul.addEventListener("click",(e)=>{
//     if(e.target.classList.contains('item'))
//     {
//         btn.textContent = e.target.textContent;
//         ul.classList.add("hidden")
//     }
// })

// 36
// let Titems = document.querySelector(".totalItem");
// let Tprice = document.querySelector(".totalPrice");

// const btn = document.querySelectorAll("button");
// let arr = []
// let total =0;
// btn.forEach((button) => {
//   button.addEventListener("click", () => {
//     arr.push(Number(button.parentElement.querySelector(".price").textContent))
//     Titems.textContent = arr.length;
//     total =arr.reduce((n,m)=>n+m,0);
//     Tprice.textContent = total
//   });
// });

// 37
// let data = [
//   ["Ali", "20", "Indore"],
//   ["John", "30", "NYC"],
//   ["Raj", "50", "Bhopal"],
//   ["Adnan", "25", "Mumbai"],
// ];

// function sortBy(c) {
//   if (document.querySelector("table").classList.toggle("ascending")) {
//     data.sort((a, b) => a[c].localeCompare(b[c]));
//   } else {
//     data.sort((a, b) => b[c].localeCompare(a[c]));
//   }
//   print();
// }

// function print() {
//   let tbody = document.querySelector("tbody");
//   tbody.innerHTML = "";
//   for (let i = 0; i <data.length; i++) {
//     let row = `<tr><td>${data[i][0]}</td><td>${data[i][1]}</td><td>${data[i][2]}</td>`;
//     tbody.innerHTML += row;
//   }
// }

// 38
// let hour = document.querySelector(".hour");
// let sec = document.querySelector(".sec");
// let min = document.querySelector(".min");
// let start = document.querySelector(".start");
// let pause = document.querySelector(".pause");
// let reset = document.querySelector(".reset");

// let count = 0;
// let m = 0;
// let h = 0;
// let interval=null;
// let timer = 1000;

// function t(timer) {
//   if(interval===null){
//     interval = setInterval(() => {
//     count++;
//     if (count === 60) {
//       count = 0;
//       m++;
//       min.textContent = m;
//     }
//     if (m === 60) {
//       m = 0;
//       h++;
//       hour.textContent = h;
//     }
//     sec.textContent = count;
//   }, timer);
//   }
// }
// start.addEventListener("click", () => {
//   t(timer);
// });

// reset.addEventListener("click", () => {
//   clearInterval(interval);
//   sec.textContent = 0;
//   count = 0;
//   min.textContent = 0;
//   m = 0;
//   hour.textContent = 0;
//   h = 0;
// });

// pause.addEventListener("click", () => {
//   clearInterval(interval);
//   interval=null;
// });

// 39

// const n1 = document.querySelector(".next");
// const n2 = document.querySelector(".next2");
// const back = document.querySelector(".back");
// const back2 = document.querySelector(".back2");

// const submit = document.querySelector(".submit");
// let page1 = document.querySelector(".step1");
// let page2 = document.querySelector(".step2");
// let page3 = document.querySelector(".step3");
// let form = document.querySelector("form");

// let n;
// let email;
// let num;
// let add;
// n1.addEventListener("click", (e) => {
//   e.preventDefault();
//   n = document.querySelector("#name").value;
//   num = document.querySelector("#number").value;
//   if (n === "" || num === "") return alert("Fill the fields");
//   page1.style.display = "none";
//   page2.style.display = "flex";//class list ka use krke bhi me hide or show kr skta tha
//   console.log(n, num);
// });
// n2.addEventListener("click", (e) => {
//   e.preventDefault();
//   email = document.querySelector("#email").value;
//   add = document.querySelector("#address").value;
//   if (add === "" || email === "") return alert("Fill the fields");
//   page3.style.display = "flex"; //class list ka use krke bhi me hide or show kr skta tha
//   page2.style.display = "none";
//   console.log(email, add);

//   document.querySelector('.nameP').textContent = n
//   document.querySelector('.emailP').textContent = email
//   document.querySelector('.addressP').textContent = add
//   document.querySelector('.numberP').textContent = num

// });
// back.addEventListener("click", (e) => {
//   e.preventDefault();
//   page3.style.display = "none";//class list ka use krke bhi me hide or show kr skta tha
//   page2.style.display = "flex";
// });
// back2.addEventListener("click", (e) => {
//   e.preventDefault();
//   page2.style.display = "none";//class list ka use krke bhi me hide or show kr skta tha
//   page1.style.display = "flex";
// });

// form.addEventListener('submit',()=>{
//   console.log(n);
//   console.log(num);
//   console.log(add);
//   console.log(email);
// })

// 40
// const btn = document.querySelector('button')
// btn.addEventListener("click",()=>{
//   let toast = document.createElement('p')
//   toast.textContent = "Saved Successfully!"
//   document.body.append(toast)
//   setTimeout(() => {
//   toast.remove()
//   }, 3000);
// })

// 41
// const img = document.querySelectorAll("img");
// img.forEach((e, i) => {
//   e.addEventListener("click", () => {
//     let openimg = document.createElement("div");
//     openimg.remove();
//     openimg.classList.add("openImg");
//     openimg.style.display = "flex";
//     openimg.innerHTML = `<h1 class="cut">X</h1><img src="${e.src}" class="badikrdo"></img>`;
//     document.body.append(openimg);
//     document.querySelector(".cut").style.cursor = "pointer";
//     document.querySelector(".cut").addEventListener("click", () => {
//       openimg.remove();
//     });
//     openimg.querySelector("img").addEventListener("click",(e)=>{
//         e.stopPropagation()
//     });
//     openimg.addEventListener("click", () => {
//       openimg.remove();
//     });
//   });
// });

// 42

// const input = document.querySelector("input");
// const btn = document.querySelector("button");
// const ul = document.createElement("ul");
// document.querySelector(".todo").append(ul);
// display();
// let index = 0;
// btn.addEventListener("click", () => {
//   if (input.value === "") return;
//   index++;
//   ul.innerHTML += `<li data-index="${index}">${input.value} <button class = "dlt">Dlt</button></li>`;
//   localStorage.setItem(
//     `${index}`,
//     JSON.stringify({ text: input.value, completed: false }),
//   );
//   input.value = "";
// });

// ul.addEventListener("click", (e) => {
//   if (e.target.classList.contains("dlt")) {
//     let li = e.target.parentElement;
//     let taskIndex = li.dataset.index;
//     localStorage.removeItem(taskIndex);
//     li.remove();
//   }
//   if (e.target.tagName === "LI") {
//     let taskIndex = e.target.dataset.index;
//     e.target.classList.toggle("completed");
//     let task = JSON.parse(localStorage.getItem(taskIndex));
//     task.completed = !task.completed;
//     localStorage.setItem(`${taskIndex}`, JSON.stringify(task));
//   }
// });

// function display() {
//   for (let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i);
//     let task = JSON.parse(localStorage.getItem(key))
//     let li = document.createElement("li");
//     li.dataset.index  = key
//     li.innerHTML = `${task.text} <button class = "dlt">Dlt</button></li>`;
//     if (task.completed) {
//       li.classList.add("completed");
//     }
//     ul.append(li);
//   }
// }

// 43
// const btn = document.createElement("button");
// document.body.append(btn);
// btn.textContent = localStorage.key(0);
// let saveTheme = localStorage.getItem("theme");
// if (saveTheme === "Dark") {
//   btn.textContent = "Light Theme";
//   document.body.classList.add("dark");
// } else {
//   btn.textContent = "Dark Theme";
//   document.body.classList.remove("dark");
// }
// btn.addEventListener("click", () => {
//     document.body.classList.toggle('dark')
//   if (document.body.classList.contains("dark")) {
//     btn.textContent = "Light Theme";
//     document.body.classList.add("dark");
//     localStorage.setItem(
//       "theme","Dark");
//   } else {
//     btn.textContent = "Dark Theme";
//     document.body.classList.remove("dark");
//     localStorage.setItem(
//       "theme","White");
//   }
// });

// 44
// let arr = [
//   {
//     text: "task1",
//     complt: true,
//   },
//   {
//     text: "task2",
//     complt: false,
//   },
//   {
//     text: "task3",
//     complt: false,
//   },
// ];
// render();
// function add(obj) {
//   arr.push(obj);
//   render();
// }
// function dlt(objName) {
//   let flag = arr.find((n) => n.text === objName);
//   arr = arr.filter((n) => n.text !== flag.text);
//   render();
// }
// function update(obj) {
//   let flag = arr.find((n) => n.text === obj);
//   flag.complt = !flag.complt;
//   render();
// }
// const inp = document.querySelector("input");
// const btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   add({ text: inp.value, complt: false });
//   inp.value = "";
// });
// function render() {
//   let ul = document.querySelector("ul");
//   ul.innerHTML = "";
//   arr.forEach((e, i) => {
//     ul.innerHTML += `<li>${e.text}<button data-index=${i} class="dlt">Delete</button><input type="checkbox" data-index=${i} class="checkbox" ${e.complt ? "checked" : ""}>
//     </li>`;
//   });
//   document.querySelectorAll(".dlt").forEach((e) => {
//     e.addEventListener("click", () => {
//       let i = e.dataset.index;
//       dlt(arr[i].text);
//     });
//   });
//   document.querySelectorAll(".checkbox").forEach((e) => {
//     e.addEventListener("click", () => {
//         let ind =e.dataset.index
//         update(arr[ind].text)
//     });
//   });
// }

// 45

// const ul = document.querySelector("ul");
// let count =21;
// window.addEventListener("scroll", () => {
//   if (
//     window.scrollY //user ne kitna scroll kia
// + window.innerHeight //screen/browser window ki visible height kitni hai.
//  >= document.documentElement.scrollHeight //Pure page ki total height kitni hai.
//  - 2 //2 pixel pehle load kro
//   ) {
//     for (let i = 1; i <= 20; i++) {
//       let item = document.createElement("li");
//       item.textContent = count;
//         count++;
//       ul.append(item);
//     }
//   }
// });

// 46

// async function dataLoad() {
//   try {
//     let res = await fetch("https://fakestoreapi.com/products/");
//     let data = await res.json();
//     let loading = document.querySelector("div");
//     loading.style.display = "none";
//     let cards = document.createElement("div");
//     cards.classList.add("cards");
//     cards.style.display = "flex";
//     document.querySelector("body").append(cards);
//     data.forEach((element) => {
//       let card = document.createElement("div");
//       card.innerHTML = `
//         <div class="card">
//           <h1 class="title">${element.title}</h1>
//           <p class="desc">${element.description}</p>
//         </div>`;
//       cards.append(card);
//     });
//   } catch (err) {
//     let loading = document.querySelector("p");
//     loading.textContent = err;
//     loading.backgroundColor = "red";
//     loading.color = "white";
//   }
// }
// dataLoad();

// 47
// let ul = document.createElement("ul");
// async function api(val) {
//   try {
//     let res = await fetch("https://fakestoreapi.com/products/");
//     let data = await res.json();
//     ul.innerHTML = ""
//     data.forEach((element) => {
//       if (val === element.category) {
//         ul.innerHTML += `Title :- ${element.title}  </br> Desc :- ${element.description} </br>`;
//       }
//     });
//   } catch (err) {
//     ul.textContent = "Something went wrong!";
//   }
//   document.querySelector("body").append(ul);
// }
// let inp = document.createElement("input");
// document.querySelector("body").append(inp);
// let setting;
// inp.addEventListener("input", (e) => {
//     clearTimeout(setting);
//     setting= setTimeout(() => {
//     api(e.target.value);
//   }, 400);
// });

// 48
// const btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//     const myEvent = new CustomEvent("itemAdded",{detail:"laptop"})
//     document.dispatchEvent(myEvent)
// });
// document.addEventListener("itemAdded", (e) => {
//     // console.log(e.detail);
//   document.querySelector("p").textContent = e.detail;
// });

// 49
// let val;
// let ind;
// document.addEventListener("dragstart", (e) => {
//   val = e.target;
//   console.log(val);
// });
// document.addEventListener("dragover", (e) => {
//   e.preventDefault();
//   if (e.target.tagName === "LI") {
//     ind = e.target;
//     console.log(ind);
//   }
// });

// document.addEventListener("drop", (e) => {
//   document.querySelector("ul").insertBefore(val, ind);
// });

// 50
// let value ;
// let loc;
// document.addEventListener("dragstart",(e)=>{
//     value = e.target;
// })
// document.addEventListener('dragover',(e)=>{
//     e.preventDefault();
//     loc = e.target.parentElement;
// })
// document.addEventListener("drop",()=>{
//     loc.append(value);
// })

// 51
// let nameValidation = /^[a-zA-Z\s'-]{2,50}$/;
// let emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// let passwordValidation = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
// document.querySelector("form").addEventListener("input", (e) => {
//     e.target.nextElementSibling.textContent = ""
//     if (e.target.type === "text") {
//         if(e.target.value===""){
//         e.target.nextElementSibling.textContent = "*Fill Name"
//     }
//     else if(!nameValidation.test(e.target.value)){
//         e.target.nextElementSibling.textContent = "*Invalid Name"
//     }
//   }
//   if (e.target.type === "email") {
//     if(e.target.value===""){
//         e.target.nextElementSibling.textContent = "*Fill email"
//     }
//     else if(!emailValidation.test(e.target.value)){
//         e.target.nextElementSibling.textContent = "*Invalid email"
//     }
//   }
//   if (e.target.type === "password") {
//     if(e.target.value===""){
//         e.target.nextElementSibling.textContent = "*Fill Password"
//     }
//     else if(!passwordValidation.test(e.target.value)){
//         e.target.nextElementSibling.textContent = "*Invalid password"
//     }
//   }
// });

// 52
// let imgAll = document.querySelectorAll("img");
// const observer = new IntersectionObserver((entries) => {
//   //entries mean report of img in a arr/list format
//   console.log(entries);
//   entries.forEach((element) => {
//     if (element.isIntersecting) {
//       //viewport pr visible h ya nhi
//       element.target.src = element.target.dataset.src;
//       observer.unobserve(element.target); //Image ek baar visible hokar src set ho gayi, toh observer usko watch karna band kar deta hai.
//     }
//   });
// });
// imgAll.forEach((img) => {
//   observer.observe(img);
// });

// 53
// let btn = document.querySelector("button");
// btn.addEventListener("click", (e) => {
//   let p = e.target.parentElement;
//   let inp = document.createElement("input");
//   inp.type = "text";
//   p.append(inp);
//   e.target.remove();
//   createReply(p, inp);
// });
// function createReply(p, inp) {
//   let commentBox = document.createElement("div");
//   commentBox.classList.add("comment");
//   let text = document.createElement("p");
//   let replyBtn = document.createElement("button");

//   replyBtn.textContent = "reply";

//   inp.addEventListener("keydown", (e) => {
//     if (e.key === "Enter") {
//       text.textContent = inp.value;
//       inp.remove();
//     }
//   });

//   commentBox.append(text, replyBtn);
//   p.append(commentBox);
//   replyBtn.addEventListener("click", (e) => {
//     let p = e.target.parentElement;
//     let inp = document.createElement("input");
//     inp.type = "text";
//     p.append(inp);
//     e.target.remove();
//     createReply(p, inp);
//   });
// }

// 54
// window.addEventListener("load", () => {
//   let c = Number(localStorage.getItem("count"));
//   let s = Number(sessionStorage.getItem("count"));
//   c++;
//   s++;
//   localStorage.setItem("count", c);
//   sessionStorage.setItem("count", s);
//   let local = document.createElement("h1");
//   let session = document.createElement("h1");
//   local.textContent="local count :- "+c;
//   session.textContent="session count :- "+s;
//   document.querySelector('body').append(local,session);
// });
// document.querySelector("button").addEventListener("click", () => {
//   localStorage.clear();
//   sessionStorage.clear();
//    document.querySelectorAll('h1')[0].textContent=`local count :- 0`;
//    document.querySelectorAll('h1')[1].textContent=`session count :- 0`;
// });
