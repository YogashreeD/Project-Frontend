import {orders} from '../data/orderByDate.js';
import {findMatchingProduct} from '../data/products.js';
import {findDeliveryMatch} from '../data/deliveryOptions.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { addQuantity } from '../data/cart.js';
import { trackingid } from '../data/track.js';

//deleteStorage();
function deleteStorage(){
    orders.splice(0,orders.length);
    localStorage.setItem('orders',JSON.stringify(orders));
}

orderPageRendor();
function orderPageRendor(){
    let html = '';
    console.log(orders);
    orders.forEach((order)=>{
        // console.log(order.carts);
    html += `
    <div class="order-header">
        <div class="order-header-left-section">
        <div class="order-date">
            <div class="order-header-label">Order Placed:</div>
            <div>${order.orderPlaceDate}</div>
        </div>
        <div class="order-total">
            <div class="order-header-label">Total:</div>
            <div>${order.total}</div>
        </div>
        </div>

        <div class="order-header-right-section">
        <div class="order-header-label">Order ID:</div>
        <div>${order.orderId}</div>
        </div>
    </div>

    <div class="order-details-grid">
        ${orderingCart(order.carts)}
        </div>
    `; 
    orderingCart(order.carts)
    });
    document.querySelector('.js-order-container').innerHTML = html;
    document.querySelector('.js-cart-quantity').innerHTML = addQuantity();
}


function orderingCart(cart){
    let html = '';
    cart.forEach((cartItem)=>{
        const cartid = cartItem.productId;
        const product = findMatchingProduct(cartItem);
        const delivery = findDeliveryMatch(cartItem);
        const today = dayjs();
        const dueDate = today.add(delivery.deliveryDate,'days').format('MMMM D');
        html +=`
        <div class="product-image-container">
        <img src=${product.image}>
        </div>

        <div class="product-details">
        <div class="product-name">
            ${product.name}
        </div>
        <div class="product-delivery-date">
            Arriving on: ${dueDate}
        </div>
        <div class="product-quantity">
            Quantity: ${cartItem.quantity}
        </div>
        <button class="buy-again-button button-primary" >
            <img class="buy-again-icon" src="image/icons/buy-again.png">
            <span class="buy-again-message">Buy it again</span>
        </button>
        </div>

        <div class="product-actions">
        <a href="tracking.html">
            <button class="track-package-button button-secondary js-track"
            data-prd-id = ${cartItem.productId}>
            Track package
            </button>
        </a>
        </div>
        `;
        //console.log(product.name, dueDate, cartItem.quantity);
    });
    return html;
}

const track = document.querySelectorAll('.js-track');
track.forEach((button)=>{
    button.addEventListener('click',()=>{
        const id = button.dataset.prdId;
        console.log("-------",id);
        trackingid(id);
    })
})
