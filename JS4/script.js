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
