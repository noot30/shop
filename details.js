const productDetails = document.getElementById("productDetails");

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

const url = `https://fakestoreapi.com/products/${productId}`;

let cart = JSON.parse(localStorage.getItem("cart")) || [];

async function getProduct() {
const response = await fetch(url);
const product = await response.json();


console.log(product);

displayProduct(product);


}

function displayProduct(product) {


productDetails.innerHTML = `
    <div id="product" class="product col-sm-12 col-md-5 col-lg-4">

        <div id="image" class="image">
            <img src="${product.image}" alt="${product.title}">
        </div>

        <div class="caption">

            <h1>${product.title}</h1>

            <h3>$${product.price}</h3>

            <h5>Category: ${product.category}</h5>

            <h5>Rating: ${product.rating.rate}</h5>

            <p>${product.description}</p>

            <button 
                onclick="addToCart(${product.id})" 
                type="button" 
                class="btn btn-dark">
                Add to cart
            </button>

            <a href="./login.html" class="btn btn-success">
                Go to cart
            </a>

            <a href="./index.html" class="btn btn-secondary">
                Back
            </a>

        </div>

    </div>
`;


}

function addToCart(id) {


let product = cart.find(function(product) {
    return product.id == id;
});

if (product) {

    alert("The product is already in the cart");

    return;
}

fetch(`https://fakestoreapi.com/products/${id}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(product) {

        cart.push(product);

        localStorage.setItem("cart", JSON.stringify(cart));
        document.querySelector(".cartCounter").innerHTML = cart.length;
        alert("The item was added to the cart");
    });


}

getProduct();
