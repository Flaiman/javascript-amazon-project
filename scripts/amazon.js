import {addToCart, calculateCartQuantity} from '../data/cart.js';
import {products, loadProductsFetch} from '../data/products.js';

async function renderProductsGrid(){
  await loadProductsFetch();
  updateCartQuantity();

  let productHTML = '';

  const url = new URL(window.location.href);
  const search = url.searchParams.get('search');
  let filteredProducts = products;
  
  if(search){
    filteredProducts = products.filter((product)=>{
      let matchingKeyword = false;

      product.keywords.forEach((keyword)=>{
        if(keyword.toLowerCase().includes(search.toLowerCase())){
          matchingKeyword = true;
        }
      })
      return matchingKeyword || product.name.toLowerCase().includes(search.toLowerCase());
    })
  }

  filteredProducts.forEach((product)=>{
      productHTML+=`
      <div class="product-container">
            <div class="product-image-container">
              <img class="product-image"
                src="${product.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
              ${product.name}
            </div>

            <div class="product-rating-container">
              <img class="product-rating-stars"
                src="${product.getStarsUrl()}">
              <div class="product-rating-count link-primary">
                ${product.rating.count}
              </div>
            </div>

            <div class="product-price">
              ${product.getPrice()}
            </div>

            <div class="product-quantity-container">
              <select class="select-quantity select-quantity-${product.id}">
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            ${product.extraInfoHTML()}

            <div class="product-spacer"></div>

            <div class="added-to-cart">
              <img src="images/icons/checkmark.png">
              Added
            </div>

            <button class="add-to-cart-button button-primary js-add" data-product-id="${product.id}">
              Add to Cart
            </button>
          </div>
      `
  })
  document.querySelector('.products-grid').innerHTML=productHTML;

  function updateCartQuantity(){
    const cartQuantity = calculateCartQuantity();
    document.querySelector('.cart-quantity').innerHTML = cartQuantity;
  }

  document.querySelectorAll('.js-add').forEach((button) => {
      button.addEventListener('click', () => {
          const productId = button.dataset.productId;
          const quantity = Number(
            document.querySelector(`.select-quantity-${productId}`).value
          );
          console.log(quantity);
          addToCart(productId, quantity);
          updateCartQuantity();
      })
  })

  document.querySelector('.search-button').addEventListener('click', ()=>{
    const searchInput = document.querySelector('.search-bar').value;
    window.location.href = `index.html?search=${searchInput}`;
  })

}
renderProductsGrid();
