const productContainers = [
  ...document.querySelectorAll(".cards_carrousel_container"),
];
const nextBtn = [...document.querySelectorAll("#next")];
const preBtn = [...document.querySelectorAll("#prev")];

const hamburgerMenu = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");

hamburgerMenu.addEventListener("click", () => {
  console.log(hamburgerMenu);
  hamburgerMenu.classList.toggle("is-active");
  sidebar.classList.toggle("not-active");
});

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nextBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
