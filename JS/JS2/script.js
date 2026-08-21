// //Function Declaration
// function aaa(a) {
//   console.log("heyyylloo", a);
// }

// // Functions Expressions
// var bbb = function () {
//   console.log("hellooooo");
// };

// // Arrow Functions
// var ccc = () => {
//   console.log("hellooollo");
// };

// var ddd = (c, b, a) => console.log("helelele", a);

// var eee = () => console.log("helloooloo");

// // IIFE
// // Immidiately Invoked function expression
// (function () {
//   console.log("This is IIFE");
// })()(() => console.log("hello"))();

// function dada() {
//   console.log("I am dada");

//   function papa() {
//     console.log("I am papa");

//     function child() {
//       console.log("I am child");
//     }
//     return child;
//   }
//   return papa;
// }

// dada()()();

// function footpath(w = 10) {
//   console.log("I am Footpath", w, "feet");
// }
// function mainRoad(wid, cb) {
//   console.log("I am Main road", wid, "Feet");
//   cb(wid / 10);
//   cb();
// }

// mainRoad(80, footpath);

// function greet(){
//   console.log("Hello World");
// }
// greet()

// function add(a,b){
//   return a+b
// }
// console.log(add(9,10));

// const square = (a)=>{return a*a};
// console.log(square(4));

// const checkeveneorodd=function(a){
//   if (a%2==0) {return "even"}
//   return "odd"
// }

// console.log(checkeveneorodd(5));

// const checkTemp = function(cel){
//   return (cel*9/5)+32;
// }
// console.log(checkTemp(30));

// let func = function(user="Guest"){
//  return user;
// }
// console.log(func("Adnan"));

// let checkGreater = function (a, b, c) {
//   return a > b && a > c ? a : b > a && b > c ? b : c;
// };
// console.log(checkGreater(9,10,34));


// function areaOfRec (l,b){
//   return l*b;
// }
// console.log(areaOfRec(8,15));


// let checkAdult = (age) =>{
//   if(age>=18) return "Adult"
//   return "Minor"
// }
// console.log(checkAdult(19));


// function rev(str){
//   for(let i=str.length-1; i>=0; i--){
//     console.log(str[i]);
//   }
// }
// rev("Adnan");


// const mul = function(a,b){
//   return a*b;
// }
// console.log(mul(9,4));


// function normalFun(){
//   console.log("normal Function");
// }
// const arrowFunc = ()=>{
//   console.log("Arrow Function");
// }
// normalFun()
// arrowFunc()


// function unlimitedFun(...arr){
//   return arr.reduce((acc,num)=> acc + num,0)
// }
// console.log(unlimitedFun(2,4,3,32));


// let str = "The balck box with a white fox "
// function checkvowels(str){
//   var count =0;
//   for(let i in str){
//     if(str[i]==="a" || str[i]==="e"||str[i]==="i"||str[i]==="o"||str[i]==="u"){
//       count++;
//     }
//   }
//   console.log(count);
// }
// checkvowels(str)


// function palindrome(str){
//   for(let i=0; i<str.length/2; i++){
//     if(str[i]!==str[str.length-1-i]){
//       return "not palindrome"
//     }
//   }
//   return "palindrome"
// }

// console.log(palindrome("naman"))



// setTimeout(function() {
//   console.log("hello");
// }, 3000);

// function func(){
//   return "order 2"
// }
// function highorder(func){
//   console.log(func);
//   return func
// }
// console.log(highorder(func()))



// function fun2(){
//   return "fun2"
// }
// function fun(fun2){
//   return fun2
// }
// console.log(fun(fun2()));


// function sub(a,b){
//   return a-b;
// }
// console.log(sub(3,5));


// function factorial(n){
//   if(n==1) return 1
//   return factorial(n-1)*n
// }
// console.log(factorial(5));



// function febonaci(a,b,ans,n){
//   if(n==0) return
//   ans = a+b;
//   console.log(ans);
//   a=b;
//   b=ans;
//   return febonaci(a,b,ans,n-1)
// }
// let a=0,b=1,ans=0;
// console.log(a);
// console.log(b);
// console.log(febonaci(a,b,ans,3));


// function findPower(num,power){
//   if(power ==0) return 0
// else if (power==1) return 1
// return findPower(num,power-1)*num
// }
// console.log(findPower(2,10));


// (function(){
//   console.log("Executed");
// })();



// function factorial(n){
//   if(n==1) return 1
//   return factorial(n-1)*n
// }
// console.log(factorial(5));


// function counter(){
//   let count =0
//   return function(){
//     count++
//     return count
//   }
// };

// let count = counter()
// console.log(count())
// console.log(count())
// console.log(count())
// console.log(count())



// let currying = (a)=>(b)=>{
// return a+b
// }
// let curried = currying(10)
// console.log(curried(5));


// setTimeout(()=>{
//   console.log("debouce func");
// },1000)


// setTimeout(()=>{
//   console.log("Throttle func");
// },2000)

// setTimeout(()=>{
//   console.log("executes only once ");
// },5000)



// let arr =[1,2,3,4,5]
// let arr2 = arr.map((a)=>{
//   return a*2
// })
// console.log(arr);
// console.log(arr2);


// let arr =[100,122,33,423,53]
// let arr2 = arr.filter((a)=>{
//   return a>99
// })
// console.log(arr);
// console.log(arr2);


// const arr =[1,2,3,4,5]
// let arr2 = arr.reduce((acc,num)=>acc+num,0)
// console.log(arr);
// console.log(arr2);


// let arr =[1,2,3,4,5]
// arr.forEach(i=>console.log(i))


// function test() {
//     return;
//     console.log("Hello");
// }
// console.log(test());


// let arr = ["mango","bnana","apple","kiwi","grapes"]
// console.log(arr[arr.length-1]);
// console.log(arr[0]);
// console.log(arr.length);
// arr.push("orange")
// console.log(arr);
// arr.pop()
// console.log(arr);
// arr.unshift("stawberry")
// console.log(arr);
// arr.shift()
// console.log(arr);
// arr.reverse()
// console.log(arr);

