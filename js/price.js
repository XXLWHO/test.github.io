    dragAsk();
    getCheck();
    del();
function dragAsk(){
    document.querySelector(".btn-b").onclick = function () {
        window.location = "details.html";
    };
}
// 获取check数量
function getCheck(){
    let count = 0;
    let c_arr = document.getElementsByClassName("cke");
    let c_label = document.getElementsByClassName("choose");
    let all_label = document.getElementsByClassName("all-choose");
    let flag =true
    for(let i = 0;i<c_label.length;i++){
        let obj =c_label[i];
        obj.onclick =function(){
            if(this.control.checked === false){
                count++;
            }else{
                count--
            }
            if(count === c_arr.length){
                document.getElementById("allcount").checked = true;
                flag=false;
            }else{
                document.getElementById("allcount").checked = false;
                flag=true;
            }
            document.getElementById("count-text").innerText  = `已选(${count})`
        }
    }
  
    all_label[0].onclick =function(){
        if(flag){
            for(let i = 0;i<c_label.length;i++){
                c_arr[i].checked = true;
                count = c_arr.length;
            }
        }else{
            for(let i = 0;i<c_label.length;i++){
                c_arr[i].checked = false;
                count = 0;
            }
        }
        flag = !flag;
        document.getElementById("count-text").innerText  = `已选(${count})`
    }
    let del_btn = document.getElementById("delete");
    del_btn.onclick =function(){
        let list = document.getElementsByClassName("info-list");
        for(let i = c_label.length-1;i>=0;i--){
            if(c_arr[i].checked === true){
                console.log(i);
                list[i].remove();
                --count;
            }
        }
        if(list.length === 0){
           let show = document.getElementsByClassName("info-null");
           show[0].style.display= "block";
           document.getElementById("delete").style.display="none";
           document.getElementById("btn-b").style.display="block";
           document.getElementById("btn-b").setAttribute("class", " btn-b disable")
           document.getElementById("delImg").parentNode.children[1].style.display="none"
           document.getElementById("delImg").style.display="block";
        }
        document.getElementById("allcount").checked = false;
        document.getElementById("count-text").innerText  = `已选(${count})`
    }

}
// 删除 按钮的显示
function del(){
    let del_obj = document.getElementById("delImg");
    del_obj.onclick=function(){
            document.getElementById("delete").style.display="block";
            document.getElementById("btn-b").style.display="none";
            del_obj.parentNode.children[1].style.display="block"
            del_obj.style.display="none";
    }
    document.getElementById("delFin").onclick =function(){
            document.getElementById("delete").style.display="none";
            document.getElementById("btn-b").style.display="block";
            del_obj.parentNode.children[1].style.display="none"
            del_obj.style.display="block";
    }
}