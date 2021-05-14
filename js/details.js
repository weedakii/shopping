let products = localStorage.getItem("shop-products") 
? JSON.parse(localStorage.getItem("shop-products")) : productsMom;
let productId = JSON.parse(localStorage.getItem("productId"));
let itemDetails = document.querySelector(".item-details")

let detailsID = products.find((item) => item.id === productId)

itemDetails.innerHTML = `
    <div class="item-details-img">
        <img src="${detailsID.imgUrl}" alt="img here">
    </div>
    <div class="item-details-info">
        <h2 style="color: darkgreen;">${detailsID.title}</h2>
        <span style="color: darkred; margin: 10px 0;">price: ${detailsID.price}</span>
        <span>desc: ${detailsID.desc}</span>
        <button class="add-to-card">Buy now</button>
    </div> `
