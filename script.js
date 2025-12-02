// Dynamic footer year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Function to send user to contact page with product info
function buyProduct(productName) {
    window.location.href = `contact.html?product=${encodeURIComponent(productName)}`;
}

// Prefill message field on contact page if product selected
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const product = urlParams.get('product');
    if(product) {
        const messageField = document.querySelector('.contact-form textarea');
        if(messageField) {
            messageField.value = `Hello, I would like to buy: ${product}`;
        }
    }
});

