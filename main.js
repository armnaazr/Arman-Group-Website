let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let cartBtn = document.querySelector('.cart-btn');

window.addEventListener('scroll', () =>{
    header.classList.toggle('active', window.scrollY > 0);
});

menu.onclick = () => {
    navbar.classList.toggle('active');
};
window.onscroll = () => {
    navbar.classList.remove('active');
};

function clearForm(event) {
    document.getElementById("contactForm").reset();
    alert("Form submitted successfully!");
  };

cartBtn.addEventListener('click', function() {
    alert("Order added to cart");   
});