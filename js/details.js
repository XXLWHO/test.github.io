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

document.querySelector(".add").onclick = function () {
    document.querySelector(".dot").style.display = "flex"
}

let flag = sessionStorage.getItem("fromBase");
if (flag) {
    mask.style.display = 'block'
    sessionStorage.removeItem("fromBase")
}
// 放大图片
document.querySelector(".banner-img").onclick = function () {
    if (this.className === "banner-img img-scale") {
        this.parentNode.parentNode.className = "";
        this.className = "banner-img ";
    } else {
        this.parentNode.parentNode.className = "img-bg";
        this.className = "banner-img img-scale";
    }

}
let str = ``;
list = [
    [
        "../video/mpgm.mp4",
        "../imgs/1-1.png",
        "门票购买"
    ],
    [
        "../video/sjyy.mp4",
        "../imgs/1-1.png",
        "私教预约"
    ],
    [
        "../video/cdxd.mp4",
        "../imgs/1-3.png",
        "场地预定"
    ],
    [
        "../video/hygk.mp4",
        "../imgs/1-1.png",
        "会员办卡"
    ],
    [
        "../video/pxbb.mp4",
        "../imgs/1-5.png",
        "培训报班"
    ],
    [
        "../video/spfw.mp4",
        "../imgs/1-6.png",
        "商品服务"
    ],
    [
        "../video/wrtc.mp4",
        "../imgs/2-1.png",
        "无人停车场"
    ],
    [
        "../imgs/ycjk.png",
        "../imgs/2-2.png",
        "远程监控巡场"
    ],
    [
        "../imgs/cgzj.png",
        "../imgs/3-1.png",
       " 场馆闸机"
    ],
    [
        "../video/zzsp.mp4",
        "../imgs/3-2.png",
      "  自助手牌机"
    ],
    [
        "../imgs/zzsp.png",
        "../imgs/3-2.png",
      "  自助售票机"
    ],
    [
        "../video/dk.mp4",
        "../imgs/4-1.png",
        "灯控设备"
    ],
    [
        "../imgs/sk.png",
        "../imgs/4-2.png",
        "水控设备"
    ],
    [
        "../imgs/gy.png",
        "../imgs/4-3.png",
        "更衣柜"
    ],
    [
        "../imgs/yc.png",
        "../imgs/5-1.png",
        "游泳池"
    ],
    [
        "../imgs/lqj.png",
        "../imgs/5-2.png",
       " 篮球架"
    ],
]

let class_id = sessionStorage.getItem("class-id");
let one =list[class_id-1];
let len = one.length;
console.log(len);
if(one[0].includes("mp4")){
    str = `
    <video   class="vid" controls="controls" style="width:50%;height: 10.5em;object-fit: fill;margin:0 auto">
    <source src="${one[0]}" type="video/mp4">
</video>
    `
}else{
    str = `
    <img src="${one[0]}" alt="">
    `
}

document.querySelector(".title").innerHTML = one[len-1];
document.querySelector(".banner").innerHTML = str;
document.querySelector(".detail").innerHTML = `    <img 
src="${one[1]}" alt="">
` 
