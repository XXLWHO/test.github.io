document.querySelector(".up-img").onclick = function () {
    sessionStorage.setItem("fromBase",true)
    window.location = "details.html";
};

console.log(document.getElementsByClassName("back"));
document.querySelector('.back').onclick = function () {
    window.history.go(-1)
};
