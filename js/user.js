let signInfo = document.querySelector(".sign-info");
let userInfo = document.querySelector(".user-info");
let iconBtn = document.querySelector(".nav-i");
let user = document.querySelector("#user");
let user2 = document.querySelector("#user2");
let logOut = document.querySelector(".logout")

let userName = localStorage.getItem("username");
// show the user information
if (userName) {
    user.innerHTML = userName;
    user2.innerHTML = userName;
    signInfo.style.display = "none";
    userInfo.style.display = "flex";
};
// logout
logOut.addEventListener("click", function () {
    localStorage.removeItem("username")
    setTimeout(() => {
        window.location = "register.html"
    }, 500);
});
// user info small
iconBtn.addEventListener("click", disopen)

function disopen() {
    let userInfoSmall = document.querySelector(".user-info-small");
    if (userInfoSmall.style.display === "block") {
        userInfoSmall.style.display = "none"
    } else {
        userInfoSmall.style.display = "block"
    }
}