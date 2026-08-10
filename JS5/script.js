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


async function dataLao() {
    try {
        let response = await fetch('https://cakestoreapi.com/products/')

        let data = await response.json()

        data.forEach(function (elem) {
            console.log(elem.title);
        })
    } catch (error) {
        console.error('URL galat hai bhai');
    }
}


dataLao()