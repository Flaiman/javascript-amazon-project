import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProductsFetch } from "../data/products.js";
import { loadCart, loadCartFetch } from "../data/cart.js";
import { showOrders } from "../data/orders.js";
// import '../data/car.js';
// import '../data/backend-practice.js'

async function loadPage(){
    try{
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

