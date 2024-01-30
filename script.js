// let h1=document.querySelector("h1").textContent;
// let h2 = document.querySelector("h2").textContent;

//   let New= document.querySelector("h1").textContent = h1+" "+h2;
// let divs =document.querySelectorAll(".box");
// let idx=1;
// // for(div of divs){
// //   div.innerText =`new unique value for ${idx}`;
// //   idx++;
// // }

// for(var i=0; i<divs.length; i){
//   divs[i].innerText =`new unique value for ${idx}`;
// }
let divs = document.querySelectorAll(".box");
let idx = 1;
for (var i = 0; i < divs.length; i++) {
  divs[i].innerText = `new unique value for ${idx}`;

  if(idx%2===0){
    divs[i].style.backgroundColor = "orange";
  }else {
    divs[i].style.backgroundColor = "green";
  }
  idx++;
}
// document.querySelectorAll(".box").forEach(box => {
//   box.style.backgroundColor = "green";
// });

// script.js
// let heading = document.getElementById("heading");
// heading.innerText = "Salam_Pakistan";
// script.js
// let heading = document.getElementById("heading");
// heading.style.backgroundColor = "green";
// heading.innerText = 123;
// ;


// document.getElementById("heading").innerText="Sal";