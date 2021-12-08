var num = 1;
function fun(){
    var img = document.getElementById("img");
    num++;
    if(num>3) num=1;
    img.src = "img/banner_"+num+".jpg"
}
setInterval(fun,3000);