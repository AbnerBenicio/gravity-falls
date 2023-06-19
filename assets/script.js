const infos = document.querySelectorAll(".info");
const imgs = document.querySelectorAll(".character");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let str = btn.className;
    console.log(str);
    infos.forEach((info) => {
      info.className.includes("active") && info.className !== str
        ? info.classList.remove("active")
        : null;
      info.className.includes(str) ? info.classList.add("active") : null;
    });
    imgs.forEach((img) => {
      img.className.includes("active") && img.className !== str
        ? img.classList.remove("active")
        : null;
      img.className.includes(str) ? img.classList.add("active") : null;
    });
  });
});

function removeActiveClass(tag) {
  tag.forEach((elem) => {
    elem.classList.remove("active");
  });
}
