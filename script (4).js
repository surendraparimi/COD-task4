// script.js
const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
    { id: 4, name: "Product 4", price: 40 },
    { id: 5, name: "Product 5", price: 50 }
];

const productsSection = document.getElementById('products');

function renderProducts() {
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsSection.appendChild(productCard);
    });
}

function addToCart(productId) {
    // Implement cart functionality here
    console.log(`Product ${productId} added to cart.`);
}

// Render products when the page loads
document.addEventListener('DOMContentLoaded', renderProducts);
