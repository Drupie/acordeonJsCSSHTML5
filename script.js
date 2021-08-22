let btn=document.getElementById("btn");
let block=document.getElementById("block");
let span=document.getElementById("span");
const active=()=>{
    
if(block.className=="block"){
  
    block.setAttribute("class","visible aparience");
    span.setAttribute("class","animation");
}
else{
    block.setAttribute("class","block");
    span.setAttribute("class","btn");
}
// block.setAttribute("class","visible");
// alert("hola");
 
}
btn.addEventListener("click",active);