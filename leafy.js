let total = 0;

function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function addToCart(name, price) {
    const cartList = document.getElementById('cartList');
    const totalPriceDisplay = document.getElementById('totalPrice');

    // Create new list item
    const li = document.createElement('li');
    li.innerHTML = `<span>${name}</span> - ₹${price}`;
    cartList.appendChild(li);

    // Update Total
    total += price;
    totalPriceDisplay.innerText = total;

    // Visual feedback on button
    const btn = event.target;
    btn.innerText = "Added!";
    btn.style.background = "#95d5b2";
    
    setTimeout(() => {
        btn.innerText = "Add to Cart";
        btn.style.background = "#1b4332";
    }, 800);
}
