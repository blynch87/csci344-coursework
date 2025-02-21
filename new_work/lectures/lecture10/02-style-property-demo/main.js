const makeColor = (color, section) => {
  // your code here...
  console.log("Change background to red");
  const el = document.querySelector(section);
  if (el.style.backgroundColor === color) {
    el.style.backgroundColor = "white";
  } else {
    el.style.backgroundColor = color;
  }
};

function resetColors() {
  const target = document.querySelectorAll("section");
  for (const sec of target) {
    sec.style.backgroundColor = "white";
  }
}
