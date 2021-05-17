
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
            time = setInterval(showSlides, 2000);
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
            time = setInterval(showSlides, 2000);
        });
        
    }
  
}

time = setInterval(showSlides, 2000);
plusSlides();
playPause();