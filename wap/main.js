const sign_btn = document.querySelector(".sign");
const sign_list = document.querySelector(".sign__list");
sign_btn.onmouseover = signopen;
sign_btn.onmouseout = signout;

function signopen(){
   sign_list.style.display = "block";
   sign_list.style.animation ="1s ease";
}

function signout(){
   document.querySelector(".sign__list").style.display ="none";
}
