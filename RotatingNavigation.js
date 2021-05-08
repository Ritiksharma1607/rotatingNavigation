console.log("hello js");
 
const close=document.getElementById("close");
const open=document.getElementById("open");
const container=document.querySelector('.container');

close.addEventListener("click",()=>{
    console.log("close");
    container.classList.remove('showNav');
});


open.addEventListener("click",()=>{
    console.log("open");
    container.classList.add('showNav');
    
});


