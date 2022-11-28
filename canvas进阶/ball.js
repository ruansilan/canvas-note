// 小球运动
function Ball(x,y,radius,color){
    this.x = x || 0;
    this.y = y || 0;
    this.radius = radius || 12;
    this.color = color || "lightgreen";
    this.scaleX = 1;
    this.scaleY = 1;
}
Ball.prototype = {
    stroke:function (cxt){
        cxt.save();
        cxt.strokeStyle = this.color;
        cxt.beginPath();
        cxt.arc(this.x,this.y,this.radius,0,360*Math.PI/180,false);
        cxt.closePath();
        cxt.stroke();
        cxt.restore();
    },
    fill:function (cxt){
        cxt.save();
        cxt.scale(this.scaleX,this.scaleY);
        cxt.fillStyle = this.color;
        cxt.beginPath();
        cxt.arc(this.x,this.y,this.radius,0,360*Math.PI/180,false);
        cxt.closePath();
        cxt.fill();
        cxt.restore();
    }
}