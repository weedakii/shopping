let userName = document.getElementById('first-name');
let email = document.getElementById('email');
let psw = document.getElementById('psw');
let rpsw = document.getElementById('rpsw');
let reBtn = document.getElementById('forming') || document.getElementById("sign-up");


reBtn.addEventListener('submit', function (e){
    e.preventDefault();
    if (userName.value === "" || email.value === "" || psw.value === "" || rpsw.value === "") {
        alert("plz fill the form...")
    } else {
        if (psw.value !== rpsw.value){
            alert("the second password not the same try again!!")
        } else {
            localStorage.setItem('username', userName.value);
            localStorage.setItem('email', email.value);
            localStorage.setItem('psw', psw.value);

            setTimeout(() => {
                window.location = "login.html"
            }, 1000);
        }
    }
})
// second form
let userName2 = document.getElementById('first-name2');
let email2 = document.getElementById('email2');
let psw2 = document.getElementById('psw2');
let rpsw2 = document.getElementById('rpsw2');
let reBtn2 = document.getElementById('forming2') || document.getElementById("sign-up2");
reBtn2.addEventListener('submit', function (e){
    e.preventDefault();
    if (userName2.value === "" || email2.value === "" || psw2.value === "" || rpsw2.value === "") {
        alert("plz fill the form...")
    } else {
        if (psw2.value !== rpsw2.value){
            alert("the second password not the same try again!!")
        } else {
            localStorage.setItem('username', userName2.value);
            localStorage.setItem('email', email2.value);
            localStorage.setItem('psw', psw2.value);

            setTimeout(() => {
                window.location = "login.html"
            }, 1000);
        }
    }
})
