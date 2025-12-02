// Main JS for interactivity
(function(){
const year = new Date().getFullYear();
// update footer years on each page if id exists
['footerYear','footerYearAbout','footerYearProducts','footerYearContact'].forEach(id => {
const el = document.getElementById(id);
if(el) el.textContent = year;
});


// shop button directs to products page
const shopBtn = document.getElementById('shopBtn');
if(shopBtn){
shopBtn.addEventListener('click', ()=>{ window.location.href = 'products.html'; });
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
// do some simple client-side validation and feedback
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


})();