function login(){
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let checkcode = document.getElementById("checkcode");
    if(username.value=="admin") {
        if(password.value=="666666") {
            if (checkcode.value=="jgmxj")
                location.href = "main.html";
            else
                window.alert("验证码错误！");
        }
        else
            window.alert("密码错误！");
    }
    else
        window.alert("用户名：admin"+"\n"+"密码：666666"+"\n"+"验证码如图所示");
}