// 立即咨询
var d_enquiry = document.querySelector('.d_enquiry')
var mask = document.querySelector('.mask')
var pop = document.querySelector('.pop')
var close = document.querySelector('.close')
var ask = document.querySelector(".msg-box")
d_enquiry.addEventListener('click', function () {
    mask.style.display = 'block'
})
ask.addEventListener('click', function () {
    mask.style.display = 'block'
})
close.addEventListener('click', function () {
    mask.style.display = 'none'
})
pop.addEventListener('click', function () {
    mask.style.display = 'none'
})

// 已收藏
var no = document.querySelector('.no');
var yes = document.querySelector('.yes');
no.addEventListener('click', function () {
    if (no.style.display === 'block') {
        no.style.display = 'none'
        yes.style.display = 'block'
    }
})
yes.addEventListener('click', function () {
    if (yes.style.display === 'block') {
        no.style.display = 'block'
        yes.style.display = 'none'
    }
})

document.querySelector(".add").onclick = function(){
    document.querySelector(".dot").style.display="flex"
}

let flag = sessionStorage.getItem("fromBase");
if(flag){
        mask.style.display = 'block'
        sessionStorage.removeItem("fromBase")
}