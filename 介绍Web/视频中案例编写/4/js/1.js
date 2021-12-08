var light = document.getElementById("light");
var flag =false;
light.onclick=function(){
    if(flag){
        light.src="img/off.gif";
        flag=false;
    }else{
        light.src="img/on.gif";
        flag=true;
    }
}
light.onclick;