// let arr = [3,2,8,3,7,4,5]
// arr.sort()
// console.log(arr);
// arr.sort((a,b)=>b-a)
// console.log(arr);


// let arr = [3,4,56,7,8]
// arr.splice(2,3)
// console.log(arr);
// arr.splice(1,0,4,5,6,7)
// console.log(arr);
// let arr2= arr.slice(0,4)
// console.log(arr2);
// console.log(arr2.indexOf(5));
// console.log(arr2.includes(30));
// console.log(arr2.join("."));
// console.log([...[1,2],...[3,4]]);
// console.log([...arr]);
// console.log(Math.max(...arr));
// let [x,y] = arr
// console.log(x,y);
// [x,y]= [y,x]
// console.log(x,y);


// let arr = [1,2,3,4,5,900]
// console.log(arr);
// arr.forEach(i=>console.log(i*2))

// let arr2  = arr.map(i=>{return i*i})
// console.log(arr2);

// let arr2 = arr.filter(i=>{
//   return i%2==0
// })
// console.log(arr2);

// let arr2 = arr.reduce((acc,num)=>acc + num,0)
// console.log(arr2);

// let max = arr.reduce((acc,num)=> {if (acc>num) return acc
//   else return num
// },0)
// console.log(max);

// console.log(arr.find(i=>i%2==0));

// console.log(arr.findIndex(i=>i>50));

// console.log(arr.some(i=>i<0));

// console.log(arr.every(i=>i>0));

// let names = ["Adnan","sarthak","mohsin","khan"]
// names.forEach(i=>console.log(i.toUpperCase()))

// let marks = [54,76,81,45,87,99,34]
// let student = marks.filter(i=> i>80)
// console.log(student);


// let avg = [4,4,4,4,4]
// console.log((avg.reduce((acc,num)=>(acc+num),0))/avg.length);


// let arr = [1,2,3,2,1,2,3]
// let counts  = {}
// for(const a of arr ){
//   counts[a] = (counts[a]||0)+1
// }
// console.log(counts);


// let arr = [1,2,3,[6,4,3,2],[5,3,5]]
// console.log(arr);
// console.log(arr.flat());


// let arr = [1,1,2,2,3,3,4,3,2,1]
// console.log(...new Set(arr));


// let arr = [
//     {name:"Adnan", age:20},
//     {name:"hasan", age:10},
//     {name:"sarthak", age:35}
// ]
// arr.sort((a,b)=>a.age-b.age);
// console.log(arr);


// let cart = [
//     {shoes:500, tshirt:450,shirt:500},
//     {shoes:900, tshirt:1000,shirt:500},
//     {shoes:5000, tshirt:450,shirt:1000}]

// let total = cart.reduce((acc,num)=>{ return acc+(num.shirt+num.shoes+num.tshirt)},0)
// console.log(total);


// const user = [
//     {name:"Adnan",age:90},
//     {name:"alice",age:12},
//     {name:"mohd", age:20}
// ]
// let group = Object.groupBy(user,use=>use.age)
// console.log(group);


// const number = [1,2,3,4,5]
// const chaining = number.filter(a=>a%2!==0).map(a=>a*a);
// console.log(chaining);


// diff btw map and foreach
// map is used to transform and create a new arr and not change original one
// foreach change original array and modify original array


// let student = {
//     name:"adnan",
//     rollno:13,
//     branch:"aids"
// }
// console.log(student.name,student.rollno,student.branch);
// console.log(student["name"],student["rollno"],student["branch"]);
// student.year = "3rd year"
// console.log(student);
// student.branch = "cse-aids"
// console.log(student);
// delete student.branch
// console.log(student);


// let method = {
//     name:"ADNAN",
//     add(a,b) {
//         console.log(this.name);
//         return a+b},
//     sub(a,b){return a-b}

// }
// console.log(method.add(5,2));
// console.log(method.sub(5,2));



// let nestedobj = {
//     name:"adnan",
//     address:{
//         city:"bhopal",
//         state:"MP",
//         area:{
//             colony:"bank colony",
//             nearby:"madina masjid"
//         }
//     }
// }

// console.log(nestedobj.address.area.nearby);

// let {name:firstName,address="Bhopal,mp"} = nestedobj
// console.log(firstName);
// console.log(address);

// let copy = {...nestedobj}
// console.log(copy);


// let extra  = {firstname:"dnan",age:90,county:"bhoopal"}
// let merge = {...nestedobj,...extra}
// console.log(merge);


// let user = {name:"adnan",
//     age:45,
//     city:"bhopal",
// }
// console.log(Object.keys(user));

// console.log(Object.values(user));

// console.log(Object.entries(user));

// for(let i in user){
//     console.log(i,user[i]);
// }

// let frozen = Object.freeze(user)
// user.age= 34
// delete user.name;
// user.lastName = "khan"
// console.log(user);

// let seal = Object.seal(user)
// user.age= 34
// delete user.name;
// user.lastName = "khan"
// console.log(seal);

// let arr = [{
//     name:"adnan",
//     age:"20",
//     clg:"sistec"
// },{
//     name:"ali",
//     age:"90",
//     clg:"rgpv"
// },{
//     name:"piyush",
//     age:"10",
//     clg:"oriantl"
// }]

// console.log(arr.sort((a,b)=>b.age-a.age));
// console.log(arr[0]);




// TODOLIST

// let TodoList = []

// function addTask(task){
//     TodoList.push({id:TodoList.length+1,task,isDone:false})
// }
// function completeTask(task){
//     let compltTask = TodoList.find(obj=>obj.task===task)
//     if (compltTask) compltTask.isDone=true;
// }
// function deleteTask(task){
//     TodoList = TodoList.filter(obj=>obj.task!==task)
// }
// function readTask(){
//     TodoList.forEach((obj)=>{
//         console.log(`${obj.id}. ${obj.task} Task is ${obj.isDone?"Completed":"Not Completed"}`);
//     })
// }
// addTask("github lecture on sheriyans")
// // readTask()
// addTask("sheet 2 3 4 of phase 2")
// readTask()
// completeTask("sheet 2 3 4 of phase 2")
// // readTask()
// completeTask("github lecture on sheriyans")
// readTask()
// deleteTask("github lecture on sheriyans")
// // readTask()
// deleteTask("sheet 2 3 4 of phase 2")
// readTask()




