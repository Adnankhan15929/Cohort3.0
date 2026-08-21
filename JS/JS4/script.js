// function CreateBook(bookName, authorName, pages) {
//   this.bookName = bookName;
//   this.authorName = authorName;
//   this.pages = pages;
//   this.getfrontPage = function () {
//     console.log("Book Name :", this.bookName);
//     console.log("Author Name :", this.authorName);
//     console.log("Pages :", this.pages);
//   };
// }

// let book1 = new CreateBook("HP - Prisoner of Azkaban", "JK Rowling", 760);
// let book2 = new CreateBook("Rich Dad Poor Dad", "robert Kiyosaki", 440);
// let book3 = new CreateBook("Sapiens", "Yuvan Noah Harrari", 850);

// book1.getfrontPage();







// function MakeStudents(fname, lname, contact, isVerified) {
//     this.fname = fname;
//     this.lname = lname;
//     this.contact = contact;
//     this.isVerified = isVerified;
// }

// MakeStudents.prototype.company = 'Sheryians'

// let showProfile = function () {
//     if (this.isVerified) {
//         console.log(`Name: ${this.fname} ${this.lname}, Contact: ${this.contact}`);
//     } else {
//         console.log('User Not Verified');
//     }
// }

// MakeStudents.prototype.showProfile = showProfile

// let s1 = new MakeStudents('Abhishek', 'Mishra', 98765, true)
// let s2 = new MakeStudents('Yash', 'Yadav', 545454, true)
// let s3 = new MakeStudents('Manas', 'Pancholi', 233422, false)
// let s4 = new MakeStudents('Anurag', 'Kulshreshtha', 765656, true)

// s1.showProfile()





// class MakeStudents {
//     constructor(fname, lname, contact, isVerified) {
//         this.fname = fname;
//         this.lname = lname;
//         this.contact = contact;
//         this.isVerified = isVerified;
//     }
// }
// let showProfile = function () {
//     if (this.isVerified) {
//         console.log(`Name: ${this.fname} ${this.lname}, Contact: ${this.contact}`);
//     } else {
//         console.log('User Not Verified');
//     }
// }

// MakeStudents.prototype.showProfile = showProfile

// let s1 = new MakeStudents('Sarthak', 'Sharma', 98789, true)
// let s2 = new MakeStudents('Abhishek', 'Mishra', 77889, true)
// let s3 = new MakeStudents('Yash', 'Yadav', 48789, false)

// s1.showProfile()
// s2.showProfile()
// s3.showProfile()








// classical inheritence

// class User {
//     constructor(fname,lname,contact){
//         this.fname = fname
//         this.lname = lname
//         this.contact = contact
//     }
//     greet(){
//         console.log('Welcome User',this.fname);
//     }
// }

// class Admin extends User {
//     constructor(fname,lname,contact){
//         super(fname,lname,contact)
//         this.adminAccess = true
//     }
//     addCourse(){
//         console.log('New Course Added');
//     }
//     removeAllCourses(){
//         console.log('All Courses Removed');
//     }
//     greet(){
//         console.log('Welcome Admin',this.fname);
//     }
// }

// var u1 = new User('Harsh','Singh',887867)
// var u2 = new Admin('Sarthak','Sharma',5432)

// u1.greet()
// u2.greet()
// u2.addCourse()
// u2.removeAllCourses()


// let place =
// {
//     placeName : "office",
//     behaviour:"proffessional",
//     sayHello:function(){
//         const insidePlace = {
//             placeName:"Meeting Room",
//             behaviour :"Roasting",
//             infrontofFriends:function(){
//                 console.log(this.behaviour);
//             },
//             infrontofClients:()=>{
//                 console.log(this.behaviour);
//             }
//         }
//         insidePlace.infrontofFriends()
//         insidePlace.infrontofClients()
//     }
// }

// place.sayHello()


// function introduce(city, country) {
//   console.log(`Main ${this.name} hoon, ${city}, ${country} se`);
// }
// const person = { name: "Rahul" };

// introduce.call(person, "Indore", "India");
// // Main Rahul hoon, Indore, India se

// introduce.apply(person, ["Indore", "India"]);
// // Main Rahul hoon, Indore, India se

// const boundFn = introduce.bind(person);
// boundFn("Indore", "India");
// // Main Rahul hoon, Indore, India se


// function CreateBook(bookName,authorName){
//     this.bookName = bookName,
//     this.authorName = authorName,
//     this.pages = 560
// }
// let book1 = new CreateBook("HP - philosopher stone",'JK Rowling')
// let book2 = new CreateBook("HP - chamber of secrets")

