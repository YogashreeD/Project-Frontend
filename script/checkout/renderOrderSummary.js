import {cart,removeItem,addQuantity, saveToStorage, updateDeliveryOptions} from '../../data/cart.js';
import {products,findMatchingProduct} from '../../data/products.js';
import {formatcurrency} from '../utility/money.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {deliveryOptions, findDeliveryMatch} from '../../data/deliveryOptions.js';
import {orderPaymentSummary} from './orderPaymentSummary.js';

export function renderOrderSummary(){
let summaryhtml = '';
cart.forEach((cartItem)=>{
    let matchItem = findMatchingProduct(cartItem);

    let delivery = findDeliveryMatch(cartItem);

    const today = dayjs();
    const dateadd = today.add(
        delivery.deliveryDate, 'days'
    );
    const datestring = dateadd.format('dddd, MMMM D');

    summaryhtml += `
    <div class="cart-item-container js-container-${matchItem.id}">
            <div class="delivery-date">
            Delivery date: ${datestring}
            </div>

            <div class="cart-item-details-grid">
            <img class="product-image"
                src=${matchItem.image}>

            <div class="cart-item-details">
                <div class="product-name">
                ${matchItem.name}
                </div>
                <div class="product-price">
                $${formatcurrency(matchItem.priceCents)}
                </div>
                <div class="product-quantity">
                <span>
                    Quantity: <span class="quantity-label js-quantity-${matchItem.id}">${cartItem.quantity}</span>
                </span>
                <span class="update-quantity-link link-primary js-update-cart"
                        data-prd-id=${matchItem.id}>Update</span>
    
                <input class="quantity-input js-new-input-${matchItem.id}">
                <span class="save-quantity-link link-primary js-save-quantity"
                        data-prd-save=${matchItem.id}>Save</span>

                <span class="delete-quantity-link link-primary js-delete-cart" 
                        data-prd-object=${matchItem.id}>
                    Delete
                </span>
                </div>
            </div>

            <div class="delivery-options">
                <div class="delivery-options-title">
                Choose a delivery option:
                </div>
                ${deliveryOptionHTML(matchItem,cartItem)}
            </div>
          </div>
        </div>
    `;
});
//display html using js
document.querySelector('.js-order-summary').innerHTML = summaryhtml;

//chech-item quantity
document.querySelector('.js-check-item').innerHTML=`${addQuantity()} item`;

//Delete link in each product container
document.querySelectorAll('.js-delete-cart').forEach((del)=>{
    del.addEventListener('click',()=>{
        const prdId = del.dataset.prdObject;
        removeItem(prdId);
        const containerId = document.querySelector(`.js-container-${prdId}`);
        containerId.remove();
        //chech-item quantity
        document.querySelector('.js-check-item').innerHTML=`${addQuantity()} item`;
        orderPaymentSummary();
       });       
});

//Update link in product container
document.querySelectorAll('.js-update-cart').forEach((element)=>{
    element.addEventListener('click',()=>{
    const prdId = element.dataset.prdId;
    const container = document.querySelector(`.js-container-${prdId}`);
    container.classList.add('is-editing-quantity');
    console.log(container);
    });
});

document.querySelectorAll('.js-save-quantity').forEach((link) => {
    link.addEventListener('click', () => {
        const prdSave = link.dataset.prdSave;
        const container = document.querySelector(`.js-container-${prdSave}`);
        container.classList.remove('is-editing-quantity');

        const quantityInput = document.querySelector(
        `.js-new-input-${prdSave}`
        );
        const newQuantity = Number(quantityInput.value);
        updateQuantity(prdSave,newQuantity);
        //chech-item quantity
        document.querySelector(`.js-quantity-${prdSave}`).innerHTML = newQuantity;
        //console.log(newQuantity);
        //chech-item quantity
        document.querySelector('.js-check-item').innerHTML=`${addQuantity()} item`;
        //update payment summary
        orderPaymentSummary();
    });
  });

//updating quantity number in everything
function updateQuantity(prdId,newquan){
    let matchingItem;
    cart.forEach((cartItem)=>{
        if(prdId === cartItem.productId){
            matchingItem = cartItem;
        }
    });
    //console.log(matchingItem)
    matchingItem.quantity = newquan;

    saveToStorage();
}


//delivery date display
function deliveryOptionHTML(matchItem,cartItem){
    let html = '';
    deliveryOptions.forEach((delivery)=>{
        const today = dayjs();
        const dateadd = today.add(
            delivery.deliveryDate, 'days'
        );
        const datestring = dateadd.format('dddd, MMMM D');
        const shippingPrice = delivery.priceCents === 0 ? 'FREE' : `$${formatcurrency(delivery.priceCents)} -`;
        const isChecked = cartItem.deliveryId === delivery.id;
        //console.log(delivery.id, cartItem.deliveryId, isChecked);
        html+=`
        <div class="delivery-option js-delivery-option"
             data-match-item-id = "${matchItem.id}"
             data-delivery-id = "${delivery.id}">
                <input type="radio"
                    class="delivery-option-input"
                    ${isChecked ? 'checked': ''}
                    name="delivery-option-${matchItem.id}">
                <div>
                    <div class="delivery-option-date">
                    ${datestring}
                    </div>
                    <div class="delivery-option-price">
                    ${shippingPrice} Shipping
                    </div>
                </div>
        </div>
        `
    });
    return html;
}

//date option updated on top
document.querySelectorAll('.js-delivery-option').forEach((dateElement)=>{
    dateElement.addEventListener('click',()=>{
        const {matchItemId, deliveryId} = dateElement.dataset;
        updateDeliveryOptions(matchItemId , deliveryId);
        renderOrderSummary();
        orderPaymentSummary();
    });
});
}