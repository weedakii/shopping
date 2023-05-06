let productsDom = document.querySelector(".products");
let carProductsDom = document.querySelector(".card-product-info");
let carProductsTdDom = document.querySelector(".card-product-info td");
let num = document.querySelector(".num");
let shopLogo =document.querySelector(".shop");
let cartProducts =document.querySelector(".card-product");
let titleId =document.querySelector(".title");
let search =document.getElementById("search");
let products = localStorage.getItem("shop-products") 
? JSON.parse(localStorage.getItem("shop-products")) : productsMom;

shopLogo.addEventListener('click', openCart);

// drawing functions
            // watches part
let watchProduct = document.querySelector(".watch-product");
function drawWatch() {
    let produc = localStorage.getItem("shop-products") ?
    JSON.parse(localStorage.getItem("shop-products")) : productsMom;
    let myCard = produc.filter((item) => item.type === "watch")
    if (myCard.length > 4) {
        myCard = [
            myCard[0],
            myCard[1],
            myCard[2],
            myCard[3],
        ]
        let myC = myCard.map((item) => {
            return `
            <div class="products-item">
            <div class="img-p">
            <img src="${item.imgUrl}" alt="img here">
            </div>
            <div class="product-desc">
                <p><a onclick="savedId(${item.id})" class="title">${item.title}</a><span> -<span/> ${item.desc}</p>
                <div class="fav">
                    <span>Type: ${item.type}</span>
                    <i class="icon fas fa-heart" style="color: ${item.love === 'red' ? 'red' : ''}" onclick="addToFavorite(${item.id})"></i>
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
                    <div style="border-top: 1px solid gray; display: ${item.me !== "y" ? "none" : ""};">
                        <button class="edit" onclick="editID(${item.id})"/>Edit</button>
                    </div>
                </div>
                <div class="add">
                    <button class="add-to-card" onclick="addToCard(${item.id})">add to card</button>
                </div>
            </div>
            </div>
        `
        })
        watchProduct.innerHTML = myC.join("");
    } else {
        let myC = myCard.map((item) => {
            return `
            <div class="products-item">
            <div class="img-p">
            <img src="${item.imgUrl}" alt="img here">
            </div>
            <div class="product-desc">
                <p><a onclick="savedId(${item.id})" class="title">${item.title}</a><span> -<span/> ${item.desc}</p>
                <div class="fav">
                    <span>Type: ${item.type}</span>
                    <i class="icon fas fa-heart" style="color: ${item.love === 'red' ? 'red' : ''}" onclick="addToFavorite(${item.id})"></i>
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
                    <div style="border-top: 1px solid gray; display: ${item.me !== "y" ? "none" : ""};">
                        <button class="edit" onclick="editID(${item.id})"/>Edit</button>
                    </div>
                </div>
                <div class="add">
                    <button class="add-to-card" onclick="addToCard(${item.id})">add to card</button>
                </div>
            </div>
            </div>
        `
        })
        watchProduct.innerHTML = myC.join("");
    }
}
drawWatch();
            // devices part
let deviceProduct = document.querySelector(".devices-product");
function drawDevices() {
    let produc = localStorage.getItem("shop-products") ?
    JSON.parse(localStorage.getItem("shop-products")) : productsMom;
    
    let myCard = produc.filter((item) => item.type === "devices")
    if (myCard.length > 4) {
        myCard = [
            myCard[0],
            myCard[1],
            myCard[2],
            myCard[3],
        ]
        let myC = myCard.map((item) => {
            return `
            <div class="products-item">
            <div class="img-p">
            <img src="${item.imgUrl}" alt="img here">
            </div>
            <div class="product-desc">
                <p><a onclick="savedId(${item.id})" class="title">${item.title}</a><span> -<span/> ${item.desc}</p>
                <div class="fav">
                    <span>Type: ${item.type}</span>
                    <i class="icon fas fa-heart" style="color: ${item.love === 'red' ? 'red' : ''}" onclick="addToFavorite(${item.id})"></i>
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
                    <div style="border-top: 1px solid gray; display: ${item.me !== "y" ? "none" : ""};">
                        <button class="edit" onclick="editID(${item.id})"/>Edit</button>
                    </div>
                </div>
                <div class="add">
                    <button class="add-to-card" onclick="addToCard(${item.id})">add to card</button>
                </div>
            </div>
            </div>
        `
        })
        deviceProduct.innerHTML = myC.join("");
    } else {
        let myC = myCard.map((item) => {
            return `
            <div class="products-item">
            <div class="img-p">
            <img src="${item.imgUrl}" alt="img here">
            </div>
            <div class="product-desc">
                <p><a onclick="savedId(${item.id})" class="title">${item.title}</a><span> -<span/> ${item.desc}</p>
                <div class="fav">
                    <span>Type: ${item.type}</span>
                    <i class="icon fas fa-heart" style="color: ${item.love === 'red' ? 'red' : ''}" onclick="addToFavorite(${item.id})"></i>
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
                    <div style="border-top: 1px solid gray; display: ${item.me !== "y" ? "none" : ""};">
                        <button class="edit" onclick="editID(${item.id})"/>Edit</button>
                    </div>
                </div>
                <div class="add">
                    <button class="add-to-card" onclick="addToCard(${item.id})">add to card</button>
                </div>
            </div>
            </div>
        `
        })
        deviceProduct.innerHTML = myC.join("");
    }
}
drawDevices();
            // furneture part
