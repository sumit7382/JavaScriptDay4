// let button = document.createElement("button");
// button.innerText = "click Me";
// button.style.backgroundColor = "red";
// button.style.color = "white";
// document.querySelector("body").appendChild(button);


// let para = document.querySelector("p");
// para.getAttribute("class");
// para.classList.add("newClass");

let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
   e.preventDefault(); // stop refresh

  let name = document.getElementById("name").value;
  console.log(name);
});

