export let deliveryOptions = [{
    id : '1',
    deliveryDate : 7,
    priceCents : 0 
},{
    id : '2',
    deliveryDate : 3,
    priceCents : 499 
},{
    id : '3',
    deliveryDate : 1,
    priceCents : 999 
}];


export function findDeliveryMatch(cartItem){
    let matchItem = '';
    deliveryOptions.forEach((delivery)=>{
        if(delivery.id === cartItem.deliveryId){
            matchItem = delivery;
        }
    });
    return matchItem;
}