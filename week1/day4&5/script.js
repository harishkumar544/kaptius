const products = [
    { id: 1, image: "./images/products/f1.jpg", brand: "adidas", price: 78 },
    { id: 2, image: "./images/products/f2.jpg", brand: "adidas", price: 78 },
    { id: 3, image: "./images/products/f3.jpg", brand: "adidas", price: 78 },
    { id: 4, image: "./images/products/f4.jpg", brand: "adidas", price: 78 },
    { id: 5, image: "./images/products/f5.jpg", brand: "adidas", price: 78 },
    { id: 6, image: "./images/products/f6.jpg", brand: "adidas", price: 78 },
    { id: 7, image: "./images/products/f7.jpg", brand: "adidas", price: 78 },
    { id: 8, image: "./images/products/f8.jpg", brand: "adidas", price: 78 },
    { id: 9, image: "./images/products/n1.jpg", brand: "adidas", price: 78 },
    { id: 10, image: "./images/products/n2.jpg", brand: "adidas", price: 78 },
    { id: 11, image: "./images/products/n3.jpg", brand: "adidas", price: 78 },
    { id: 12, image: "./images/products/n4.jpg", brand: "adidas", price: 78 },
    { id: 13, image: "./images/products/n5.jpg", brand: "adidas", price: 78 },
    { id: 14, image: "./images/products/n6.jpg", brand: "adidas", price: 78 },
    { id: 15, image: "./images/products/n7.jpg", brand: "adidas", price: 78 },
    { id: 16, image: "./images/products/n8.jpg", brand: "adidas", price: 78 }
];

let cart = JSON.parse(localStorage.getItem('cart')) || {};
if (typeof cart !== 'object' || Array.isArray(cart)) {
    cart = {};
}

let totalPrice = 0;

function handleCart(product_id) {
    if (cart[product_id]) {
        cart[product_id]++;
    } else {
        cart[product_id] = 1;
    }

    updateTotalPrice();
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
    displayCartItems();
}

function removeItem(product_id) {
    delete cart[product_id];
    updateTotalPrice();
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
    displayCartItems();
}

function updateTotalPrice() {
    const items = products.filter(product => cart[product.id]);
    totalPrice = items.reduce((sum, product) => {
        return sum + (product.price * cart[product.id]);
    }, 0);
}
function handleOrder(){
    alert("your order is placed");
}
function displayCartItems() {
    const cartElement = document.getElementById("cart");


    if (!cartElement) {
        console.error('Element with id "cart" not found');
        return;
    }

    const totalItems = Object.values(cart).reduce((sum, count) => sum + count, 0);
    cartElement.innerHTML = `<p class="text-center">Total Items: ${totalItems}</p>`; 



    const ulElement = document.createElement("ul");
    ulElement.classList.add("align-self-center")
    

    const cartItems = products.filter(product => cart[product.id]);

    cartItems.forEach(product => {
        const li = document.createElement("li");
        li.classList.add("product-container","mb-3");
        li.innerHTML = `
            <img src="${product.image}" alt="${product.brand}" class="product">
            <div class="product-discription">
                <h3>${product.brand}</h3>
                <p>$${product.price}</p>
                <div class="d-flex">
                    <p>Quantity: ${cart[product.id]}</p>
                    <button onclick="removeItem(${product.id})" class="btn btn-danger ml-2">Remove</button>
                </div>
                
            </div>
        `;
        ulElement.appendChild(li);
    });

    const displayPriceContainer = document.createElement("div");
        displayPriceContainer.innerHTML=`
            <div class="d-flex flex-column justify-content-end">
            <p class="text-center">Total Price: $<span >${totalPrice}</span></p>
            <button class="btn btn-warning w-20" onclick="handleOrder()">Buy</button>
        </div>
        `;
    ulElement.appendChild(displayPriceContainer);

    cartElement.appendChild(ulElement);
}

document.addEventListener('DOMContentLoaded', () => {
    updateTotalPrice();
    displayCartItems();
});
