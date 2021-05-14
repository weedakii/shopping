let myname = document.getElementById("myname");
let mydesc = document.getElementById("mydesc");
let email = document.getElementById("email");
let myImg = document.querySelector(".my-photo");
let pro = document.querySelector(".weedy");
let myInfo = document.querySelector(".weedy .my-info");
let navBtn = document.querySelector(".my-info #nav-bar");
let navBtn2 = document.getElementById("#nav-bar2");
let productLength = document.querySelector("#products-length span");
let useremail = localStorage.getItem("email");
let userinfo = localStorage.getItem("info") || "there's no thing";
let userimg = localStorage.getItem("img") || "img/user.png";
let products = localStorage.getItem("shop-products") 
? JSON.parse(localStorage.getItem("shop-products")) : productsMom;
let myproducts = products.filter((item) => item.me === "y");

if (userimg === "undefined") {
    userimg = "img/user.png"
}

pro.innerHTML = `
<div class="my-info">
<button id="nav-bar" onclick="closing()"><i class="fas fa-times"></i></button>
    <div class="small-info">
        <img src="${userimg}" alt="photo" class="my-photo" width="80" height="80">
        <div class="disc">
            <span id="myname">${userName}</span>
            <span id="email">${useremail}</span>
        </div>
    </div>
    <div class="pages">
        <a href="#p-1" onclick="closing()"><p>My Profile</p></a>
        <a href="#p-2" onclick="closing()"><p>My Products</p></a>
        <a href="#p-3" onclick="closing()"><p>Last Visited</p></a>
        <a href="#p-4" onclick="closing()"><p>Shop card</p></a>
        <a href="#p-5" onclick="closing()"><p>Favorite card</p></a>
        <p class="logingout" id="p-out" style="cursor: pointer; color: red;">Logout</p>
    </div>
</div>
<div class="my-profile">
<button id="nav-bar2" onclick="opening()"><i class="fas fa-bars"></i></button>
    <div class="profile-page page" style="display: block;">
        <h2 id="p-1">My Profile</h2>
        <img src="${userimg}" alt="photo" class="my-photo" width="200" height="200">
        <span>Name:</span>
        <p id="myname">${userName}</p>
        <span>About me:</span>
        <p id="mydesc">${userinfo}</p>
        <span>Email:</span>
        <p id="email">${useremail}</p>
        <a href="editProfile.html"><button class="btn-g">Edit profile</button></a>
    </div>
    <div class="my-products-page page" id="p-2" style="display: block;">
        <h2 id="products-length">My Products: <span>${myproducts.length}</span></h2>
        <div class="products products4">
            <div class="clear"></div>
        </div>
        <div style="display: none;" class="no-item no-item4">
            
        </div>
    </div>
    <div class="last-visited-page page" style="display: block;">
        <h2 id="p-3">last Visited</h2>
        <div class="products">
            <div class="clear"></div>
        </div>
        <div style="display: none;" class="no-item">
            
        </div>
    </div>
    <div class="shop-card-page page" style="display: block;">
        <h2 id="p-4">Shop Card</h2>
        <div class="products products2">
            <div class="clear"></div>
        </div>
        <div style="display: none;" class="no-item no-item2"></div>
    </div>
    <div class="fav-card-page page" style="display: block;">
        <h2 id="p-5">Favorite Card</h2>
        <div class="products products3">
            <div class="clear"></div>
        </div>
        <div style="display: none;" class="no-item no-item3"></div>
    </div>
    <div class="clear"></div>
</div>
<div class="clear"></div>
`