let furnetureProduct = document.querySelector(".furneture-product");
function drawFurneture() {
    let produc = localStorage.getItem("shop-products") ?
    JSON.parse(localStorage.getItem("shop-products")) : productsMom;
    produc.sort(function(a, b){return 0.5 - Math.random()});
    let myCard = produc.filter((item) => item.type === "furneture");
    if (myCard.length > 4) {
        myCard = [
            myCard[0],
            myCard[1],
            myCard[2],
            myCard[3],
        ]
        let myC = myCard.map((item) => {
            return `
            <div class="products-item">
            <div class="img-p">
            <img src="${item.imgUrl}" alt="img here">
            </div>
            <div class="product-desc">
                <p><a onclick="savedId(${item.id})" class="title">${item.title}</a><span> -<span/> ${item.desc}</p>
                <div class="fav">
                    <span>Type: ${item.type}</span>
                    <i class="icon fas fa-heart" style="color: ${item.love === 'red' ? 'red' : ''}" onclick="addToFavorite(${item.id})"></i>
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
                    <div style="border-top: 1px solid gray; display: ${item.me !== "y" ? "none" : ""};">
                        <button class="edit" onclick="editID(${item.id})"/>Edit</button>
                    </div>
                </div>
                <div class="add">
                    <button class="add-to-card" onclick="addToCard(${item.id})">add to card</button>
                </div>
            </div>
            </div>
        `
        })
        furnetureProduct.innerHTML = myC.join("");
    } else {
        let myC = myCard.map((item) => {
            return `
            <div class="products-item">
            <div class="img-p">
            <img src="${item.imgUrl}" alt="img here">
            </div>
            <div class="product-desc">
                <p><a onclick="savedId(${item.id})" class="title">${item.title}</a><span> -<span/> ${item.desc}</p>
                <div class="fav">
                    <span>Type: ${item.type}</span>
                    <i class="icon fas fa-heart" style="color: ${item.love === 'red' ? 'red' : ''}" onclick="addToFavorite(${item.id})"></i>
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
                    <div style="border-top: 1px solid gray; display: ${item.me !== "y" ? "none" : ""};">
                        <button class="edit" onclick="editID(${item.id})"/>Edit</button>
                    </div>
                </div>
                <div class="add">
                    <button class="add-to-card" onclick="addToCard(${item.id})">add to card</button>
                </div>
            </div>
            </div>
        `
        })
        furnetureProduct.innerHTML = myC.join("");
    }
}
drawFurneture();
            // furneture part
