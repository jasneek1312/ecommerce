let cart = [];
let totalPrice = 0;

function addToCart(productId) {
    const products = [
        { id: 1, name: "Product 1", price: 10.00 },
        { id: 2, name: "Product 2", price: 20.00 },
    ];

    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalElement = document.getElementById("total-price");

    cartItems.innerHTML = "";
    totalPrice = 0;

    cart.forEach((item, index) => {
        cartItems.innerHTML += `<p>${item.name} - $${item.price}</p>`;
        totalPrice += item.price;
    });

    totalElement.textContent = totalPrice.toFixed(2);
}

function checkout() {
    alert("Checkout complete. Total: $" + totalPrice.toFixed(2));
    cart = [];
    updateCart();
}
