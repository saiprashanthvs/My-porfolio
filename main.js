let ham=document.getElementById("ham");
let links=document.querySelector(".links");


ham.addEventListener('click',()=>{
    links.classList.toggle("active");
})
