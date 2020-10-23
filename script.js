var circle=document.getElementById("circle");
var Up=document.getElementById("UpBtn");
var Down=document.getElementById("DownBtn");

var RotateValue=circle.style.transform;

var rotateSum;
Up.onclick=function(){
    rotateSum=RotateValue+"rotate(-90deg)";
    rotate();
}
Down.onclick=function(){
    rotateSum=RotateValue+"rotate(90deg)";
    rotate();
}

function rotate(){
    circle.style.transform=rotateSum;
    RotateValue=rotateSum;
}

