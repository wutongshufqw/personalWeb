var second=5;
var time = document.getElementById("time");
function ShowTime(){
    second--;
    if(second==0){
        location.href="https://www.baidu.com"
    }
    time.innerHTML=second+"";
}
setInterval(ShowTime,1000);