// console.log(book1);
// console.log(book2);

// class MakeStudents{
//     constructor(bookName,authorName,isVerified){
//         this.bookName = bookName,
//     this.authorName = authorName,
//     this.pages = 560,
//     this.isVerified = isVerified;
//     }
//     showBook = function (){
//         if(this.isVerified){
//             console.log(`${this.bookName,this.authorName,this.pages}`);
            
//         }
//         else{
//             console.log('book not verified');
            
//         }
//     }
// }

// let s1 = new MakeStudents("atomic habits","james clear",true)
// console.log(s1);

// function introduce(city, country) {
//   console.log(`Main ${this.name} hoon, ${city}, ${country} se`);
// }
// const person = { name: "Rahul" };

// introduce.call(person,"Indore", "India");
// introduce.apply(person, ["Indore", "India"]);
// const boundFn = introduce.bind(person);
// boundFn("Indore", "India");




// SHEET PHASE 4
// 'use strict'
// function showThis(){
//   console.log(this);
// }
// showThis()



// const user = {
//   name:"Anubav",
//   hello: function(){
//     console.log(`Hello ${this.name}`);
//   }
// };
// let call = user.hello.bind(user);
// call();


// let obj = {
//   name:"Rahul",
//   fun:function(){
//     console.log(this.name);
//   },
//   arrow: ()=>{
//     console.log(this.name);
//   }
// }
// obj.fun()
// obj.arrow()



// let obj = {
//   name:"Rahul",
//   hobbies:["Coding","Gaming","Reading"],
//   fun:function(){{
//     this.hobbies.forEach((hobbies)=>{
//       console.log(this.name," likes ",hobbies);
//     })
//   }}
// }
// obj.fun();


// let obj = {
//   name:"button",
//   fun:function(){
//     console.log(this);
//   },
//   arow:()=>{
//     console.log(this);
//   }
// }
// obj.fun();
// obj.arow();


// const p1 = {name:"anubhav"};
// const p2 = {name:"rahul"};

// function intro(){
//   console.log(`Hi, I am ${this.name}`);
// }
// intro.call(p1);
// intro.apply(p2);
// let bindi = intro.bind(p1);
// bindi();


// function introduce(){
//   console.log(this.city,this.country);
// }
// const obj = {
//   city:"bhopal",
//   country:"India"
// }
// introduce.apply(obj)


// const usern={
//   name:"adnan",
//   printname:function(){
//     console.log(this.name);
//   }
// }
// let u= usern.printname.bind(usern);
// setTimeout(u, 2000);


// let obj ={
//   value:100,
// }
// function add(num1,num2){
//   this.value+=num1+num2;
//   console.log(this.value);
// }
// // add.call(obj,5,4);
// // add.apply(obj,[5,4]);
// let fun = add.bind(obj);
// fun(20,1);


// const person = {
//   name: "Rahul"
// };
// console.log(person.hasOwnProperty("name"));


// Array.prototype.sum = function () {
//     let total = 0;

//     for (let num of this) {
//         total += num;
//     }

//     return total;
// };

// console.log([1, 2, 3, 4].sum());

// let animal ={
//   eat:function(){
//     console.log("eat");
//   },
//   sleep:function(){
//     console.log("sleep");
//   }
// }
// const dog = Object.create(animal);
// dog.eat()
// dog.sleep()



// let vehicle = {
//   start:function(){
//     console.log("start");
    
//   },
//   stop:function(){
//     console.log("stop");
    
//   }
// }
// const car = Object.create(vehicle)
// const truck = Object.create(vehicle)
// const bike = Object.create(vehicle)

// car.start()
// bike.stop()
// truck.start()



// function Person(name,age){
//   this.name = name;
//   this.age=age;
// }
// Person.prototype.func = function(){
//   console.log(`Hi, I am ${this.name}`);
// }
// const p1 = new Person("Adnan",20)
// p1.func()


// const arr = []
// console.log(arr.__proto__)
// console.log(arr.__proto__.__proto__)
// console.log(arr.__proto__.__proto__.__proto__)


// class Student{
//   constructor(name,age){
//     this.name=name;
//     this.age = age;
//   }
//   introduce(){
//     console.log("I am ",this.name,"and I study MERN Stack");
//   }
// }
// const s1 =new Student("Adnan",23)
// s1.introduce();


