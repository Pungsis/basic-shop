const products = [
  {
    id: 1,
    img: "../assets/imgs/shoes1.jpg",
    name: "Amazing shoes",
    category: "shoe",
    price: 50,
  },
  {
    id: 2,
    img: "../assets/imgs/zapatos.jpg",
    name: "Amazing!!",
    category: "heels",
    price: 65,
  },
  {
    id: 3,
    img: "../assets/imgs/dress.jpg",
    name: "Super dress",
    category: "dress",
    price: 100,
  },
];

const productsContainer = document.querySelector(".products_container");
const filterBtns = document.querySelector(".filter_btns");
const allBtn = document.querySelector("#all");

const displayProduct = (products) => {
  products.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `<div class="image-container">
                <img
                src="${item.img}"
                alt="${item.category}"
                class="stock-image" />
                </div>
                <p class="category">${item.category}</p>
                <h1 class="title2">${item.name}</h1>
                <p class="money">$${item.price}</p>
                <button class="buy">Buy Now</button>`;
    productsContainer.appendChild(div);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  displayProduct(products);
});

filterBtns.addEventListener("click", (e) => {
  if (e.target.id === "all") {
    productsContainer.innerHTML = "";
    displayProduct(products);
  }

  if (e.target.id === "heels") {
    productsContainer.innerHTML = "";
    let filteredProducts = products.filter(({ id }) => id === 2);
    displayProduct(filteredProducts);
  }
  if (e.target.id === "shoes") {
    productsContainer.innerHTML = "";
    let filteredProducts = products.filter(({ id }) => id === 1);
    displayProduct(filteredProducts);
  }
  if (e.target.id === "dresses") {
    productsContainer.innerHTML = "";
    let filteredProducts = products.filter(({ id }) => id === 3);
    displayProduct(filteredProducts);
  }
});
