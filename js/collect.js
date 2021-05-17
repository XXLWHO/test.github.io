let cancels = document.getElementsByClassName("cancel");
let collects = document.querySelector(".s_content").children;
for(let i = 0;i<cancels.length;i++){
    let cancel = cancels[i];
    cancel.onclick = function(){
        collects[i].remove();
    }
}