// class Employee{
//   constructor(name,salary){
//     this.name=name
//     this.salary = salary
//   }
//   increaseSalary(s){
//     this.salary+=s
//   }
//   showSalary(){
//     console.log(this.salary);
//   }
// }
// const e1 = new Employee("adnan",5000000)
// e1.increaseSalary(5000000);
// e1.showSalary();


// class BankAccount{
//   constructor(money){
//     this.balance = money
//   }
//   deposit(money){
//     this.balance +=money
//     console.log(money,"deposited");
//   }
//   withdraw(m){
//     if(m>this.balance) {console.log("insufficient balance");
//     return }
//     this.balance-=m
//     console.log(m,"withdraw");
//   }
//   showBalance(){
//     console.log(this.balance);
//   }
// }
// const b1 = new BankAccount(5000)
// b1.deposit(500)
// b1.showBalance()
// b1.withdraw(1000)
// b1.showBalance()
// console.log(b1.balance);





// class Animal{
  // eat(){
  //   console.log("animal is eating");
  // }
  // bark(){
  //   console.log("animal is barking");
  // }
//   static eat(){
//     console.log("animal is eating");
//   }
//   static bark(){
//     console.log("animal is barking");
//   }
// }
// class Dog extends Animal{
  // bark(){
  //   console.log("dog is barked");
  // }
//   static bark(){
//     console.log("dog is barked");
//   }
// }

// const obj1 = new Animal()
// const obj2 = new Dog()
// obj1.eat()
// obj2.eat()
// obj1.bark()
// obj2.bark()

// Dog.bark()
// Dog.eat()
// Animal.bark()
// Animal.eat()



// class Person{
//   constructor(){
//     this.name="Adnan khan"
//     this.highestQ = "graduated"
//   }
//    qualification(){
//     console.log(this.name+" Search for a job in Full Stack development and he is "+this.highestQ);
//   }
// }
// class Employee extends Person{
//   constructor(){
//     super()
//     this.highestQ = "graduated"
//     this.exp="1 year"
//   }
//    qualification(){
//     console.log(`${this.name} is an Employee at Google and has ${this.exp} of experience`);
//   }
// }
// class Manager extends Employee{
//   constructor(){
//     super()
//     this.highestQ = "5year"
//     this.exp="10+ years"
//   }
//    qualification(){
//     console.log(`${this.name} is a Manager at Microsoft and has ${this.exp} of experience`,this.highestQ);
//   }
// }

// const p1 = new Person()
// const p2 = new Employee()
// const p3 = new Manager()
// p1.qualification()
// p2.qualification()
// p3.qualification()



// class MathHelper{
//   static add(a,b){
//     return a+b
//   }
//   static sub(a,b){
//     return a-b
//   }
//   static mul(a,b){
//     return a*b
//   }
//   static div(a,b){
//     return a/b
//   }
// }
// console.log(MathHelper.add(5,4));
// console.log(MathHelper.sub(52,43));
// console.log(MathHelper.mul(5,40));
// console.log(MathHelper.div(2,10));




// class User{
//   static count=0;
//   static gotuser(){
//     this.count++;
//     return this.count;
//   }
// }
// console.log(User.gotuser());
// console.log(User.gotuser());
// console.log(User.gotuser());
// console.log(User.gotuser());
// console.log(User.gotuser());
// console.log(User.count);


// const Person={
//   firstName : "Adnan",
//   lastName:"Khan",
//   get name(){
//     return name=this.firstName+" "+this.lastName;
//   }
// }
// console.log(Person.name);


// const user={
//   set email(newe){
//     const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     if(!pattern.test(newe)){
//       console.log( "Invalid Email");
//       return
//     }
//     console.log( "Valid Email");
    
//   }
// }
// user.email= "adnankhan@gmail.com";
// user.email = "adnankhan.com"



// class BankAccount{
//   #balance;
//   constructor(money){
//     this.#balance = money
//   }
//   deposit(money){
//     this.#balance +=money
//     console.log(money,"deposited");
//   }
//   withdraw(m){
//     if(m>this.#balance) {console.log("insufficient balance");
//     return }
//     this.#balance-=m
//     console.log(m,"withdraw");
//   }
//   showBalance(){
//     console.log(this.#balance);
//   }
// }
// const b1 = new BankAccount(5000)
// b1.deposit(500)
// b1.showBalance()
// b1.withdraw(1000)
// b1.showBalance()
// console.log(b1.balance);



class Marks{
  #marks;
  getMarks(){
    return this.#marks
  }
  setMarks(m){
    this.#marks=m
  }
}
const m = new Marks();
m.setMarks(50)
console.log(m.getMarks());
m.setMarks(75)
console.log(m.getMarks());