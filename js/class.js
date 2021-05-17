window.onload = function(){
    let url = window.location.href;
    let index = sessionStorage.getItem("index");
    if(url.includes("class.html") && !index ){
        changeTab(0);
      
    }else{
        changeTab(index);
    }
    proDetail();

}

// 切换tab
function changeTab(index){
    let tabs = document.getElementById("slider-tab");
    let r_box = document.getElementsByClassName("right-inner");
    r_box[index].style.display="grid";
    tabs.children[index].className = "slider-active f-a-j";
    tabs.children[index].children[0].className = "active-border";
    sessionStorage.removeItem("index")
    for(let i = 0;i< tabs.children.length;i++){
        let tab = tabs.children[i];
        tab.onclick = function(){
            // 清除其他tab的active类
            for(let j = 0;j<this.parentNode.children.length;j++){
                let other_tab = this.parentNode.children[j];
                r_box[j].style.display ="none";
                other_tab.className ="slider-title f-a-j";
                other_tab.children[0].className="";
            }
            // 给当前点击的tab 添加类
            r_box[i].style.display = "grid";
            this.className = "slider-active f-a-j";
            this.children[0].className = "active-border";
        }
    }
}
// 详情跳转 
function proDetail(){
    let pros = document.getElementsByClassName("right-img-box");
    for(const pro of pros){
        pro.onclick = function(){
            window.location.href  = "details.html"
        }
    }
}