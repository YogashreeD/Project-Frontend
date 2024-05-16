import {cart, addQuantity} from "../../data/cart.js";
import { findMatchingProduct } from "../../data/products.js";
import {formatcurrency} from '../utility/money.js';
import {findDeliveryMatch} from '../../data/deliveryOptions.js';
import { orders,saveOrderToStorage } from "../../data/orderByDate.js";
//import {orderPageRendor} from '../orders.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

export function orderPaymentSummary(){
    let sumOfProduct=0;
    let shippingPrice = 0;
    let totalBeforeTax = 0;
    let totalAfterTax = 0;
    let orderTotal = 0;

    cart.forEach((cartItem)=>{
        const matchItem = findMatchingProduct(cartItem);
        sumOfProduct += Number(formatcurrency(cartItem.quantity * matchItem.priceCents));
        let deliverymatch = findDeliveryMatch(cartItem);
        shippingPrice += Number(formatcurrency(deliverymatch.priceCents));
        
        //const delivery ;
    });
    totalBeforeTax = Number((sumOfProduct + shippingPrice));
    totalAfterTax = Number((totalBeforeTax * 0.1).toFixed(2));
    orderTotal = Number((totalBeforeTax + totalAfterTax));
    //console.log(sumOfProduct, shippingPrice, totalBeforeTax, totalAfterTax, orderTotal);

    let deliveryHTML = `
        <div class="payment-summary-title">
        Order Summary
        </div>

        <div class="payment-summary-row">
        <div>Items (${addQuantity()}):</div>
        <div class="payment-summary-money">$${sumOfProduct}</div>
        </div>

        <div class="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money">$${shippingPrice}</div>
        </div>

        <div class="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div class="payment-summary-money">$${totalBeforeTax}</div>
        </div>

        <div class="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div class="payment-summary-money">$${totalAfterTax}</div>
        </div>

        <div class="payment-summary-row total-row">
        <div>Order total:</div>
        <div class="payment-summary-money">$${orderTotal}</div>
        </div>

        <button class="place-order-button button-primary js-place-order-button">
        Place your order
        </button>
    `;
    document.querySelector('.js-payment-summary').innerHTML = deliveryHTML;
    document.querySelector('.js-place-order-button').addEventListener(('click'),()=>{
        window.location = "orders.html";
    });
    updateOrders(orderTotal);
}

function updateOrders(orderTotal){
    let today = dayjs().format('MMMM D');
    let matchOrder = '';
    orders.forEach((order)=>{
        if(order.orderPlaceDate === today){
            matchOrder = order;
        }
    });
    if(matchOrder){
        matchOrder.total = orderTotal;
        delete matchOrder.carts;
        matchOrder.carts = cart;
    }
    else{
        orders.push({
            orderId : "27cba69d-4c3d-4098-b42d-ac7fa62b7664",
            orderPlaceDate : today,
            total : orderTotal,
            carts : cart
        });
    }
    
    saveOrderToStorage();
    //orderPageRendor();
    console.log(matchOrder.carts);
}