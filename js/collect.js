let cancels = document.getElementsByClassName("cancel");
let collects = document.getElementsByClassName("s_content")[0].children;
for(let i = 0;i<collects.length;i++){
    let cancel = cancels[i];
    cancel.onclick = function(){
        collects[i].style.display ="none"
    }
}