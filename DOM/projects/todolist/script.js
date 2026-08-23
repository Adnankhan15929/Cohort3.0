const inp = document.querySelector("input");
const btn = document.querySelector("#add");
const todoBox = document.querySelector(".todo-list");

// btn.addEventListener("click", () => {
//   const value = inp.value;

//   if (value.trim() === "") return;

//   todoBox.innerHTML += `<div class="li">
//           <h3>${value}</h3>
//           <div>
//             <button class="btn edit">Edit</button>
//             <button class="btn del">Delete</button>
//           </div>
//         </div>`;

//   inp.value = "";
// });

btn.addEventListener("click", () => {
  const value = inp.value;
  if (value.trim() === "") return;

  let outerdiv = document.createElement("div");
  outerdiv.setAttribute("class", "outerdiv");
  outerdiv.innerHTML = `<h3 class="valueOfInput">${value}</h3>
          <div >
            <button class="btn edit">Edit</button>
            <button class="btn del">Delete</button>
          </div>`;
  outerdiv.style.backgroundColor = "beige";
  outerdiv.style.border = "black";
  outerdiv.style.borderRadius = "10px";
  outerdiv.style.padding = "10px";
  outerdiv.style.display = "flex";
  outerdiv.style.alignContent = "center";
  outerdiv.style.justifyContent = "space-between";
  todoBox.append(outerdiv);
  inp.value = "";

  attachEvents();
  function attachEvents() {
    let edit = outerdiv.querySelector(".edit");
    edit.addEventListener("click", () => {
      let oldVal = outerdiv.querySelector(".valueOfInput").textContent;
      outerdiv.innerHTML = `<input class="editInput">
    <button class="done">Done</button>`;
      outerdiv.querySelector(".editInput").value = oldVal;
      let done = outerdiv.querySelector(".done");
      done.style.backgroundColor = "green";
      done.style.color = "white";
      done.style.border = "none";
      done.style.borderRadius = "10px";
      done.style.width = "60px";
      done.addEventListener("click", () => {
        let editVal = outerdiv.querySelector(".editInput").value;
        if (editVal.trim() === "") return;
        outerdiv.innerHTML = `<h3 class="valueOfInput">${editVal}</h3>
          <div class="btns">
            <button class="btn edit">Edit</button>
            <button class="btn del">Delete</button>
          </div>`;
        attachEvents();
      });
    });
    let del = outerdiv.querySelector(".del");
    del.addEventListener("click", () => {
      console.log("Task is deleted");
      outerdiv.remove();
    });
  }
});
