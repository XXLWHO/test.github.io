var back = document.querySelector('.back')
back.addEventListener('click', function () {
    window.history.go(-1)
})

var file = document.querySelector(".file")
// console.log(file);
var update = document.querySelector('.update')
// console.log(update);

// 上传图片的高度
var updatediv = document.querySelector('.update div').offsetWidth + 'px';
// console.log(document.querySelector('.update div'));
document.querySelector('.update div').style.height = updatediv;
// console.log(updatediv);

file.onchange = function () {

    // 创建节点
    var img = document.createElement("img");
    var fimg = document.createElement('div')
    // 添加图片节点
    update.appendChild(fimg)
    fimg.appendChild(img)

    var fileData = this.files[0]; //这是我们上传的文件     
    // console.log(fileData);

    var reader = new FileReader();
    reader.readAsDataURL(fileData); //异步读取文件内容，结果用data:url的字符串形式表示
    /*当读取操作成功完成时调用*/
    reader.onload = function (e) {
        // console.log(e); //查看对象属性里面有个result属性，属性值，是一大串的base64格式的东西，这个就是我们要的图片
        // console.log(this.result); //取得数据 这里的this指向FileReader（）对象的实例reader
        // image.setAttribute("src", this.result) //赋值给img标签让它显示出来 
        localStorage.setItem('img', this.result)
        // console.log(localStorage.getItem('img'));
        img.src = localStorage.getItem('img')
    }

    //创建取消图片节点
    var cancel = document.createElement('span')
    // 添加节点
    fimg.appendChild(cancel)

    cancel.addEventListener('click', function () {
        cancel.parentNode.parentNode.removeChild(cancel.parentNode);
    })

    // console.log(update.children.length);

    var updatediv = document.querySelector('.update div').offsetWidth + 'px';
    // console.log(document.getElementById("update1").children);
    Array.from(document.getElementById("update1").children).forEach(function (item) {
        item.style.height = updatediv;
    })

}