let otherProduct = document.querySelector(".other-product");
function drawOther() {
    let produc = localStorage.getItem("shop-products") ?
    JSON.parse(localStorage.getItem("shop-products")) : productsMom;
    produc.sort(function(a, b){return 0.5 - Math.random()});
    let myCard = produc.filter((item) => item.type === "other")
    if (myCard.length > 4) {
        myCard = [
            myCard[0],
            myCard[1],
            myCard[2],
            myCard[3],
        ]
        let myC = myCard.map((item) => {
            return `
            <div class="products-item">
            <div class="img-p">
            <img src="${item.imgUrl}" alt="img here">
            </div>
            <div class="product-desc">
                <p><a onclick="savedId(${item.id})" class="title">${item.title}</a><span> -<span/> ${item.desc}</p>
                <div class="fav">
                    <span>Type: ${item.type}</span>
                    <i class="icon fas fa-heart" style="color: ${item.love === 'red' ? 'red' : ''}" onclick="addToFavorite(${item.id})"></i>
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
                    <div style="border-top: 1px solid gray; display: ${item.me !== "y" ? "none" : ""};">
                        <button class="edit" onclick="editID(${item.id})"/>Edit</button>
                    </div>
                </div>
                <div class="add">
                    <button class="add-to-card" onclick="addToCard(${item.id})">add to card</button>
                </div>
            </div>
            </div>
        `
        })
        otherProduct.innerHTML = myC.join("");
    } else {
        let myC = myCard.map((item) => {
            return `
            <div class="products-item">
            <div class="img-p">
            <img src="${item.imgUrl}" alt="img here">
            </div>
            <div class="product-desc">
                <p><a onclick="savedId(${item.id})" class="title">${item.title}</a><span> -<span/> ${item.desc}</p>
                <div class="fav">
                    <span>Type: ${item.type}</span>
                    <i class="icon fas fa-heart" style="color: ${item.love === 'red' ? 'red' : ''}" onclick="addToFavorite(${item.id})"></i>
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
                    <div style="border-top: 1px solid gray; display: ${item.me !== "y" ? "none" : ""};">
                        <button class="edit" onclick="editID(${item.id})"/>Edit</button>
                    </div>
                </div>
                <div class="add">
                    <button class="add-to-card" onclick="addToCard(${item.id})">add to card</button>
                </div>
            </div>
            </div>
        `
        })
        otherProduct.innerHTML = myC.join("");
    }
}
drawOther();

// function to but the products at the html and show it at the wep
let drawProducts;
(drawProducts= function (products = []) {
    if (userName) {
        products.sort(function(a, b){return 0.5 - Math.random()});
        let productsUI = products.map( (item) =>  {
        return `
            <div class="products-item">
            <div class="img-p">
            <img src="${item.imgUrl}" alt="img here">
            </div>
            <div class="product-desc">
                <p><a onclick="savedId(${item.id})" class="title">${item.title}</a><span> -<span/> ${item.desc}</p>
                <div class="fav">
                    <span>Type: ${item.type}</span>
                    <i class="icon fas fa-heart" style="color: ${item.love === 'red' ? 'red' : ''}" onclick="addToFavorite(${item.id})"></i>
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
                    <div style="border-top: 1px solid gray; display: ${item.me !== "y" ? "none" : ""};">
                        <button class="edit" onclick="editID(${item.id})"/>Edit</button>
                    </div>
                </div>
                <div class="add">
                    <button class="add-to-card" onclick="addToCard(${item.id})">add to card</button>
                </div>
            </div>
            </div>
        `
    });
    productsDom.innerHTML = productsUI.join("");
    } else {
        let products = productsMom;
        let productsUI = products.map( (item) =>  {
            return `
                <div class="products-item">
                <div class="img-p">
                <img src="${item.imgUrl}" alt="img here">
                </div>
                <div class="product-desc">
                    <p><a onclick="savedId(${item.id})" class="title">${item.title}</a><span> -<span/> ${item.desc}</p>
                    <div class="fav">
                        <span>Type: ${item.type}</span>
                        <i class="icon fas fa-heart" style="color: ${item.love === 'red' ? 'red' : ''}" onclick="addToFavorite(${item.id})"></i>
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
                        <div style="border-top: 1px solid gray; display: ${item.me !== "y" ? "none" : ""};">
                            <button class="edit" onclick="editID(${item.id})"/>Edit</button>
                        </div>
                    </div>
                    <div class="add">
                        <button class="add-to-card" onclick="addToCard(${item.id})">add to card</button>
                    </div>
                </div>
                </div>
            `
        });
        productsDom.innerHTML = productsUI.join("");
    }
    
})(products);