// Shopping cart

// let cart = []
// function additem(item,price,quantity){
//     cart.push({id:cart.length+1,item,price,quantity})
// }
// function removeitem(item){
//     cart = cart.filter(obj=>obj.item!==item)
// }
// function calculateTotal(){
//     let total = cart.reduce((acc,num)=>acc+(num.price*num.quantity),0)
//     console.log(`Total Bill : ${total}`);
// }
// function quantity(item,quantity){
//     let q = cart.find(n=>n.item===item)
//     q.quantity+=quantity
// }
// function readTask(){
//     cart.forEach((obj)=>{
//         console.log(`${obj.id}. ${obj.item} ${obj.price} ${obj.quantity}`);
//     })
// }
// additem("dairy milk",10,2)
// additem("cold drink",10,1)
// // readTask()
// // calculateTotal()
// additem("popcorn",20,1)
// // calculateTotal()
// quantity("cold drink",5)
// // calculateTotal()
// // readTask()
// removeitem("dairy milk")
// // readTask()
// removeitem("popcorn")
// readTask()
// calculateTotal()


// Student Grade Tracker

// let students = [
//     { name: "Aman", marks: [80, 90, 75] },
//     { name: "Priya", marks: [95, 85, 92] },
//     { name: "Raj", marks: [60, 55, 70] }
// ];

// function avgMarks(name){
//      return (students.find(s=> s.name === name)).marks.reduce((acc,n)=>acc+n,0)/3;
// }
// function Grade(name){
//     let avg = avgMarks(name)
//     if (avg>=90) return "A"
//     else if(avg>=75) return "B"
//     else if(avg>=60) return "C"
//     else return "Fail"
// }

// students.forEach(s=>{
//     console.log(`${s.name} : Avg = ${avgMarks(s.name).toFixed(2)} , Grade = ${Grade(s.name)}`);
// })


//Word Frequency Counter

// function wordFrequencyCounter(text){
//     text = text.split(" ")
//     let obj = {}
//     text.forEach(element => {
//         obj[element] = (obj[element]||0)+1
//     });
//     return obj
// }

// let text =
// "the quick brown fox jumps over the lazy dog the fox is quick";
// console.log(wordFrequencyCounter(text));


//Library Management System

// let library = []

// function addBook(name,author){
//     library.push({id:library.length+1,
//         name,author,boorowed:false})
// }
// function boorowedBook(name){
//     let book =library.find(s=>s.name===name)
//     if(!book) return "Book not found"
//     if(book.boorowed) return "Already boorowed"

//     book.boorowed = true
//     return `You boorowed ${book.name} book`
// }
// function returnBook(name){
//     let book = library.find(b => b.name === name)
//     if(!book) return "Book not found"
//     book.boorowed = false
//     return `You return ${name} book`
// }
// function checkBooks(){
//     console.log("Available Books");
//     library.forEach(b =>{
//         if(!b.boorowed){
//              console.log(`BookNo. : ${b.id}, Book-Title : ${b.name}, Book-Author : ${b.author}`)
//         }
//     });
// }
// addBook("Psychology of money","Morgan housel")
// addBook("IKIGAI","Hector Garcia")
// addBook("Atomic habits","James Clear")
// checkBooks()
// console.log(boorowedBook("IKIGAI"));
// checkBooks()
// console.log(returnBook("IKIGAI"));
// checkBooks()



// const arr = [1,2,3];
// arr[10] = 5;
// console.log(arr.length);
// console.log(typeof []);
// console.log([] == false);
// console.log([1,2] + [3,4]);

// function x(a,b){
//    return a+b;
// }
// console.log(x(2));


// Array.prototype.myMap = function(callback){
//     let result = []
//     for(let i =0 ; i<this.length; i++){
//         result.push(callback(this[i],i,this))
//     }
//     return result;
// }

// console.log([1,2,3].myMap(x=>x*2));



// Array.prototype.Myfilter = function(callback){
//     let ans = []
//     for(let i=0; i<this.length ; i++){
//         let check = callback(this[i],i,this)
//        if (check){
//         ans.push(this[i])
//        }
//     }
//     return ans
// }
// console.log([1,2,3].Myfilter(x=>x%2!==0));



// Array.prototype.Myreduce = function (callback, initialValue) {
//     let acc;
//     let startIndex;

//     if (this.length === 0) {
//         if (arguments.length > 1) {
//             return initialValue;
//         }
//         throw new TypeError("Reduce of empty array with no initial value");
//     }

//     if (arguments.length > 1) {
//         acc = initialValue;
//         startIndex = 0;
//     } else {
//         acc = this[0];
//         startIndex = 1;
//     }

//     for (let i = startIndex; i < this.length; i++) {
//         acc = callback(acc, this[i], i, this);
//     }

//     return acc;
// };

// console.log([1,2,3].Myreduce((acc,n)=>acc-n,5));


// deep clone function
// let og =[1,2,3,4,{1:"adnan"},"fasd",'d',true,2.4,[2,2,34]]
// let deepcopy = structuredClone(og) //itis use to safe the original one
// console.log(og);
// deepcopy[4].key = "han"
// console.log(deepcopy);


// student management System
// let student = [{name:"Adnan khan",rollno:1,gpa:7.5,course:"CSE-Ai/Ds"}]
// function addOrUpdateStudent(stuname,sturollno,stugpa,stucourse){
//    let s1 = student.find(n=>n.rollno ===sturollno)
//    if (s1!==undefined){
//     s1.name= stuname
//     s1.gpa= stugpa
//     s1.course= stucourse
//     s1.rollno= sturollno
//     }
//     else {
//         student.push({
//     name:stuname,
//     rollno: sturollno,
//     gpa: stugpa,
//     course:stucourse
//     })
//     }
// }

