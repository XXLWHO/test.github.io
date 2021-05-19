list = [
    [
        "../imgs/图层 20.png",
        "../imgs/图层 21.png",
        "../imgs/图层 22.png"
    ],
    [
        // "09年台湾残障奥运会跳水池",
        "../imgs/图层 23.png",
        "../imgs/图层 24.png",
        "../imgs/图层 25.png"
    ],
    [
        "../imgs/jt.png",
    ],
    [
        "../imgs/gx.png",
    ],
    [
        "../imgs/zh.png",
    ]
]
let id = sessionStorage.getItem("index-id");
if (id) {
    let str = ``;
    switch (id) {
        case "index-1":
            document.querySelector(".title").innerHTML = `
            <img src="../imgs/back.png"
            class="back" alt="" id="back">
            南林中心学校泳池
            `
            for (const i of list[0]) {
                str += `
                <div class="detail-item de-img">
                    <img src="${i}" alt="" >
                </div>
                `
            }
            document.querySelector(".detail-box").innerHTML = str;
            break;
        case "index-2":
            document.querySelector(".title").innerHTML = `
            <img src="../imgs/back.png"
            class="back" alt="" id="back">
            09年台湾残障奥运会跳水池
            `
            for (const i of list[1]) {
                str += `
                <div class="detail-item de-img">
                    <img src="${i}" alt="" >
                </div>
                `
            }
            document.querySelector(".detail-box").innerHTML = str;
            break;
        case "index-j":
            document.querySelector(".title").innerHTML = `
                <img src="../imgs/back.png"
                class="back" alt="" id="back">
                集团版
                `
            for (const i of list[2]) {
                str += `
                    <div class="detail-item ">
                        <img src="${i}" alt="" class="">
                    </div>
                    `
            }
            document.querySelector(".detail-box").innerHTML = str;
            break;
        case "index-x":
            document.querySelector(".title").innerHTML = `
                    <img src="../imgs/back.png"
                    class="back" alt="" id="back">
                    高校版
                    `
            for (const i of list[3]) {
                str += `
                        <div class="detail-item">
                            <img src="${i}" alt="">
                        </div>
                        `
            }
            document.querySelector(".detail-box").innerHTML = str;
            break;
        case "index-z":
            document.querySelector(".title").innerHTML = `
                        <img src="../imgs/back.png"
                        class="back" alt="" id="back">
                        综合版
                        `
            for (const i of list[4]) {
                str += `
                            <div class="detail-item">
                                <img src="${i}" alt="">
                            </div>
                            `
            }
            document.querySelector(".detail-box").innerHTML = str;
            break;

    }
}
// 放大图片
let items = document.getElementsByClassName("detail-item");
for (item of items) {
    item.onclick = function () {
        if (this.className === "img-bg") {
            this.className = "detail-item";
            this.children[0].className = "";
        } else {
            this.className = "img-bg";
            this.children[0].className = " img-scale";
        }
    }
}
