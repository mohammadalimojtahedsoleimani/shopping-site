import Products from "./Products.js";

const cartBtn = document.querySelector(".cart-btn");
const cartModal = document.querySelector(".cart");
const backDrop = document.querySelector(".backdrop");
const closeModal = document.querySelector(".cart-item-confirm");

const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");



// get products
class Productes {
  getProducts(){
    return Products;
  }
}


class UI {
  displayProducts(produtcs){
    let result = "";
    produtcs.forEach(item => {
      result += `<div class="product">
            <div class="img-container">
                <img src=${item.fields.image.fields.file.url} class="product-img"  alt="images"/>
            </div>
            <div class="product-desc">
                <p class="product-price">$ ${item.fields.price}</p>
                <p class="product-title">${item.fields.title}</p>
            </div>
            <button class="btn bag-btn" data-id = ${item.sys.id}>
                <i class="fas fa-shopping-cart"></i>
                add to cart
            </button>
        </div>`;
      productsDOM.innerHTML = result;
    })
  }
}

class Storage {}

window.addEventListener('DOMContentLoaded', (event) => {
  const pro = new Productes();
const pros =   pro.getProducts();
  const ui = new UI();
  ui.displayProducts(pros);
});

function showModalFunction() {
  backDrop.style.display = "block";
  cartModal.style.opacity = "1";
  cartModal.style.top = "20%";
}

function closeModalFunction() {
  backDrop.style.display = "none";
  cartModal.style.opacity = "0";
  cartModal.style.top = "-100%";
}

cartBtn.addEventListener("click", showModalFunction);
closeModal.addEventListener("click", closeModalFunction);
backDrop.addEventListener("click", closeModalFunction);
