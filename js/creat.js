let inFile = document.getElementById("drop-file");
let inName = document.getElementById("name");
let inPrice = document.getElementById("price");
let inDesc = document.getElementById("desc");
let btnSubmit = document.getElementById("submit");
let formInfo = document.getElementById("form-info");
let selectType = document.getElementById("product-type");
let selectValue;
let pathImg;

// select function
selectType.addEventListener("change", getSelectValue);
formInfo.addEventListener("submit", createProduct);
inFile.addEventListener("change", getImg);

function getSelectValue(e) {
    selectValue = e.target.value;
}

// form function
function createProduct(e) {
    e.preventDefault();
    let allproducts = localStorage.getItem("shop-products") 
    ? JSON.parse(localStorage.getItem("shop-products")) : productsMom;
    let nameValue = inName.value.trim();
    let priceValue = inPrice.value.trim();
    let descValue = inDesc.value.trim();
    if (userName) {
        if (nameValue && priceValue && descValue && selectValue) {
            let obj = {
                id: allproducts.length + 1,
                title: nameValue,
                desc: descValue,
                type: selectValue,
                imgUrl: pathImg,
                price: priceValue,
                qty: 1,
                me: "y",
            }
            let newProducts = [...allproducts, obj]
            localStorage.setItem("shop-products", JSON.stringify(newProducts));
        
            inName.value = "";
            inDesc.value = "";
            inPrice.value = "";
            selectType.value = "";
        } else {
            alert("plz fill all data")
        }
    } else {
        alert("you aren't login || plz sign in first")
    }
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
