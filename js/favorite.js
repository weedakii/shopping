let favProducts = document.querySelector(".products");
let noItems = document.querySelector(".no-item");

function drawFavorite(allProducts = []) {
    if ((!JSON.parse(localStorage.getItem("favoriteItems"))) || JSON.parse(localStorage.getItem("favoriteItems")).length == 0 ) {
        noItems.innerHTML = `
            <p>plz fill me with the products</p>
            <a style="display: block;" href="index.html">Back to store</a>`;
        noItems.style.display = "block"
    }
    let favoriteItem = JSON.parse(localStorage.getItem("favoriteItems")) || allProducts;
    let fav = favoriteItem.map((item) => {
        return `
        <div class="products-item">
        <div class="img-p">
        <img src="${item.imgUrl}" alt="img here">
        </div>
        <div class="product-desc">
            <p><a href="#" class="title ">${item.title}</a><span> -<span/>  ${item.desc} </p>
            <div class="fav">
                <span>Tybe: ${item.type}</span>
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
    favProducts.innerHTML = fav.join("");
}

drawFavorite();

// remove function
function removeFromCard(id) {
    if (!userName) {
        window.location = "login.html";
    } else{
        let favoriteItems = JSON.parse(localStorage.getItem("favoriteItems"));
        let removed = favoriteItems.filter((item) => item.id !== id);
        localStorage.setItem("favoriteItems", JSON.stringify(removed));
        drawFavorite(removed);

        let products = localStorage.getItem("shop-products") 
            ? JSON.parse(localStorage.getItem("shop-products")) : productsMom;
        let loveProduct = products.find((item) => item.id === id)
        loveProduct.love = "black"
        loveProduct = [...products]
        localStorage.setItem("shop-products", JSON.stringify(loveProduct))
    }
}

