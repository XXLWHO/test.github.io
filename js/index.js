    goDetail();
    goClass();
function goDetail(){
    let box = document.getElementsByClassName("go-detail");
    for(const one of box){
        one.onclick = function(){
            window.location = "indexDetail.html"
        }
    }
}
function goClass(){
    let classbox = document.getElementsByClassName("nav-img");
    for(const  i in classbox){
        classbox[i].onclick = function(){
            sessionStorage.setItem("index",i);
            window.location = "class.html";
        }
    }
}
