// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle('hidden');
});

// explore button in skill section
// window.onscroll = function() {
//    const explore = document.querySelector('#explore');
//    const translateExplore = explore.offsetBottom;

//    if(window.pageYOffset > translateExplore) {
//       classList.add('-translate-x-32');
//    } else {
//       classList.remove('-translate-x-32');
//    }
// }

// nav fixed
window.onscroll = function () {
  const nav = document.querySelector("#navbar");
  const fixedNav = nav.offsetTop;

  if (window.pageYOffset > fixedNav) {
    nav.classList.add("nav-blur");
  } else {
    nav.classList.remove("nav-blur");
  }
};
