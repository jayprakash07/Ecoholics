var lusername;
var lpassword;
var rusername = [];
var remail = [];
var rpassword = [];
var counter = 0;
var LoginState = false;

function save(){
    rusername[counter] = document.getElementById("ruser").value;
    remail[counter] = document.getElementById("remail").value;
    rpassword[counter] = document.getElementById("rpassword").value;
    localStorage.setItem("ruser",JSON.stringify(rusername));
    localStorage.setItem("remail",JSON.stringify(remail));
    localStorage.setItem("rpassword",JSON.stringify(rpassword));
    counter++;
}
function getstorage(){
    if(JSON.parse(localStorage.getItem("ruser")!=null)){
        rusername = JSON.parse(localStorage.getItem("ruser"));
        remail = JSON.parse(localStorage.getItem("remail"));
        rpassword = JSON.parse(localStorage.getItem("rpassword"));
        counter = rusername.length;
    }
}
function check(){
    lusername = document.getElementById("luser").value;
    lpassword = document.getElementById("lpassword").value;

    for (var i = 0; i < rusername.length; i++) {
        if (lusername === rusername[i] &&  lpassword === rpassword[i]) {
            window.open("https://ecoholics.netlify.app/rewards");
            LoginState=true;
            break;
        }
        else if (lusername !== rusername[i] ||  lpassword !== rpassword[i]){
            continue;
        }
    }
    if(LoginState == false){
        alert("Login Unsuccessful");
    }
}
