var p = document.getElementById("p")
var u = document.getElementById("u")
var list = {"zyw":20130812,"guest": 1234}
function script(){
    if (u in Object.keys(list)){
        if (p in Object.values(list)){
            location.replace("")
        }else{
            alert("密码不正确！")
        }
    }else{
        alert("用户名未注册！")
    }
}
