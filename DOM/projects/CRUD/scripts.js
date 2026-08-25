const createbtn = document.querySelector(".create");
const formClose = document.querySelector(".close");
const formDiv = document.querySelector(".formDiv");
const form = document.querySelector("form");
let productList = document.querySelector(".products");

let productArr = JSON.parse(localStorage.getItem("products")) || []

let productIndex = null;

createbtn.addEventListener("click", () => {
  formDiv.style.display = "flex";
});

formClose.addEventListener("click", () => {
  formDiv.style.display = "none";
});

const ui = () => {
  productList.innerHTML = "";
  productArr.forEach((value, index) => {
    productList.innerHTML += `<div class="product-card">
          <div class="imgdiv">
            <img
              src="${value.productURL}"
              alt=""
            />
          </div>
          <div class="product-card-details">
            <h3>${value.productName}</h3>
            <p>${value.productDesc}</p>
            <h3>${value.productPrice}</h3>
            <div class="product-card-btns">
              <button class="update" onClick="updateProduct('${value.productName}')">Update</button>
              <button class="delete" onClick="deleteProduct(${index})">Delete</button>
            </div>
          </div>
        </div>`;
  });
};
ui();
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let productName = event.target[0].value;
  let productDesc = event.target[1].value;
  let productPrice = event.target[2].value;
  let productURL = event.target[3].value;

  if (
    productName.trim() === "" ||
    productDesc.trim() === "" ||
    productPrice.trim() === "" ||
    productURL === ""
  ) {
    form.reset();
    return alert("fill the fields properly");
  }

  let obj = {
    productName,
    productDesc,
    productPrice,
    productURL,
  };

  if (productIndex !== null) {
    productArr[productIndex] = obj;
    productIndex = null;
    localStorage.setItem("products", JSON.stringify(productArr));
  } else {
    productArr.push(obj);
    localStorage.setItem("products", JSON.stringify(productArr));
  }

  ui();
  form.reset();
  formDiv.style.display = "none";
});

const updateProduct = (name) => {
  formDiv.style.display = "flex";
  let product = productArr.find((n) => n.productName === name);
  productIndex = productArr.findIndex((n) => n.productName === name);
  form[0].value = product.productName;
  form[1].value = product.productDesc;
  form[2].value = product.productPrice;
  form[3].value = product.productURL;
};

const deleteProduct = (event) => {
  productArr.splice(event, 1);
    localStorage.setItem("products", JSON.stringify(productArr));
  ui();
};

// localStorage.setItem('name','Nitin gadkari')

// let lsDATA = localStorage.getItem('name');
// console.log(lsDATA);

// let data  = [{
//     name:"adnan",
//     age:32,
//     address:"bank colony",
//     pincode:234233,

// }]
// localStorage.setItem('data',JSON.stringify(data))
// console.log(JSON.parse(localStorage.getItem("data")));
