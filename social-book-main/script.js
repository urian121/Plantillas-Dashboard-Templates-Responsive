let settingsmenu=document.querySelector(".setting-menu");


function settingsMenuToggle(){
    settingsmenu.classList.toggle("setting-menu-height")
}

let darkBtn=document.getElementById("dark-btn");
darkBtn.onclick=function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
}