// function deleteStudent(sturollno){
//     let s1 = student.find(n=>n.rollno ===sturollno)    
//     console.log(`${s1.name} is removed from the list`);
//     student = student.filter(n=>n.rollno!==s1.rollno)
// }
// function allStudent(){
//     console.log(`There are Total ${student.length} Students
// and there details are given below :-`);
    
//     student.forEach((n)=>{
//         console.log(`Student roll no : ${n.rollno}
// Student name : ${n.name}
// Student course : ${n.course}
// Student CGPA : ${n.gpa}`);      
//     })
// }
// function getStudentByRollno(sturollno){
//     let s1 = student.find((n)=>n.rollno === sturollno) 
//     if(s1)   {
//         console.log(`Student roll no : ${s1.rollno}
// Student name : ${s1.name}
// Student course : ${s1.course}
// Student CGPA : ${s1.gpa}`);      
//     }
//     else{
//         console.log("Student is not in the list");
//     }
// }

// function getStudentByName(stuname){
//     let s1 = student.find((n)=>n.name === stuname) 
//     if(s1)   {
//         console.log(`Student roll no : ${s1.rollno}
// Student name : ${s1.name}
// Student course : ${s1.course}
// Student CGPA : ${s1.gpa}`);      
//     }
//     else{
//         console.log("Student is not in the list");
//     }
// }
// function getStudentByCourse(stucourse){
//     let s1 = student.find((n)=>n.course === stucourse) 
//     if(s1)   {
//         console.log(`Student roll no : ${s1.rollno}
// Student name : ${s1.name}
// Student course : ${s1.course}
// Student CGPA : ${s1.gpa}`);      
//     }
//     else{
//         console.log("Student is not in the list");
//     }
// }
// function getStudentByGrade(stugpa){
//     let s1 = student.find((n)=>n.gpa === stugpa) 
//     if(s1)   {
//         console.log(`Student roll no : ${s1.rollno}
// Student name : ${s1.name}
// Student course : ${s1.course}
// Student CGPA : ${s1.gpa}`);      
//     }
//     else{
//         console.log("Student is not in the list");
//     }
// }
// addOrUpdateStudent("Adnan khan",1,7.6,"CSE-Ai/Ds")
// addOrUpdateStudent("Ibaad ullah khan",2,6,"CSE")
// addOrUpdateStudent("Shariq hasan",3,7,"CSE-IT")
// addOrUpdateStudent("Amaan khan",4,8.2,"CSE-Cyber")
// addOrUpdateStudent("piyush goel",5,6,"Mechanical")
// allStudent()
// deleteStudent(1)
// allStudent()
// getStudentByRollno(5)
// getStudentByRollno(2)
// getStudentByRollno(1)
// getStudentByCourse("CSE-Ai/Ds")
// getStudentByGrade(7)
// getStudentByName("Amaan khan")

//library management System 

// let library = []
// function addBook(bookname){
//     library.push({id:library.length+1,BookName:bookname,borrowed:false })
//     console.log(`${bookname} book is added to the library`);
// }
// function borrowedBook(bookname){
//     let book = library.find(n=>n.BookName===bookname)
//     book.borrowed=true;
//     console.log(`${book.BookName} is issued`);
// }
// function returnBook(bookname){
//     let book = library.find(n=>n.BookName===bookname)
//     book.borrowed=false;
//     console.log(`${book.BookName} is returned`);
// }
// function readBooks(){
//     library.forEach(n=>{
//         console.log(`${n.id}. ${n.BookName} is ${n.borrowed?"Borrowed":"Not Borrowed"}`);
//     })
// }
// addBook('Psychology of money')
// addBook('atomic habits')
// addBook('IKIGAI')
// readBooks()
// borrowedBook("atomic habits")
// borrowedBook("Psychology of money")
// borrowedBook("IKIGAI")
// readBooks()
// returnBook("atomic habits")
// returnBook("Psychology of money")
// returnBook("IKIGAI")
// readBooks()

// Expence tracker
// wallet =[]
// function addMoney(amount,category){
//     wallet.push({id:wallet.length+1,Amount:Number(amount),Category:category})
// }
// function getTotal(){
//     return wallet.reduce((total,item)=>total+item.Amount,0)
// }
// addMoney(800,"shoes")
// addMoney(2800,"Watch")
// addMoney(550,"glasses")
// console.log(getTotal());
// console.log(wallet);

// inventory management System
// let inventory = []

// function addIn(n,q,p){
//     inventory.push({id:inventory.length+1,item:n,quantity:q,price:p})
//     console.log(`Item added successfully : ${n}`);
// }
// function updateIn(id,q,p){
//     let update = inventory.find(n=>n.id===id)
//     update.quantity=q
//     update.price=p
//     console.log(`Item update successfully : ${update.item}`);
// }

// function removeIn(id){
//     inventory = inventory.filter(n=>n.id!==id)
//     console.log(`Item removed successfully`);
// }

// function readIn(){
//     console.table(inventory)
// }
// addIn("cycle",2,4000)
// addIn("tool Box",1,2000)
// addIn("machine",1,7000)
// addIn("cooler",1,20000)
// addIn("fan",2,4000)
// readIn()
// updateIn(1,1,2000)
// updateIn(5,5,10000)
// readIn()
// removeIn(2)
// removeIn(3)
// readIn()

// function utilityfun(a,b){
//     return a+b
// }
// function square(a){
//  return a*a
// }
// let compose =(a,b) => square(utilityfun(a,b))
// console.log(compose(5,5));

// let obj = {
//     add:(a,b)=>{
//         return a+b
//     },
//     sub:(a,b)=>{
//         return a-b
//     },
//     mul:(a,b)=>{
//         return a*b
//     },
//     div:(a,b)=>{
//         return a/b
//     }
// }

// console.log(obj.div(15,50));


//SCENARIO-BASED QUESTIONS

// let arr = [
//     user1={
//         name:'adnan khan',
//         active:true
//     },
//     user2={
//         name:'elon modi',
//         active:false
//     },
//     user3={
//         name:'alex harmozi',
//         active:true
//     },
// ]
// function check(user){
//     if(user.active===true)
//         return user;
// }
// for(let user in arr){
//     if(check(arr[user])){
//         console.log(check(arr[user]));
//     }
//     else continue;
// }



