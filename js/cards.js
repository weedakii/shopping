let productsDom = document.querySelector(".products");
let noItems = document.querySelector(".no-item");
// function to show the products at the catr products
function drawCartProducts(allProducts = []) {
    if (JSON.parse(localStorage.getItem("cartProducts")).length == 0) {
        noItems.innerHTML = `
            <p>plz fill me with the products</p>
            <a style="display: block;" href="index.html">Back to store</a>`;
        noItems.style.display = "block" 
    }
    let products = JSON.parse(localStorage.getItem("cartProducts")) || allProducts;
    let cartProductsUI = products.map((item) => {
        return `
        <div class="products-item">
        <div class="img-p">
        <img src="${item.imgUrl}" alt="img here">
        </div>
        <div class="product-desc">
            <p><a href="#" class="title ">${item.title}</a><span> -<span/> ${item.desc} </p>
            <div class="fav">
                <span>Type: ${item.type}</span>
                <i class="icon fas fa-heart"></i>
            </div>
        </div>
        <div class="rate">
            <div class="stars">
                <div class="stars-son">
                    <i class="i1 fas fa-star"></i>
                    <i class="i2 fas fa-star"></i>
                    <i class="i3 fas fa-star"></i>
                    <i class="i4 fas fa-star"></i>
                    <i class="i5 fas fa-star"></i>
                </div>
            </div>
            <div class="add">
                <button class="add-to-card" onclick="removeFromCard(${item.id})">remove</button>
            </div>
        </div>
        </div>
    `
    })
    productsDom.innerHTML = cartProductsUI.join("");
};
drawCartProducts();
// remove item
function removeFromCard(id) {
    if (!userName) {
        window.location = "login.html"
    } else {
        let cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
        let filteredItems = cartProducts.filter((item) => item.id !== id);

        localStorage.setItem("cartProducts", JSON.stringify(filteredItems));
        drawCartProducts(filteredItems);
    }
}
