import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProductsFetch } from "../data/products.js";
import { loadCartFetch, calculateCartQuantity } from "../data/cart.js";
// import '../data/car.js';
// import '../data/backend-practice.js'
export function updateCartQuantity(){
    const cartQuantity = calculateCartQuantity();
    document.querySelector('.js-return').innerHTML = `${cartQuantity} Items`;
}

async function loadPage(){
    try{
        updateCartQuantity();
        await Promise.all([
            loadProductsFetch(),
            loadCartFetch()
        ])
    } catch(error){
        console.log('Unexpected error. Try again later'+error);
    }
     
    renderOrderSummary();
    renderPaymentSummary();
}
loadPage();

// Promise.all([
//     loadProductsFetch(),
//     new Promise((resolve)=>{
//         loadCart(()=>{
//             resolve();
//         });
//     })

// ]).then(()=>{
//     renderOrderSummary();
//     renderPaymentSummary();
// });

// new Promise((resolve)=>{
//     loadProducts(()=>{
//         resolve('value1');
//     });

// }).then((value)=>{
//     return new Promise((resolve)=>{
//         loadCart(()=>{
//             resolve();
//         });
//     });

// }).then(()=>{
//     renderOrderSummary();
//     renderPaymentSummary();
// })

// loadProducts(()=>{
//     loadCart(()=>{
//         renderOrderSummary();
//         renderPaymentSummary();
//     })
// });