// let userorder= [
//     order1={
//         revenue:1000,
//         name:'chips'
//     },
//     order2={
//         revenue:4000,
//         name:'cola'
//     },
//     order3={
//         name:'biscuit',
//         revenue:5000
//     }
// ]
// let tr = userorder.reduce((acc,n)=>acc+n.revenue,0);
// console.log("total revenue ",tr);


// let slargest = [34,23,65,90,2,30];
// let largest = slargest[0]
// let sl = slargest[1]
// for(let i in slargest){
//     if(slargest[i]>largest){
//         sl=largest
//         largest=slargest[i];
//     }
// }
// console.log(sl);

// function missingvalue(arr,n){
//     let expsum = (n*(n+1))/2;
//     let actsum = arr.reduce((acc,num)=>acc+num,0)
//     return expsum-actsum;
// }
// console.log(missingvalue([1,2,3,4,5,7,8],8));

// let obj1 = {
//     name:'adnan khan'
// }
// let obj2 = {
//     name:'ak47'
// }
// console.log(JSON.stringify(obj1)===JSON.stringify(obj2));



// Interview-Level Questions
// 1. Function Declaration
function add(a, b) {
    return a + b;
}


// 2. Function Expression
let add2 = function(a, b) {
    return a + b;
};


// 3. Arrow Function
let add3 = (a, b) => {
    return a + b;
};
// Function Declaration
// → Normal function
// → Hoisted

// Function Expression
// → Function ko variable me store kiya

// Arrow Function
// → Function ka short form
// → this alag behave karta hai

// let arr = [2,4,2,3]
// let sl = arr.slice(1,2); //extract elements
// console.log(sl);
// let sp = arr.splice(0,4,1,2,3,4,5); //start,remove count , add
// console.log(sp);
// console.log(arr);

// let arr = [ 1,2,3,4,5]
// let m = arr.map((n)=>n*n)
// console.log(m,arr);
// let fil = arr.filter(n=>n<3)
// console.log(fil,arr);
// let red = arr.reduce((n,m)=>n+m,1)
// console.log(red,arr);


// let arr = [10,20,30,40,50]
// for(let i in arr){
//     console.log(i);
// }
// for(let j of arr){
//     console.log(j);
// }

// let obj = {
//     student:{
//         state:{
//             city:"MP"
//         }
//     }
// }
// let objshello = {...obj}
// objshello.student.name = "adnan"
// // console.log(objshello,obj);
// let og = JSON.stringify(obj)
// let objdeep = JSON.parse(og)
// obj.student.roll = 13
// console.log(objdeep,obj);

// Logic Building Questions
// let rot = [1,2,3,4,5]
// let k =3
// let step = k%rot.length
// let front = rot.slice(step)
// let back = rot.slice(0,step)
// rot = [...front,...back]
// console.log(rot);


// let str = "abbcccdddd"
// let fre ={}
// for(let i of str){
//     fre[i] = (fre[i]||0)+1
// }
// console.log(fre);

// let sentence = "Find longest word in a sentence";
// let sen= sentence.split(" ");
// let longestword = ""
// for(let i of sen){
//     if(longestword.length<i.length){
//         longestword= i
//     }
// }
// console.log(longestword);

// Check if two strings are anagrams.
// let str1 = "listen"
// let str2 = "silnet"
// let flag = true
// if(str1.length!== str2.length){
//     flag = false;
// }
// else{
//     for(let i of str1){
//     if(!str2.includes(i)){
//         flag = false
//         break;
//     }
//     else{
//         str2 = str2.replace(i,"")
//     }
// }
// }
// console.log(flag);

// let sen = "adnan khan Capitalize first letter of every word."
// let sp = sen.split(" ")
// let capsen='';
// for(let i of sp){
//     let a =i[0].toUpperCase();
//     let ii = i.replace(i[0],a)
//     capsen = capsen + " " +ii;
// }
// console.log(capsen);

// let cap = sen.split(" ").map((n)=>n.charAt(0).toUpperCase()+n.slice(1)).join(" ")
// console.log(cap);

// let value = [0,false,true,"0",1,-5,"ehloo",-0,[],{},Infinity,"",null,undefined,NaN]
// let truthyvalue = value.filter(Boolean)
// let falseyvalue = value.filter(n=>!Boolean(n))
// console.log("Truthy: ",truthyvalue);
// console.log("Falsey: ",falseyvalue);

// let arr = [1,2,3,4]
// let obj = {...arr}
// console.log(obj);

// let obj = {a:"andna",b:"khan"}
// let arr = Object.entries(obj)
// console.log(arr);

// let arr = [1,2,3,4,5,6,1,5,3,2]
// for(let i=0 ; i< arr.length-1;i++){
//     for(let j=i+1 ; j< arr.length;j++)
//     {
//         if(arr[i]==arr[j]){
//             console.log(arr[j]);
//         }
//     }
// }

// let s1 = [1,2,3]
// let s2 = [4,5,6]
// console.log([...s1,...s2]);

//real world practice
// let passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/;
// function auth(n="",g="",p=""){
//     if(n.length===0 || g.length===0|| p.length === 0){
//         console.warn("Fields are empty")
//         return;
//     }
//     if(!g.includes("@gmail.com")){
//         console.warn("write @gmail.com in gmail");
//         return;
//     }
//     if( !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(p)){
//         console.log("Invalid Password");
//     }
// }
// auth()
// auth("adnan","khanadnan032@gmail.com","Adnan89@")


// let otp = Math.floor(Math.random()*9000+1000)
// console.log(otp);

// let pass = "Adnan9@$"
// console.log(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(pass))

// let list  = {player1 :{
//     name:"adnan",
//     score:99
// },}
// function addPlayer(n,s){
//     list["player"+(Object.keys(list).length+1)]={
//         name:n,
//         score:s
//     }
// }
// function updatescore(naam,sc){
//     let p = Object.values(list).find(n=>n.name===naam)
//     p.score = sc
// }
// addPlayer("ali",0)
// addPlayer("aliya",10)
// updatescore("ali",100)
// let array = Object.values(list)
// array.sort((a,b)=>b.score-a.score)
// console.table(array);


