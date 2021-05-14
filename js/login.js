let email = document.getElementById('email');
let psw = document.getElementById('psw');
let signBtn = document.getElementById('forming');

let Email = localStorage.getItem("email");
let pass = localStorage.getItem("psw");

signBtn.addEventListener("submit", function (e) {
    e.preventDefault();
    if (email.value.trim() === "" || psw.value.trim() === "") {
        alert("u didn't enter anything...")
    } else {
        if (email.value !== Email || psw.value !== pass) {
            alert("your email or pssword is wrong")
            
        } else {
            setTimeout(() => {
                window.location = "index.html"
            }, 500);
        }
    }
})