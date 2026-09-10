const url = "https://fakestoreapi.com/products";
const productsContainer = document.getElementById("products");
const searchInput = document.getElementById("search")
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let productCards = [];
async function getProducts() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        productCards = data;
        displayProdaucts(productCards);
    } catch (error) {
        console.error(error);
    }
}
function displayProdaucts(products) {
    let box = "";
    for (let i = 0; i < products.length; i++) {
        box += `
    <div class="row justify-content-md-center">
        <div class="card col-sm-12 col-md-5 col-lg-3">
            <img src="${products[i].image}" class="card-img-top" alt="${products[i].title}">
            <div class="card-body">
                <h5 class="card-title">${products[i].title}</h5>
                <p class="card-text">$${products[i].price}</p>
                <p class="card-text">⭐ ${products[i].rating.rate}</p>
                <a href="./details.html?id=${products[i].id}"class="btn btn-success">Details</a>
            </div>
        </div>
    </div>
`;
    }
    productsContainer.innerHTML = box;
}
getProducts();

function search(){
    let searchValue = searchInput.value.toLowerCase()
    let filter = productCards.filter(function(product){
        return product.title.toLowerCase().includes(searchValue)
    })
    displayProdaucts(filter)
}
searchInput.addEventListener('input', search);
document.querySelector(".cartCounter").innerHTML = cart.length;