//attendace management logic
// let listStu = {1:{
//         Name:"Sahil",
//         AttendacePercentage:"50%",
//         lecturesAttend:150,
//         absentLectures:150,
//         Present:""
//     }}
    
// function addStu(name,lA,lAbs,Pre="Absent"){
//     listStu[(Object.keys(listStu).length+1)]={
//         Name:name,
//         lecturesAttend:lA,
//         absentLectures:lAbs,
//         Present:Pre
//     }
// }

// function attendace(rollNo){
//     let a = Object.keys(listStu).find((key)=>Number(key)===rollNo)
//     listStu[a].Present = "Present"
// }

// function updateAttendance(rollNo,lA,lAbs){
//     let a = Object.keys(listStu).find((key)=>Number(key)===rollNo)
//     listStu[a].lecturesAttend=lA,
//     listStu[a].absentLectures=lAbs
// }

// function calculateAtt(rollNo){
//     let a = Object.keys(listStu).find((key)=>Number(key)===rollNo)
//     let b = listStu[a].lecturesAttend
//     let c = listStu[a].absentLectures
//     let persentage = ((b)/(b+c))*100;
//     listStu[a].AttendacePercentage = `${persentage.toFixed(2)}%`
// }
// console.log(listStu);
// addStu("adnan khan",150,150,"Present");
// console.log(listStu);
// addStu("srk khan",290,10);
// attendace(1);
// console.log(listStu);
// updateAttendance(2,200,100)
// calculateAtt(3)
// calculateAtt(2)


// # Advanced Functional Programming
// compose func 
function add (a,b) {return a+b};
function sub (a,b) {return a-b};
function mul (a,b) {return a*b};
function div (a,b) {return a/b};

function compose(...fns){
    return function (val,tu){
        return fns.reduceRight((acc,fn)=>fn(acc,tu),val,tu)
    }
}

// console.log(compose(add,sub,mul,div)(4,2));
//1. 4/2=2
//2. 2*2=4
//3. 4-2=2
//4. 2+2=4

function pipi(...fns){
    return function(val,secval){
        return fns.reduce((acc,fn)=>fn(acc,secval),val,secval)
    }
}
//1. 2+3=5
//2. 5-3=2
//3. 2*3=6

// console.log(pipi(add,sub,mul)(2,3));


//create custom event emitter
// class CustomEventEmitter{
//     constructor(){
//         this.event={};
//     }
//     on(eventName,callback){
//         if(!this.event[eventName]){
//             this.event[eventName] = [];
//         }
//         this.event[eventName].push(callback);
//     }
//     emit(eventName,...args){
//         if(this.event[eventName]){
//             this.event[eventName].forEach(callback => callback(...args));
//         }
//     }
// }
// const obj = new CustomEventEmitter();

// obj.on('orderplaced',(orderid,price)=>{
//     console.log(`order ${orderid} receiced. Total Price: ${price}`);
// })


// obj.emit('orderplaced','OD12345',1500)
// obj.emit('orderplaced','OD12343',1000)
// obj.emit('orderplaced','OD89345',1200)


// function done(value){
//     console.log(value);
// }
// function outer(){
//     var savedCallBack;
//     var savedValue;
//     var state = "pending";
//     function then(callback) {
//         if(state==="fulfilled"){
//             callback(savedValue)
//         }
//         else{
//             savedCallBack = callback;
//         }
//     }
//     function resolve(value){
//         if(state!=="pending") return ;
//         savedValue=value
//         state="fulfilled";
//         if(savedCallBack){
//             savedCallBack(savedValue)
//         }
//     }
//     return {
//         then:then,
//         resolve:resolve
//     }
// }

// const something = outer()
// something.then(done);
// something.resolve("Hello")




//SHEET 2
// let arr = ["spider man","domsday","toxic","KGF","totaldhamal"]
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }


// let arr = [12,2,3,"khan","adnan",true,false,[1,2,3,4]]
// console.log(arr[7]);
// console.log(arr[0],arr[arr.length-1]);
// let temp = arr[1]
// arr[1] = arr[arr.length-2]
// arr[arr.length-2]=temp;
// console.log(arr);


// let arr = [[1,2,3],[4,5,6],[7,8,9]]
// console.log(arr[0][0],arr[1][0],arr[2][0]);
// console.log(arr[0][0]|+arr[1][1]+arr[2][2]);

// let arr = [12,2,3,"khan","adnan",true,false]
// // console.log(arr.length);
// let checklength = function(){
//     let len = arr.length;
//     if(len%2==0){
//         return "length is even"
//     }
//     else{
//         return "length is odd"
//     }
// }
// console.log(checklength());


// let arr = [1,2,3,4,5]
// let arr1 = []
// // arr.push(1,2,3)
// // console.log(arr);
// for(let i =0 ; i<arr.length; i++){
//     arr1.push(arr[i])
// }
// console.log(arr1);


// let arr = [1,2,3,4]
// console.log(arr.pop());
// while(arr.length!=0){
//     console.log(arr.pop());
// }


// let username = ["Adnan","ibad","charlie","suhana"]
// console.log(username);
// username.unshift("kk","piush","kunal",'rakesh')
// console.log(username);


// username.shift()
// console.log(username);
// while(username.length>2){
//     username.shift()
// }
// console.log(username);


// let arr = ["Adnan","ibad","charlie","suhana","abdul "]
// console.log(arr);

// arr.splice((arr.length/2)-1,2)
// arr.splice((arr.length/2)-1,3,"kk","husna","talha","sami","alin")
// arr.reverse();

// let temp = arr[0]
// arr[0]=arr[2]
// arr[2]=temp;
// console.log(arr);



