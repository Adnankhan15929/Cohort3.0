// function createBankAccount() {
//   let balance = 0; // private — cannot be accessed directly
//   return {
//     deposit(amount) {
//       balance += amount;
//       return balance;
//     },
//     getBalance() {
//       return balance;
//     },
//   };
// }
// const acc = createBankAccount();
// // console.log(acc);
// acc.deposit(100);
// console.log(acc.getBalance()); // 100
// console.log(acc.balance); // undefined — truly private

// function multiplier(factor) {
//   return function (number) {
//     return number * factor;
//   };
// }
// const double = multiplier(2);
// // console.log(double);
// const triple = multiplier(3);
// // console.log(triple);
// console.log(double(5)); // 10
// console.log(triple(5)); // 15

// function add(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(add(1)(2)(3)); // 6

// 1
// console.log(x);
// var x = 5;

// // 2
// foo();
// function foo() { console.log("called"); }

// // 3
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 0);
// }

// // 4
// function make() {
//   let secret = "hidden";
//   return () => secret;
// }
// const reveal = make();
// console.log(reveal());

// q1
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(10,20));

// // q2
// function square(a){
//     return a*a;
// }
// console.log(square(5));

// // q3
// function check(a){
//     return a%2==0 ? "even":  "odd";
// }
// console.log(check(7));

// //q4
// function largernum(a,b){
//     return Math.max(a,b)
// }

// console.log(largernum(10,20));

// // q5
// function vote(a){
//     return a>=18 ? "Eligibe":  "Not Eligibe";
// }
// console.log(vote(18));

// q10
// function table(n){
//     if(n==0) return 0
//     return table((n/10).toFixed(0))+1
// }
// console.log(table(1234345));

// function s(n){
//     let rev="";
//     for(let i =n.length-1 ; i>=0; i--){
//         rev+=n.charAt(i)
//     }
//     return rev
// }
// console.log(s("hello"));

// function vo(w){
//     let count =0
//    for(let i =0 ; i<w.length; i++){
//     if(w[i]=="u" || w[i]=="o" || w[i]=="a" || w[i]=="i" || w[i]=="e"){
//         count++
//     }
//    }
//    return count;
// }
// console.log(vo("javascript"));

// function isPalindrome(n){
//     for(let i =0 ; i<n.length; i++){
//         if(n[i]!==n[n.length-1-i]) return false
//    }
//    return true
// }
// console.log(isPalindrome("madam"));

// q14
// function capitalize(word){
//     return word.split(" ").map(word=>word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
// }
// console.log(capitalize("hello world"));

// function count(word,a){
//     let co = 0;
//     for(let i=0 ; i<word.length; i++){
//         if(word.charAt(i)===a) co++
//     }
//     return co
// }
// console.log(count("javascript","a"));

// let a = [10,20,30,40,50]
// console.log(Math.min(...a));
// let y = a.reduce((ac,n)=>ac+n)
// console.log(y);

// let a = [1,2,3,4,5,6]
// console.log(a.filter(n=>{return n%2===0}));

// let arr = [1,2,2,3,4,4,5]
// let dup =[]
// arr.forEach(n=>{
//     dup[n-1] = (dup[n]||n)
// })
// console.log(dup);

let marks = [50, 60, 70, 80, 90];
console.log("Highest Marks:", Math.max(...marks));
console.log("Lowest Marks:", Math.min(...marks));
console.log("Avg Marks:", marks.reduce((a, n) => a + n) / marks.length);
console.log(
  "Total Marks:",
  marks.reduce((a, n) => a + n),
);
