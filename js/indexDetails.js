// 放大图片
document.querySelector(".banner-img").onclick = function(){
    if(this.className === "banner-img img-scale"){
        this.parentNode.parentNode.className = "";
        this.className = "banner-img ";
    }else{
        this.parentNode.parentNode.className = "img-bg";
        this.className = "banner-img img-scale";
    }
 
}