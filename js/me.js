// 上部蓝色背景高度
var arcwidth = document.body.clientWidth;
archeight = (arcwidth *  0.56) + 'px';
document.querySelector('.arc').style.height = archeight;

var enquiry = document.querySelector('.enquiry')
enquiry.addEventListener('click', function() {
    window.location = 'enquiry.html'
})

var collect = document.querySelector('.collectt')
collect.addEventListener('click', function() {
    window.location = 'collect.html'
})

var share = document.querySelector('.sharee')
share.addEventListener('click', function() {
    window.location = 'share.html'
})

var about = document.querySelector('.aboutt')
about.addEventListener('click', function() {
    window.location = 'about.html'
})

var feedback = document.querySelector('.feedbackk')
feedback.addEventListener('click', function() {
    window.location = 'feedback.html'
})

var cooperation = document.querySelector('.cooperationn')
cooperation.addEventListener('click', function() {
    window.location = 'cooperation.html'
})
document.querySelector(".up-img").onclick = function () {
    sessionStorage.setItem("fromBase",true)
    window.location = "details.html";
};
