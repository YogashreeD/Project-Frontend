import { trackid } from "../data/track.js"; 
import { cart,addQuantity } from "../data/cart.js";
import { findDeliveryMatch } from "../data/deliveryOptions.js";
import { findMatchingProduct } from "../data/products.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

console.log(trackid);
if(trackid){
    //console.log(trackid);
    tracking();
}

document.querySelector('.js-cart-quantity').innerHTML = addQuantity();

function tracking(){
    let html = '';
    let match = '';
    let id = trackid;
    console.log(cart);
    console.log(id);
    
    cart.forEach((prd)=>{
        //console.log(prd.productId);
        if(id===prd.productId){
            match=prd;
        }
    });
    //console.log("==",match);
    
    const product = findMatchingProduct(match);
    //console.log(product);
    const delivery = findDeliveryMatch(match);
    const today = dayjs();
    const dueDate = today.add(delivery.deliveryDate,'days').format('MMMM D');

    html+=`
        <div class="order-tracking">
            <a class="back-to-orders-link link-primary" href="orders.html">
                View all orders
            </a>

            <div class="delivery-date">
                Arriving on ${dueDate}
            </div>

            <div class="product-info">
                ${product.name}
            </div>

            <div class="product-info">
                Quantity: ${match.quantity}
            </div>

            <img class="product-image" src=${product.image}>

            <div class="progress-labels-container">
                <div class="progress-label">
                    Preparing
                </div>
                <div class="progress-label current-status">
                    Shipped
                </div>
                <div class="progress-label">
                    Delivered
                </div>
            </div>

            <div class="progress-bar-container">
                <div class="progress-bar"></div>
            </div>
        </div>
    `;
    //console.log(html);
    if(html){
        document.querySelector('.tracking-main-js').innerHTML=html;
    }
    
}
