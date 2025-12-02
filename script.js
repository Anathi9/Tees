// Dynamic footer year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Shop buttons redirect
document.querySelectorAll('.btn-shop').forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = 'products.html';
    });
});
