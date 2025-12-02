// Main JS for interactivity
function saveCart(cart){ localStorage.setItem(CART_KEY, JSON.stringify(cart)); }
function cartCount(){ return getCart().reduce((s,i)=>s + (i.qty||1),0); }
function updateCartCounts(){
document.querySelectorAll('#cartCount, #cartCountAbout, #cartCountProducts, #cartCountContact').forEach(el=>{ if(el) el.textContent = cartCount(); });
}
updateCartCounts();


// Add to cart buttons
document.addEventListener('click', function(e){
const add = e.target.closest('.add-to-cart');
if(add){
const card = add.closest('.product-card');
const id = card.dataset.id;
const name = card.dataset.name;
const price = Number(card.dataset.price || 0);
const cart = getCart();
const found = cart.find(i=>i.id===id);
if(found){ found.qty = (found.qty||1) + 1; } else { cart.push({id,name,price,qty:1}); }
saveCart(cart);
updateCartCounts();
// small visual feedback
add.textContent = 'Added ✓';
setTimeout(()=> add.textContent = 'Add to cart', 1200);
}
});


// shop button progressive enhancement handled by href; keep this to ensure behavior if someone has JS SPA style
const shopBtn = document.getElementById('shopBtn');
if(shopBtn){
shopBtn.addEventListener('click', ()=>{ /* href will handle navigation */ });
}


// nav toggle for mobile
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if(navToggle && navLinks){
navToggle.addEventListener('click', ()=>{
navLinks.classList.toggle('show');
});
}


// contact form sample submit handling
const contactForm = document.getElementById('contactForm');
if(contactForm){
contactForm.addEventListener('submit', (e)=>{
e.preventDefault();
const name = contactForm.name.value.trim();
const email = contactForm.email.value.trim();
if(!name || !email){
alert('Please fill in your name and email.');
return;
}
// placeholder behaviour: show thanks message and reset
alert('Thanks, ' + name + '! We received your message.');
contactForm.reset();
});
}

