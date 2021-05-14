let inFile = document.getElementById("drop-file");
let inName = document.getElementById("name");
let inPrice = document.getElementById("price");
let inDesc = document.getElementById("desc");
let btnSubmit = document.getElementById("submit");
let formInfo = document.getElementById("form-info");
let selectType = document.getElementById("product-type");
let selectValue;
let pathImg;
let products = JSON.parse(localStorage.getItem("shop-products"));
let editID = JSON.parse(localStorage.getItem("producEdittId"));
let getProduct = products.find((item) => item.id === editID);

inName.value = getProduct.title;
inPrice.value = getProduct.price;
inDesc.value = getProduct.desc;
selectType.value = getProduct.type;
pathImg = getProduct.imgUrl;

// events
selectType.addEventListener("change", getSelectValue);
formInfo.addEventListener("submit", createProduct);
inFile.addEventListener("change", getImg);

// select function
function getSelectValue(e){
    selectValue = e.target.value
}

// form function
function createProduct(e){
    e.preventDefault();
    getProduct.title = inName.value.trim();
    getProduct.price = inPrice.value.trim();
    getProduct.desc = inDesc.value.trim();
    getProduct.type = selectType.value.trim();
    getProduct.imgUrl = pathImg;
    
    localStorage.setItem("shop-products", JSON.stringify(products));

    inName.value = "";
    inDesc.value = "";
    inPrice.value = "";
    selectType.value = "";
}

function getImg() {
    let file = this.files[0]
    
    if (file.type !== "image/jpeg" && file.type !== "image/png") {
        alert(" type not support \n plz make sure it's img");
        inFile.value = "";
        return;
    }
    
    if (file.size > 2*1024*1024) {
        alert("the size is too large\n make sure it's less than 2mg");
        inFile.value = "";
        return;
    }
    getImgURL(file)
}

function getImgURL(file) {
    let reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = function () {
        pathImg = reader.result
    }
}
