//let today = dayjs().format('dddd, MMMM D');

export let orders = JSON.parse(localStorage.getItem('orders')) || [];

export function saveOrderToStorage(){
    localStorage.setItem('orders',JSON.stringify(orders));
}