// logout
let pOut = document.getElementById("p-out")
pOut.addEventListener("click", function () {
    localStorage.removeItem("username")
    setTimeout(() => {
        window.location = "register.html"
    }, 500);
});
// my products page
let myProducting = document.querySelector(".products4");
let noItems4 = document.querySelector(".no-item4");
function drawMy() {
    if ((!JSON.parse(localStorage.getItem("shop-products"))) || JSON.parse(localStorage.getItem("shop-products")).length == 3 ) {
        noItems4.innerHTML = `
            <p>plz fill me with the products</p>
            <a style="display: block;" href="index.html">Back to store</a>`;
        noItems4.style.display = "block"
    }
    let produc = localStorage.getItem("shop-products") ?
    JSON.parse(localStorage.getItem("shop-products")) : productsMom;
    let myCard = produc.filter((item) => item.me === "y")
    myCard.reverse();
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
                    <p><a href="#" class="title ">${item.title}</a><span> -<span/>  ${item.desc} </p>
                    <div class="fav">
                        <span>Tybe: ${item.type}</span>
                    </div>
                </div>
            </div>
        `
        })
        myProducting.innerHTML = myC.join("");
    } else {
        let myC = myCard.map((item) => {
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
            </div>
        `
        })
        myProducting.innerHTML = myC.join("");
    }
    
}
drawMy();
// last visited page
let lastProducts = document.querySelector(".last-visited-page .products");
let noItems = document.querySelector(".last-visited-page .no-item");
function drawVisited() {
    if ((!JSON.parse(localStorage.getItem("last-visited"))) || JSON.parse(localStorage.getItem("last-visited")).length == 0 ) {
        noItems.innerHTML = `
            <p>plz fill me with the products</p>
            <a style="display: block;" href="index.html">Back to store</a>`;
        noItems.style.display = "block"
    }
    let lastVisited = localStorage.getItem("last-visited") ?
    JSON.parse(localStorage.getItem("last-visited")) :[];
    lastVisited.reverse();
    if (lastVisited.length > 4) {
        lastVisited = [
        lastVisited[0],
        lastVisited[1],
        lastVisited[2],
        lastVisited[3]
    ]
    let lastV = lastVisited.map((item) => {
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
        </div>
    `
    })
    lastProducts.innerHTML = lastV.join("");
    } else {
        let lastV = lastVisited.map((item) => {
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
            </div>
        `
        })
        lastProducts.innerHTML = lastV.join("");
    }
    
}
drawVisited();
// shop card page
let cardProducts = document.querySelector(".products2");
let noItems2 = document.querySelector(".no-item2");
function drawCard() {
    if ((!JSON.parse(localStorage.getItem("cartProducts"))) || JSON.parse(localStorage.getItem("cartProducts")).length == 0 ) {
        noItems2.innerHTML = `
            <p>plz fill me with the products</p>
            <a style="display: block;" href="index.html">Back to store</a>`;
        noItems2.style.display = "block"
    }
    let shopCard = localStorage.getItem("cartProducts") ?
    JSON.parse(localStorage.getItem("cartProducts")) :[];
    shopCard.reverse();
    if (shopCard.length > 4) {
        shopCard = [
            shopCard[0],
            shopCard[1],
            shopCard[2],
            shopCard[3],
        ]
        let lastC = shopCard.map((item) => {
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
            </div>
        `
        })
        cardProducts.innerHTML = lastC.join("");
    } else {
        let lastC = shopCard.map((item) => {
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
            </div>
        `
        })
        cardProducts.innerHTML = lastC.join("");
    }
    
}
drawCard();
// favorite card page
let favProducts = document.querySelector(".products3");
let noItems3 = document.querySelector(".no-item3");
function drawFav() {
    if ((!JSON.parse(localStorage.getItem("favoriteItems"))) || JSON.parse(localStorage.getItem("favoriteItems")).length == 0 ) {
        noItems3.innerHTML = `
            <p>plz fill me with the products</p>
            <a style="display: block;" href="index.html">Back to store</a>`;
        noItems3.style.display = "block"
    }
    let favCard = localStorage.getItem("favoriteItems") ?
    JSON.parse(localStorage.getItem("favoriteItems")) :[];
    favCard.reverse();
    if (favCard.length > 4) {
        favCard = [
            favCard[0],
            favCard[1],
            favCard[2],
            favCard[3],
        ]
        let lastC = favCard.map((item) => {
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
            </div>
        `
        })
        favProducts.innerHTML = lastC.join("");
    } else {
        let lastC = favCard.map((item) => {
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
            </div>
        `
        })
        favProducts.innerHTML = lastC.join("");
    }
    
}
drawFav();
// the showing functions

function opening() {
    let myInfo = document.querySelector(".weedy .my-info");
    myInfo.style.display = 'block';
    myInfo.style.width = '100%';
}

function closing() {
    let myInfo = document.querySelector(".weedy .my-info");
    myInfo.style.display = 'none';
    myInfo.style.width = 'auto';
}