// let arr = [5,4,2,6,3,1]
// console.log(arr);
// let even = (arr.filter(a=>a%2==0)).sort();
// let odd = (arr.filter(a=>a%2!=0)).sort();
// console.log(even.concat(odd));
// let newarr = arr.slice(0,4)
// let newarr = arr.slice(1,arr.length-1)
// console.log(newarr);
// let arr2 = [1,2,3,4,5]
// console.log(arr.concat(arr2));
// let arr3 =  [3,5,7,9,0]
// let combinationof3=arr.concat(arr2).concat(arr3);
// let removedup = []
// // console.log(removedup.includes(a));
// combinationof3.forEach((n)=>
//     {
//     if(!removedup.includes(n)){
//         removedup.push(n)
//     }
// }
// )
// console.log(removedup);
// let arr = ["mango","apple","banana"]
// let arrcheck = ["mango","kiwi","apple","pineapple"]
// function inclu(arr){
//     if(arr.includes("apple")) return true
// else return false
// }
// console.log(inclu(arr));

// for (let index = 0; index < arrcheck.length; index++) {
//     if(arr.includes(arrcheck[index])){
//         console.log(true);
//     }
//     else console.log(false);
// }



// let arr = ["Adnan","ibad","charlie","rahul","abdul"]
// console.log(arr.indexOf("rahul"));

//  let arr = [1,5,3,4,5,2,3,5]
// for(let i=0; i<arr.length; i++){
//     if(arr[i]===5) console.log(i);
//  }



// let arr = ["Adnan","is","became","a","Developer"]
// console.log(arr.join(","));
// console.log(arr.join(" "));
// for(let i=0 ; i<arr.length; i++){
//     // console.log(arr[i]);
//     if(i%2==0) console.log(arr[i]);
// }
// for(let i of arr){
//     console.log(i);
// }


// let char = ['a','b','i','u','e','f','g','i','p','u','o']
// let vowels = ['u','a','i','o','e']
// for(let i of char){
//     if(vowels.includes(i)) console.log("vowels");
// }


// let arr = [1,2,34,45,5]
// let arr2 = [...arr]
// arr2[2]="modify"
// console.log(arr);
// console.log(arr2);


// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// let arr3= [7,8,9]
// let mergedArray = [...arr1,...arr2,...arr3]
// console.log(mergedArray);
// mergedArray.splice(3,0,55,90)
// mergedArray.splice(6,0,50,100)
// console.log(mergedArray);



















// SHEET 3
// let prices = [100, 250, 399, 499];
// prices.forEach(n=>console.log(`₹${n}`))


// let students = [
//   { name: "Anubhav", marks: 85 },
//   { name: "Rahul", marks: 42 },
//   { name: "Aman", marks: 90 },
// ];
// students.forEach(n=>{
//     if(n.marks>50) console.log(`${n.name} Pass`);
//     else console.log(`${n.name} Fail`);
// })


// let names = ["anubhav", "rahul", "aman"];
// console.log(names.map((n)=>console.log(n.toUpperCase())
//  ));


// let products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Phone", price: 20000 },
// ];

// let newproducts = products.map((n)=>{
//     return {
//         name : n.name,
//         price : n.price,
//         discountPrice:n.price-(n.price/10)
//     }});
// console.log(newproducts);


// let arr = [1,2,3,4,5,6,7,8];
// console.log(arr.filter(a=>a%2==0));
// console.log(arr);

// let users = [
//   { name: "Anubhav", active: true },
//   { name: "Rahul", active: false },
//   { name: "Aman", active: true },
// ];
// console.log(users.filter(a=>a.active===true));

// let nums = [10,20,30,40];
// console.log(nums.reduce((acc,num)=>acc+num));

// let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
// let obj ={}
// fruits.forEach((fruit)=>{
//     obj[fruit] = (obj[fruit] || 0)+1;
// })
// console.log(obj);


// let nums = [20, 35, 60, 80];
// console.log(nums.find(n=>n>=50));

// let users = [
//   { username: "rahul" },
//   { username: "admin" },
//   { username: "aman" }
// ];
// console.log(users.find(n=>n.username==="admin"));

// let nums = [10, 40, 90, 50];
// console.log(nums.findIndex(n=>n===90));

// let students = [
//   { name: "A", marks: 90 },
//   { name: "B", marks: 30 },
//   { name: "C", marks: 70 },
// ];
// console.log(students.findIndex(n=>n.marks<40));


// let nums = [10,20,-5,40]
// console.log(nums.some(n=>n<0));

// let products = [
//   { name: "Laptop", stock: 5 },
//   { name: "Phone", stock: 0 },
// ];
// console.log(products.some(n=>n.stock===0));

// let nums = [10, 20, 30, 40];
// console.log(nums.every(n=>n>=0));

// let students = [
//   { name: "A", marks: 80 },
//   { name: "B", marks: 45 },
//   { name: "C", marks: 60 },
// ];
// console.log(students.every(n=>n.marks>=40));


















// SHEET 4 
// let student = {name:"adnan",age:20,course:"cohort3"}
// for(let key in student){
//     console.log(`${key} : ${student[key]}`);   
// }

// const car = {
//   brand: "BMW",
//   model: "M4",
//   year: 2022
// }
// console.log(car.brand,car.model);
// console.log(car["brand"],car["model"]);

// const user = {
//   name: "Anubhav",
//   age: 20
// }
// console.log(user);
// user.age = 25
// user.isAdmin= true;
// console.log(user);

// const account = {
//   username: "john",
//   password: "12345"
// }
// console.log(account);
// delete account.password
// console.log(account);

// function countProperties({...obj}){
//     return Object.keys(obj).length;
// }
// console.log(countProperties({a:1,b:2,c:3}));

// const person = {
//   name: "Rahul",
//   age: 22,
//   city: "Delhi"
// }
// for(let key in person){
//     console.log(key ,": ",person[key]);
// }

// let obj = {email:"adnankhan0339@gmial.com"}
// console.log("email" in obj);

// const obj1 = { a: 1, b: 2 }
// const obj2 = { c: 3, d: 4 }
// let mergeObj = {...obj1,...obj2}
// console.log(mergeObj);

// const user = {
//   name: "Aman",
//   age: 21
// }
// console.log(Object.entries(user));

// const marks = {
//   Anubhav: 95,
//   Rahul: 82,
//   Aman: 90,
// }
// console.log((Object.entries(marks).sort((a,b)=>a[1]-b[1]).reverse())[0][0]);

