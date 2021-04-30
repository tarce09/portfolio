window.addEventListener("scroll",function(){
    var headerr=document.querySelector('nav');
    headerr.classList.toggle("sticky",window.scrollY>0);
})
var icon=document.querySelector(".footerlogo")
icon.addEventListener("mouseover",function(){
    icon.style.height="2.5rem";
    icon.style.width="2.5rem";
    icon.style.background.size="150%";
})
icon.addEventListener("mouseout",function(){
    icon.style.height="2rem";
    icon.style.width="2rem";
})



  AOS.init();