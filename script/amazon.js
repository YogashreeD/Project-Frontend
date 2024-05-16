import {cart, addtocart, addQuantity} from '../data/cart.js';
import {products} from '../data/products.js';

let divjs= '';
products.forEach((product)=>{
    const {image,name,rating,priceCents} = product;
    divjs+= `
    <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="image/ratings/rating-${rating.stars*10}.png">
            <div class="product-rating-count link-primary">
              ${rating.count}
            </div>
          </div>

          <div class="product-price">
            ${(priceCents/100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select class="js-quantity-selector-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart js-added-${product.id}">
            <img src="image/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-cart"
          data-prd-id="${product.id}">
            Add to Cart
          </button>
        </div>
    `;
});
document.querySelector('.js-products-grid').innerHTML=divjs;

let addedmsgid;
document.querySelector('.js-cart-quantity').innerHTML = addQuantity();

const cartquan = document.querySelectorAll('.js-cart');
cartquan.forEach((button)=>{
  button.addEventListener('click',()=>{

    const  productId = button.dataset.prdId;
    const quanSelect = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);
    const addedmsg = document.querySelector(`.js-added-${productId}`).classList;

    addedmsg.add("is-toggled");

    if(addedmsgid){
      clearTimeout(addedmsgid)
    }
    const timeoutid=setTimeout(()=>{
      addedmsg.remove("is-toggled");
    },3000);
    addedmsgid=timeoutid;

    addtocart(productId,quanSelect);

    console.log(cart);

    document.querySelector('.js-cart-quantity').innerHTML = addQuantity();
  });
});

