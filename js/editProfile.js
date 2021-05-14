let inFile = document.getElementById("drop-file");
let inName = document.getElementById("name");
let inmail = document.getElementById("email");
let indesc = document.getElementById("desc");
let btnSubmit = document.getElementById("submit");
let formInfo = document.getElementById("form-info");
let selectValue;
let pathImg;

inName.value = localStorage.getItem("username");
inmail.value = localStorage.getItem("email");
indesc.value = localStorage.getItem("info");

// events
formInfo.addEventListener("submit", createProduct);
inFile.addEventListener("change", getImg);

// form function
function createProduct(e){
    e.preventDefault();
    let newname = inName.value;
    let newemail = inmail.value;
    let newdesc = indesc.value;

    localStorage.setItem("username", newname);
    localStorage.setItem("email", newemail);
    localStorage.setItem("info", newdesc);
    if (pathImg === undefined) {
        pathImg = "img/user.png"
    }
    localStorage.setItem("img", pathImg);
    
    inName.value = "";
    inmail.value = "";
    indesc.value = "";
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
