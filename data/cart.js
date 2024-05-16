export let cart = JSON.parse(localStorage.getItem('cart')) || [];

export function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}

export function addtocart(productId,quanSelect){
    let matchingItem;
    cart.forEach((prd)=>{
      if(prd.productId===productId){
        matchingItem = prd;
      }
    })

    if(matchingItem){
      matchingItem.quantity+=quanSelect;
    }
    else{
      cart.push({
      productId,
      quantity: quanSelect,
      deliveryId: '1'
      });

    }

    saveToStorage();
}

export function addQuantity(){
  let checkquan = 0;
cart.forEach((item)=>{
    checkquan+=item.quantity;
  });
  return checkquan;
}

export function removeItem(prdId){
  let newcart=[];
  cart.forEach((cartItem)=>{
      if(prdId !== cartItem.productId){
          newcart.push(cartItem);
      }
  });
  cart=newcart;

  saveToStorage();
}


export function updateDeliveryOptions(productId, deliveryId){
  //console.log(productId,deliveryId);
  let matchingItem = '';
  cart.forEach((cartItem)=>{
    if(cartItem.productId === productId){
      matchingItem = cartItem;
    }
  });

  matchingItem.deliveryId = deliveryId;
  saveToStorage();
}