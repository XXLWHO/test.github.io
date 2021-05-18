
let slideIndex = 0;
let box = document.getElementsByClassName("banner-box")[0];
let time;
let slides = document.getElementsByClassName("banner");
let dots = document.getElementsByClassName("banner-inv");
function plusSlides(){
    for (let index = 0; index < dots.length; index++) {
        dots[index].onclick = function(){
            clearInterval(time);
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
                dots[i].className = dots[i].className.replace(" inv-active", "");
            }
            slides[index].style.display = "block";
            dots[index].className = "banner-inv inv-active";
            slideIndex = index;
            time = setInterval(showSlides, 3000);
        }
    }
   
}

// 轮播
function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace("inv-active", "");
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className = "banner-inv inv-active";
}


// 视频播放

function playPause() {
    var myVideos = document.getElementsByClassName("video");
    for(const myVideo of myVideos){
        myVideo.addEventListener('playing', function () { //播放中
            clearInterval(time)
        });
        
        myVideo.addEventListener('pause', function () { //暂停开始执行的函数
            time = setInterval(showSlides, 3000);
        });
        
    }
  
}

// 切换
function touch (event,index){
    var event = event || window.event;
    var distance,clientX_start,clientX_end,
        minRange=10;
        this.clientX_start;
        this.direction;
        this.callbackFun=function(){
        if(this.direction=='ltr') {
            clearInterval(time);
            slideIndex=index-1;
            slideIndex = slideIndex < 0 ?slides.length-1:slideIndex;
            console.log(slideIndex);
            time = setInterval(showSlides, 3000);
        }
        else {
            clearInterval(time);
            slideIndex=index+1;
            slideIndex = slideIndex >slides.length-1 ?0:slideIndex;
            time = setInterval(showSlides, 3000);
        }
        }
    switch(event.type){
        case "touchstart":
            clientX_start=event.touches[0].clientX;
            this.clientX_start=clientX_start;
            break;
        case "touchend":
            this.callbackFun();
            break;
        case "touchmove":
            event.preventDefault();
            clientX_end = event.changedTouches[0].clientX;
            //判断移动的方向
            distance=clientX_end-this.clientX_start;
            if(this.clientX_start+minRange<clientX_end) {
                this.direction='ltr';
            }
            else if(this.clientX_start-minRange>clientX_end){
                this.direction='rtl';
            }
            break;
    }  
}
function swiper(){
    var event = event || window.event;
    for(let i = 0;i<slides.length;i++){
        let item = slides[i];
        item.addEventListener('touchstart',function(){
            touch(event,i)
        });
        item.addEventListener('touchmove',function(){
            touch(event,i)
        });
        item.addEventListener('touchend',function(){
            touch(event,i)
        });
        
    }
};
time = setInterval(showSlides, 3000);
plusSlides();
playPause();
swiper();