// function to check if the user login when he/she/it click on add to cart buttom
let addedItem = localStorage.getItem("cartProducts") 
? JSON.parse(localStorage.getItem("cartProducts")) : [];
(function cartMenu() {
    if (addedItem) {
        addedItem.map((item) => {
            carProductsDom.innerHTML += `
                <tbody>
                    <tr class="here">
                        <td><img src="${item.imgUrl}" alt="img here"></td>
                        <td>${item.title}</td>
                        <td>${item.qty}</td>
                        <td>${(item.price*item.qty)+'$'}</td>
                    </tr>
                </tbody>`;
            let productsNum = document.querySelectorAll(".card-product-info tr");
            num.innerHTML = productsNum.length-1;
        })
    }   
})();
// the add part
function addToCard(id) {
    if (!userName) {
        window.location = "login.html";
    } else {
        let choosen = products.find((item) => item.id === id );
        let isProduct = addedItem.some((i) => i.id === choosen.id)

        if (isProduct) {
            addedItem = addedItem.map(P => {
                if (P.id === choosen.id) P.qty += 1;
                return P;
            })
        } else {
            addedItem.push(choosen)
        }

        carProductsDom.innerHTML = `
            <tr>
                <th>Img</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>`;
        addedItem.forEach((item) => {
            carProductsDom.innerHTML += `
                <tr class="here">
                    <td><img src="${item.imgUrl}" alt="img here"></td>
                    <td>${item.title}</td>
                    <td>${item.qty}</td>
                    <td>${(item.price*item.qty)+'$'}</td>
                </tr>`;
        });
        
        localStorage.setItem("cartProducts", JSON.stringify(addedItem))

        let productsNum = document.querySelectorAll(".card-product-info tr");
        num.innerHTML = productsNum.length-1;
    }
}
//  function to open and close the menu
function openCart() {
    if (num.innerHTML != "0") {
        if (cartProducts.style.display == 'block') {
            cartProducts.style.display = 'none'
        } else {
            cartProducts.style.display = 'block';
        }
    }
}
// function to deal with the item
let lastVisited = localStorage.getItem("last-visited") ?
    JSON.parse(localStorage.getItem("last-visited")) :[];
function savedId(id) {
    localStorage.setItem("productId", id);
    let lastSeen = products.find((item) => item.id === id)
    
    lastVisited = [...lastVisited, lastSeen];
    lastUniq = getUniqe(lastVisited, "id")
    localStorage.setItem("last-visited", JSON.stringify(lastUniq))

    window.location = "cartDetails.html";
}
// search function
search.addEventListener("keyup", function (e) {
    searching(e.target.value, JSON.parse(localStorage.getItem("shop-products"))||products);
    if (e.target.value.trim() === "" ) {
        drawProducts(products);
    }
})
function searching(title, myArry) {
    let arr = myArry.filter((item) => (item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1) ||  (item.type.toLowerCase().indexOf(title.toLowerCase()) !== -1))
    drawProducts(arr);
    title.trim() === ""
}
// add to favourite functions 
let addedToFav = localStorage.getItem("favoriteItems") ?
    JSON.parse(localStorage.getItem("favoriteItems")) :[];
function addToFavorite(id) {
    if (!userName) {
        window.location = "login.html"
    } else {
        let favorite = products.find((item) => item.id === id);
        
        if (favorite.love === "red") {
            favorite.love = "black";
            if (favorite.love === "black") {
                addedToFav.map((p) => {
                    if (p.id === favorite.id) {
                        p.love = "black"
                    }
                })
            }
        } else {
            favorite.love = "red";
        }

        addedToFav = [...addedToFav, favorite];
        let removed = addedToFav.filter((item) => item.love !== "black");
        let uniqeProducts = getUniqe(removed, "id");
        localStorage.setItem("favoriteItems", JSON.stringify(uniqeProducts));

        localStorage.setItem("shop-products", JSON.stringify(products))
        drawProducts(products);
        drawWatch(products);
        drawDevices(products);
        drawFurneture(products);
        drawOther(products);
    }
}
// get uniqe function
function getUniqe(arr, filterID) {
    let uniqee = arr.map((item) => item[filterID])
    .map((item, i, final) => final.indexOf(item) === i&&i)
    .filter((item) => arr[item])
    .map((item) => arr[item]);

    return uniqee;
}
// filter function
let filtered = document.getElementById("filter");
filtered.addEventListener("change", filteredType)
function filteredType(e) {
    let val = e.target.value;
    let products = localStorage.getItem("shop-products") 
? JSON.parse(localStorage.getItem("shop-products")) : productsMom;

    if (val === "all") {
        drawProducts(products);
    } else {
        products = products.filter((i) => i.type === val);
        drawProducts(products);
    }
}
// save edit id
function editID(id) {
    localStorage.setItem("producEdittId", id);
    window.location = "edit.html";
}
