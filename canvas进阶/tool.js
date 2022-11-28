window.tool = {};
// 获取鼠标位置
window.tool.getMouse = function (element){
    let mouse = { x:0,y:0 };
    element.addEventListener("mousemove",function (e){
        let x,y;
        const event = e || window.event;
        if(event.pageX||event.pageY){
            x = event.pageX;
            y = event.pageY;
        }else{
            x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        x-=element.offsetLeft;
        y-=element.offsetTop;
        mouse.x = x;
        mouse.y = y;
    })
    return mouse;
};
// 获取按键方向
window.tool.getKey = function (){
    let key = {};
    window.addEventListener("keydown", function (e) {
        if (e.keyCode == 38 || e.keyCode == 87) {
            key.direction = "up";
        } else if (e.keyCode == 39 || e.keyCode == 68) {
            key.direction = "right";
        } else if (e.keyCode == 40 || e.keyCode == 83) {
            key.direction = "down";
        } else if (e.keyCode == 37 || e.keyCode == 65) {
            key.direction = "left";
        } else {
            key.direction = "";
        }
    }, false);
    return key;
}
// 画小球
window.tool.drawBall = function (cxt,x,y){
    cxt.beginPath();
    cxt.arc(x,y,20,0,2*Math.PI,true);
    cxt.closePath();
    cxt.fillStyle = "pink";
    cxt.fill();
}
// 获取随机颜色
window.tool.getrandomColor = function (){
    return '#' + (function (color){
        console.log(color += '0123456789abcdef'[Math.floor(Math.random() * 16)]);
        return (color += '0123456789abcdef'[Math.floor(Math.random()*16)])
                && (color.length == 6) ? color : arguments.callee(color)
    })('')
}
window.tool.getrandomColor();