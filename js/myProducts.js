let productsDom = document.querySelector(".products");
let noItems = document.querySelector(".no-item");

// function to show the products at the catr products
function drawCartProducts() {
    let products = localStorage.getItem("shop-products") 
    ? JSON.parse(localStorage.getItem("shop-products")) : productsMom;
    let getMine = products.filter((item) => item.me === "y")
    if (getMine.length == 0) {
        noItems.innerHTML = `
            <p>plz fill me with the products</p>
            <a style="display: block;" href="index.html">Back to store</a>`;
        noItems.style.display = "block"
    }
    if (userName) {
        let cartProductsUI = getMine.map((item) => {
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
    } else {
        window.location = "login.html"
    }
};
drawCartProducts();
// remove item
function removeFromCard(id) {
    if (!userName) {
        window.location = "login.html"
    } else {
        let products = localStorage.getItem("shop-products") 
        ? JSON.parse(localStorage.getItem("shop-products")) : productsMom;
        let filteredItems = products.filter((item) => item.id !== id);

        localStorage.setItem("shop-products", JSON.stringify(filteredItems));
        drawCartProducts(filteredItems);
    }
}