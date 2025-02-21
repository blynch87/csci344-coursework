// Your code here.
// function toggleMenu() {
//   const tog = document.querySelector("#menu-toggle");
//   const butt = document.querySelector("button");
//   const ull = document.querySelector("ul");
//   if (tog.ariaExpanded === "false") {
//     butt.classList.add("active");
//     ull.classList.add("active");
//     tog.ariaExpanded = "true";
//   } else {
//     butt.classList.remove("active");
//     ull.classList.remove("active");
//     tog.ariaExpanded = "false";
//   }
// }

function toggleMenu() {
  const butt = document.querySelector("button");
  const ull = document.querySelector(".nav-links");
  butt.classList.toggle("active");
  ull.classList.toggle("active");
}
