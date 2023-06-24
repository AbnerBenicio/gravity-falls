const infos = document.querySelectorAll(".info");
const imgs = document.querySelectorAll(".character");
const buttons = document.querySelectorAll(".item");
const controls = document.querySelectorAll(".control")
let currentItem = 0;
const maxItems = buttons.length;

controls.forEach((control) => {

  control.addEventListener("click", () => {

    control.className.includes("left") ? currentItem -= 1 : currentItem += 1;

    currentItem >= maxItems ? currentItem = 0 : null;
    currentItem < 0 ? currentItem = maxItems - 1 : null;

    buttons.forEach ((btn) => {

      btn.classList.remove("current-item")

      buttons[currentItem].scrollIntoView({
        inline: "center",
        behavior: "smooth"
      })

      buttons[currentItem].classList.add("current-item")
    })
  })
})

buttons.forEach((btn) => {
  
  btn.addEventListener("click", () => {

    removeActiveClass(buttons)
    btn.classList.add("active")

    let str = btn.id;

    infos.forEach((info) => {

      info.className.includes("active") && info.className !== str ? info.classList.remove("active") : null;

      info.className.includes(str) ? info.classList.add("active") : null;
    });

    imgs.forEach((img) => {

      img.className.includes("active") && img.className !== str ? img.classList.remove("active") : null;

      img.className.includes(str) ? img.classList.add("active") : null;
    });
  });
});

function removeActiveClass(tag) {

  tag.forEach((elem) => {

    elem.classList.remove("active");

  });
}
