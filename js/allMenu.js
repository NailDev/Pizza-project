const burg = document.querySelector(".wrap_field");
const pop = document.querySelector(".butPop");
const body = document.body;
const navBar = document.querySelector(".navbar").cloneNode(true);

burg.addEventListener("click", clickOn);

function clickOn(e) {
  e.preventDefault();
  pop.classList.toggle("open");
  burg.classList.toggle("active");
  body.classList.toggle("noscroll");

  if (!pop.querySelector(".navbar")) {
    pop.append(navBar);
  }
}

const links = Array.from(navBar.children);
links.forEach((link) => {
  link.addEventListener("click", closeClick);
});
function closeClick() {
  pop.classList.remove("open");
  burg.classList.remove("active");
  body.classList.remove("noscroll");
}
let cartBut = document.querySelector(".cart");
let modal = document.getElementById("modal");
let closeSp = document.getElementById("closeB");
let okey = document.getElementById("okBtn");
cartBut.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "block";
  closeSp.addEventListener("click", () => {
    modal.style.display = "none";
  });
  okey.addEventListener("click", () => {
    modal.style.display = "none";
  });
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

const numCount = document.querySelector(".counter_num");
const buttonsNow = document.querySelectorAll(".now");
let count = 0;
buttonsNow.forEach((but) => {
  but.addEventListener("click", (e) => {
    e.preventDefault();
    count++;
    numCount.textContent = count;
  });
});
