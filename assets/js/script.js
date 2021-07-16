const slider = document.querySelector("nav ul");
const menuTog = document.querySelector(".menu-toggle");
const menus = document.querySelectorAll(".menu");
const navbar = document.querySelector("nav");
let beranda = document.querySelector("#home");
let koleksi = document.querySelector("#koleksi");
let tentang = document.querySelector("#tentang");
// let prevScrollPos = window.pageYOffset;

menuTog.addEventListener("click", function () {
  slider.classList.toggle("slide");
  menuTog.classList.toggle("toggle-on");
});

for (menu of menus) {
  menu.addEventListener("click", function () {
    for (currentMenu of menus) {
      currentMenu.classList.remove("active");
      this.classList.add("active");
    }
  });
}

window.addEventListener("scroll", function () {
  let windo = window.pageYOffset;

  if (beranda.offsetTop <= windo && koleksi.offsetTop > windo) {
    menus[0].classList.add("active");
    menus[1].classList.remove("active");
    menus[2].classList.remove("active");
  } else if (koleksi.offsetTop <= windo && tentang.offsetTop > windo) {
    menus[1].classList.add("active");
    menus[0].classList.remove("active");
    menus[2].classList.remove("active");
  } else {
    menus[2].classList.add("active");
    menus[1].classList.remove("active");
    menus[0].classList.remove("active");
  }
});

// window.onscroll = function () {
//   currentScrollPos = window.pageYOffset;
//   if (prevScrollPos > currentScrollPos) {
//     navbar.classList.remove("show");
//   } else {
//     navbar.classList.add("show");
//     slider.classList.remove("slide");
//     menuTog.classList.remove("toggle-on");
//   }
//   prevScrollPos = currentScrollPos;
// };
