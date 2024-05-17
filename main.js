let signupbtn = document.getElementById("signupbtn");
let signinbtn = document.getElementById("signinbtn");
let username = document.getElementById("namefiled");
let title = document.getElementById("title");


signinbtn.onclick = function (){
    username.style.maxHeight = "0";
    signinbtn.style.boxShadow =" 0 0 10px #eaeaea ,0 0 40px #eaeaea , 0 0 80px #eaeaea";
    title.innerHTML = "Sign In";
    signinbtn.classList.remove("disable");
    signupbtn.classList.add("disable");
}
signupbtn.onclick = function (){
    username.style.maxHeight = "60px";
    signupbtn.style.boxShadow =" 0 0 10px #eaeaea ,0 0 40px #eaeaea , 0 0 80px #eaeaea";
    title.innerHTML = "Sign Up";
    signinbtn.classList.add("disable");
    signupbtn.classList.remove("disable");
}