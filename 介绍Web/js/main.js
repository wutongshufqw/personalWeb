let second;

function img(){
    let img=document.getElementById("img0");
    img.style.border="2px solid #20b39c";
    second=1;
    setInterval(jumppage,500);
}
function jumppage(){
    if(second===0){
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

window.onload= function (){
    let timer;
    let imgList = document.getElementById("imgList");
    let imgArr = document.getElementsByTagName("img");
    let navId = document.getElementById("navId");
    let outer = document.getElementById("outer");
    imgList.style.width=520*(imgArr.length-1)+"px";
    navId.style.left=(outer.offsetWidth-navId.offsetWidth)/2+"px";
    let alla = document.getElementById("navId");
    let allA = alla.children;
    let index = 0;
    allA[index].style.backgroundColor="black";
    for(let i=0; i<allA.length; i++){
        allA[i].num=i;
        allA[i].onclick=function (){
            clearInterval(timer);
            index=this.num;
            setA();
            move(imgList,"left",-520*index,50,function (){
                autoChange();
            });
        };
    }
    function setA(){
        if(index>=imgArr.length-2){
            index=0;
            imgList.style.left="0";
        }
        for(let i=0;i<allA.length;i++){
            allA[i].style.backgroundColor="";
        }
        allA[index].style.backgroundColor="black";
    }

    function autoChange(){
        timer=setInterval(function (){
            index++;
            index%=imgArr.length-1;
            move(imgList,"left",-520*index,20,function(){
                setA();
            });
        },2000);
    }
    autoChange();
    function move(obj,attr,target,speed,callback){
        let current = parseInt(getStyle(obj,attr));
        if(current>target){
            speed=-speed;
        }
        clearInterval(obj.timer);
        obj.timer=setInterval(function (){
            let oldValue = parseInt(getStyle(obj,attr));
            let newValue=oldValue+speed;
            if((speed<0&&newValue<=target)||(speed>0&&newValue>=target)){
                clearInterval(obj.timer)
                callback&&callback();
            }
        },30);
    }
    function getStyle(obj,name){
        if(window.getComputedStyle){
            return getComputedStyle(obj,null)[name];
        }else{
            return obj.currentstyle[name];
        }
    }
}
