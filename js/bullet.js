// 函数用于创建新的弹幕
function createDanmaku(text) {
    // Create a new danmaku element
    var danmaku = document.createElement("div");
    danmaku.classList.add("danmaku");
    danmaku.innerText = text;

    // 设置danmaku位置到容器的右边缘
    danmaku.style.right = "0";

    // 设置danmaku顶部位置为0到容器高度之间的随机值
    var container = document.querySelector(".danmaku-container");
    danmaku.style.top = Math.floor(Math.random() * container.offsetHeight) + "px";

    // 添加danmaku到容器
    container.appendChild(danmaku);

    // 将danmaku动画到容器的左边缘
    var animationDuration = 10000; // 10 秒
    var danmakuWidth = danmaku.offsetWidth;
    var containerWidth = container.offsetWidth;
    var distance = containerWidth + danmakuWidth;
    var duration = (distance / containerWidth) * animationDuration;
    danmaku.style.transition = "transform " + duration + "ms linear";
    danmaku.style.transform = "translateX(-" + distance + "px)";

    // 动画完成后从容器中移除弹幕
    setTimeout(function() {
        danmaku.remove();
    }, duration);
}

// 函数生成随机弹幕文本
function generateDanmakuText() {
    var texts = ["周作民故居，历史韵味浓厚，建筑风格独特", "武康路171弄1号，感受中西合璧的建筑之美", "故居布局整齐，充满旧上海的气息。", "漫步在武康路，探寻周作民故居的故事", "周作民故居，见证了一段辉煌的历史", "古典与现代交融，周作民故居值得一看", "故居的石狮寓意深刻，令人感慨","建筑装饰精美，展现了中西建筑的精髓","时光荏苒，周作民故居仍魅力不减","陈丕显、魏文伯也曾居于此，历史意义重大","故居游览，受益匪浅","古宅宁静幽雅，让人流连忘返"," 感受周作民的生活氛围，了解其传奇一生"," 武康路上的明珠，周作民故居","了解金融巨子的一生","感受上海滩的风云变幻"];
    var index = Math.floor(Math.random() * texts.length);
    return texts[index];
}

// 每2秒生成一个新的弹幕
setInterval(function() {
    var text = generateDanmakuText();
    createDanmaku(text);
}, 1000);