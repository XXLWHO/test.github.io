// 上部蓝色背景高度
var arcwidth = document.body.clientWidth;
archeight = (arcwidth *  0.4) + 'px';
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

// 立即咨询
var mask = document.querySelector('.mask')
var pop = document.querySelector('.pop')
var close = document.querySelector('.close')
close.addEventListener('click', function () {
    mask.style.display = 'none'
})
pop.addEventListener('click', function () {
    mask.style.display = 'none'
})
document.querySelector(".up-img").onclick = function () {
    mask.style.display = 'block'
};

