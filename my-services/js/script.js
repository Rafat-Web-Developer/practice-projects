const acordians = document.querySelectorAll(".accordian");
let i = 0;
const len = acordians.length;

for (i = 0; i <= len; i++) {
  if (acordians[i]) {
    acordians[i].addEventListener("click", function () {
      this.classList.toggle("active");
    });
  }
}
