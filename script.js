const eye=document.getElementById("eye");
const modme=document.getElementById("modme");
const parol=document.getElementById("parol");
const btn=document.getElementById("btn");
const err=document.getElementById("err");

eye.addEventListener("click",()=>{
    if(parol.type=="password"){
        parol.type="text";
    }else{      
        parol.type="password";
    }
});

parol.addEventListener("input",()=>{
    if(modme.value.trim().length>3 && parol.value.trim().length>3){
        btn.disabled=false;
        btn.style.backgroundColor="orangered";
    }else{
        btn.disabled=true;
        btn.style.backgroundColor="#F69E86";
    }
});

btn.addEventListener("click",()=>{
    if(parol.value=="1234" && modme.value=="mars"){
        err.style.display="none";
        localStorage.setItem("parol","1234");
        localStorage.setItem("modme-id","mars");
        window.location.href="./home.html";

    }else{
        err.style.display="block";
    }
})