export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order){
    let repeatItem;
    orders.forEach((orderItem)=>{
        if(order.totalCostCents===orderItem.totalCostCents){
            repeatItem=orderItem;
        }
    })
    if(!repeatItem){
        orders.unshift(order);
        saveToStorage();
    }
}

export function getOrder(orderId){
    let matchingProduct;
    orders.forEach((order)=>{
        if(order.id===orderId){
            matchingProduct=order;
        }
    });
    return matchingProduct;
}

function saveToStorage(){
    localStorage.setItem('orders', JSON.stringify(orders));
}

export function showOrders(){
    orders.forEach((order)=>{
        console.log(order);
    })
}
showOrders();