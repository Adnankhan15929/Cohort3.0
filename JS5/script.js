// window.console.log("sync");
// // window.alert("nothing")
// window.setTimeout(function (){
//     console.log('2sec');
// },2000)

// setTimeout(function (){
//     console.log('1sec');
// },1000)
// console.log("practice");









//Promises
// let myOrder = new Promise(function (resolve, reject) {
//     console.log('order is coming...');
//  let orderStatus = true
//     setTimeout(function () {
//         if (orderStatus) {
//             console.log('Delivery Done ✅');
//             resolve()
//         } else {

//             reject()
//         }
//     }, 3000)
// })

// myOrder.then(function () {
//     console.log('Making payment...💸');

//     let paymentStatus = true 
//     return new Promise(function (res, rej) {
//         setTimeout(function () {
//             if (paymentStatus) {
//                 console.log('Payment Done ✅');
//                 res()
//             } else {
//                 console.log('Payment Cancelled ❌');
//                 rej()
//             }
//         }, 2000)
//     })
// }).then(function(){
//     console.log('I am eating food...');

//     let foodStatus = false
//     return new Promise(function (res, rej) {
//         setTimeout(function () {
//             if (foodStatus) {
//                 console.log('Pet Bhar Gya');
//                 res()
//             } else {
//                 console.log('Pet Nahi bhara');
//                 rej()
//             }
//         }, 3000)
//     })
// })
// .catch(function () {
//     console.log('Order Cancelled ❌');
// })
// .finally(function(){
//     console.log('Process End');
// })


// let response = fetch('https://fakestoreapi.com/products/')
// response
//     .then(function (data) {
//         console.log('Data aa gya ✅');
//         return data.json()
//     })
//     .then(function (mydata) {
//         console.log(mydata);
//     })
//     .catch(function () {
//         console.error('Data nhi aaya ❌');
//     })


// async function dataLao() {
//     try {
//         let response = await fetch('https://cakestoreapi.com/products/')

//         let data = await response.json()

//         data.forEach(function (elem) {
//             console.log(elem.title);
//         })
//     } catch (error) {
//         console.error('URL galat hai bhai');
//     }
// }


// dataLao()

// let count =5;
// let timeout = setInterval(() => {
//     console.log(count);
//     count--;
//     if(count<0){
//         clearInterval(timeout);
//     }
// }, 1000);


// getUser(1,(user)=>{
//     getorder(user.id,(orders)=>{
//         getorderd(orders,(details)=>{
//             console.log("sb ho gya")
//         })
//     })
// })

// getUser(1)
//     .then(user => getOrder(user.id))
//     .then(orders => getOrderDetails(orders))
//     .then(details => console.log("Sab ho gaya"))
//     .catch(error => console.log(error));

// async function getdata() {
//     try{
//         const user = await getUser(1);
//         const order = await getorder(user.id);
//         const details = await getorderd(order);
// }
// catch(err){
// console.log(err);
// }
// }



// console.log(1);
// setTimeout(() => console.log(2), 0);
// Promise.resolve().then(() => console.log(3));
// Promise.resolve().then(() => {  console.log(4);
//     setTimeout(() => console.log(5), 0);});
// console.log(6);


// async function dataLao() {
//     try{
// const data = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     const response  =await data.json()
//     console.log(response.title);
//     }
//     catch(err){
//         console.log(err);
//     }
    
// }
// dataLao();



// let obj = {
//     name:"adnan",
//     year:2,
//     role:"developer"
// }
// let convert = JSON.stringify(obj)
// console.log(convert);
// let data = JSON.parse(convert)
// console.log(data);
// console.log(typeof convert);
// console.log(typeof data);



// let p1 = Promise.resolve("adnan speak eng")
// let p2 =  Promise.reject("Fail ");
// let p3 = Promise.resolve("adnan eat foot")
// Promise.all([p1,p2,p3]).then((result)=>{
//     console.log(result);
// })
// Promise.allSettled([p1, p2, p3])
//   .then((results) => console.log(results));



// function greet(name){
//     return `hello ${name}`
// }
// function welcome(callback){
//     return `${callback}`
// }
// console.log(welcome(greet("adnan")));


// function greet(name){
//     console.log(`hello ${name}`);
// }
// let time = setTimeout(()=>{
//     greet("adnan")
// },5000)

// clearTimeout(time);

// let count =5;
// let setinterval = setInterval(() => {
//     console.log(count);
//     count--;
//     if (count===0) {
//         clearInterval(setinterval)
//     }
// }, 2000);



// function fetchUser(callback) {
//     console.log("Fetching User...");
//     setTimeout(() => {
//         let user = {id:1, name:"ritik"}
//         callback(user);
//     }, 2000)
// }

// fetchUser((data)=>{
//     console.log(data);
// })


// let time = new Promise(resolve=>{
//     setTimeout(() => resolve("Data received"), 2000);
// })
// time.then(data=>{
//     console.log(data);
// })


// let Pro = new Promise((resolve, reject)=>{
//     reject("Server Down");
// })

// Pro.catch(err=>{
//     console.log(err);
// })



// function addTen(num){
//     return new Promise((resolve)=>{
//         resolve(num+10);
//     })
// }

// Promise.resolve(0)
//     .then(n=>{
//         return addTen(n)})
//     .then(n=>{
//         console.log(n);
//         return addTen(n)})
//     .then(n=>{
//         console.log(n);
//         return addTen(n)})
//     .then(n=>{
//         console.log(n);
//         return addTen(n)});
    


//  function fetchData() {
//     return  new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Data Received");
//         }, 2000);
//     });
// }
// async function handlefetchdata() {
//     try {
//         let data = await fetchData()
//         console.log(data);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// handlefetchdata()




// console.log("A");
// setTimeout(() => {
//     console.log("B");
// },0); //macro task
// Promise.resolve()
//     .then(() => {
//     console.log("C");
// }); //micro task
// console.log("D");



// async function  fetchdata() {
//    try{
//      let res = await fetch("https://jsonplaceholder.typicode.com/users/1")
//     if(res.ok){
//         let Odata = await res.json();
//         console.log(Odata.name);
//     }
//    }
//     catch(err){
//         return err
//     }
// }

// fetchdata()