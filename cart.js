let cart = JSON.parse(localStorage.getItem("cart")) || [];
document.querySelector(".cartCounter").innerHTML = cart.length;
const cartContainer = document.getElementById("cartContainer");
function displayCart() {
let box = "";
if (cart.length === 0) {
    box = "<p>Your cart is empty.</p>";
} else {
    for (let i = 0; i < cart.length; i++) {
        box += `
            <div class="col-sm-12 col-md-5 col-lg-3">
                <div class="cart-card">
                    <img 
                        src="${cart[i].image}" 
                        class="card-img-top" 
                        alt="${cart[i].title}"
                    >
                    <div class="card-body">
                        <h5 class="card-title">
                            ${cart[i].title}
                        </h5>
                        <p class="card-text">
                            $${cart[i].price}
                        </p>
                        <button class="btn btn-danger" onclick="removeItem(${cart[i].id})">
                        remove
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
}

cartContainer.innerHTML = box;
}
function removeItem(id){
    cart = cart.filter(function(product){
        return product.id != id;
    })
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
    document.querySelector(".cartCounter").innerHTML = cart.length;
}

displayCart();

function clearCart(){
    cart = [];
    localStorage.removeItem("cart");
    displayCart();
    document.querySelector(".cartCounter").innerHTML = cart.length;
}
