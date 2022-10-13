const cart = document.querySelector('.cart');
const addButton = document.querySelectorAll('.add-btn');
const total = document.querySelector('.total'); 

for (let i = 0; i < addButton.length; i++) {
  addButton[i].addEventListener('click', addToCart);
};

let totalPrice= 0;
function addToCart(e) {
  let button = e.target;
  let item = button.parentElement.parentElement.parentElement;
  let img = item.querySelector('.photo').src;
  let name = item.querySelector('.name').innerText;
  let price = parseInt(item.querySelector('.price').innerText.replace('$', ''));
  totalPrice = totalPrice + price;
  console.log(totalPrice);
  newItemforCart(name, price, img);
}

function newItemforCart(title, price, img) {
  let newItem = document.createElement('div');
  let newItemContent = `
  <div class="cart-items">
    <img class="img-on-cart" src="${img}" alt="">
    <h3>${title}</h3>
    <h3 class="price">${price}</h3>
    <input class="quantity" type="number" value="1" min="1" max="10">
    <button class="remove">Remove</button>
  </div>`;
  newItem.innerHTML = newItemContent;
  cart.append(newItem); 
  remove();
  total.innerHTML = `$${totalPrice}`;
};

function remove() {
  const removeButton = cart.querySelectorAll('.remove');
  for (let i = 0; i < removeButton.length; i++) {
    let button = removeButton[i];
    button.addEventListener('click', (e) => {
      let buttonClicked = e.target;
      buttonClicked.parentElement.remove();
    });
  };
};

cart.addEventListener('click', (e) => {
  console.log(e.target);
})