// const salaries = {
//   john: 1000,
//   alex: 2000,
//   bob: 1500
// }
// console.log(Object.values(salaries).reduce((acc,num)=>acc+num));


// const user = {
//   name: "Anubhav",
//   address: {
//     city: "Bhopal",
//     pincode: 462001
//   }
// }
// console.log(user.address.city,user.address.pincode);


// let obj = {
//     name:"adnan",
//     marks:90,
//     getResult:function(){
//         if(this.marks>40)
//         {
//             console.log("Pass")
//         }
//         else{
//             console.log("Fail")
//         }
//     }
// }
// obj.getResult();


// const arr = ["name", "Anubhav", "age", 24]
// let obj = {}
// for(let i =0 ; i<arr.length; i+=2){
//     obj[arr[i]]=arr[i+1]
// }
// console.log(Object.entries(obj));


// let word = "banana"
// let obj = {}
// for(let i of word){
//     obj[i] = (obj[i] || 0)+1;
// }
// console.log(Object.entries(obj));

// const users = [
//   { name: "A", age: 20 },
//   { name: "B", age: 21 },
//   { name: "C", age: 20 }
// ]
// let obj = {}
// users.forEach((n)=>{
//   if(obj[n.age]){
//     obj[n.age].push(n);
//   }
//   else{obj[n.age]=[n] }
// })
// console.log(obj);


// let obj = { user:{ address: { city:"Bhopal",pin:462008}}}
// let pro = "user.address.city"
// pro = pro.split(".")
// // console.log(pro[0],pro[1],pro[2]);
// // console.log(obj[pro[0]][pro[1]][pro[2]]);
// let deepindex =obj;
// for(let i = 0; i<pro.length; i++){
//   if(deepindex[pro[i]]){
//     console.log(deepindex);
    
//     deepindex = deepindex[pro[i]]
//   }
//   else { 
//     console.log("not exists");
//     break;
//   }
// }
// console.log(deepindex);

// let obj1 = {a:1,b:2}
// let obj2 = {a:1,b:2}
// let flag = true;
// for(let i=0; i<Object.keys(obj1).length; i++){
// if(Object.keys(obj1).length !== Object.keys(obj2).length) {flag = false
//  break;}
//   if(Object.keys(obj1)[i] !== Object.keys(obj2)[i]){
//     flag = false
//     break;
//   }
//   if(Object.values(obj1)[i] !== Object.values(obj2)[i]){
//     flag = false
//     break;
//   }
// }
// console.log(flag);


// let arr = [
//   {id:1,name:"A"},
//   {id:2,name:"B"},
//   {id:1,name:"A"}
// ]
// let removeduplicate =[]
// arr.forEach((n)=>{
//   if(!removeduplicate.find((m)=>m.id===n.id)) removeduplicate.push(n)
// })
// console.log(removeduplicate);


// pratice session 7
// let prices= [100,250,500,150,700];
// console.log(prices.filter(n=>n>300));

// let marks= [80,90,70,85,95];
// console.log((marks.reduce((n,a)=>n+a))/marks.length);

// let numbers= [1,2,3,2,4,2,5,1,1,1];
// let app = {}
// for(let i in numbers){
//     app[i]= (app[i]||0)+1
// }
// console.log(app[Math.max(...Object.values(app))]);

// let user= {
// name:"Ritik",
// age:20
// };

// user.age = 21
// console.log(user);

// let user= {
// name:"Ritik",
// age:20,
// city:"Bhopal"
// }; 
// for(let i in user){
//     console.log(i,":",user[i]);
// }
// console.log(Object.entries(user));

// let employees= {
// aman:25000,
// ritik:50000,
// priya:45000
// };

// let va = Math.max(...Object.values(employees))
// for(let i in employees){
//     if(va == employees[i]){
//         console.log(i);
//     }
// }

// let greet  = function (name){
//     console.log(`Hello ${name}`);
// }
// greet("adnan")

// function cal(n){
//     console.log(n-n/10);
// }
// cal(500)

// function sum(...n){
//     return n.reduce((acc,num)=>acc+num)
// }
// console.log(sum(1,2,3));

// let users= [
// { name:"Ritik", age:20 },
// { name:"Aman", age:16 },
// { name:"Priya", age:25 }
// ];

// function getA(users){
//     return users.filter(n=>n.age>=18)
// }
// console.log(getA(users));


// let cart= [
// { name:"Mouse", price:500, qty:2 },
// { name:"Keyboard", price:1000, qty:1 },
// { name:"Monitor", price:10000, qty:1 }
// ];
// let total = 0;
// function g(ca){
//     ca.map(n=>total +=(n.price*n.qty))
//    return total;
// }
// console.log(g(cart));


// let students= [
// {
// name:"Ritik",
// marks: [80,90,85]
// },
// {
// name:"Aman",
// marks: [50,40,60]
// }
// ];
// for(let i in students){
//     if(students[i].marks){
//         students[i].average=(students[i].marks.reduce((a,n)=>a+n))/students[i].marks.length
//         delete students[i].marks
//         if(students[i].average>=80){
//             students[i].grade= "A"
//         }
//         else{
//             students[i].grade= "C"
//         }
//     }
// }
// console.log(students);

// let library = [{
// id:1,
// title:"Atomic Habits",
// author:"James Clear",
// borrowed:false
// }]
// function addBook(title,author){
//     library.push({id:library.length+1,title:title,author:author,borrowed:false})
// }
// function borrowBook(id){
//     let i =  library.filter(n=>n.id===id)
//     i[0].borrowed = true;
// }
// function returnBook(id){
//     let i =  library.filter(n=>n.id===id)
//     i[0].borrowed = false;
// }
// function showAvailableBooks(){
//     library.forEach(element => {
//         console.log(element);
//     });
// }


// addBook("Psychology of money","jaico")
// addBook("50 Laws of power","alice hood")
// addBook("atomic habits","jams")
// showAvailableBooks()
// borrowBook(3)
// showAvailableBooks()
// returnBook(3)
// showAvailableBooks()



