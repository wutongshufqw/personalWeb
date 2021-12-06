var second;
function img(){
    let img=document.getElementById("img0");
    img.style.border="2px solid #20b39c";
    second=1;
    setInterval(jumppage,500);
}
function jumppage(){
    if(second==0){
        let img=document.getElementById("img0");
        img.style.border="2px solid black";
        location.href="../resource/086.jpg";
    }
    second--;
}
function edit(){
    let bt=document.getElementById("edit");
    bt.style.color="green";
    let flag = window.confirm("确认退出吗？");
    if(flag)
        location.href="index.html";
    else
        bt.style.color="palegreen";

}