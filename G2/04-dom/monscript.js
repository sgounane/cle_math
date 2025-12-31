let titre=document.querySelector("h1");
let ok=false;
titre.innerText+="....!"
titre.style.border="1px solid orange";
titre.style.padding="20px";

function update(){
    if(ok==true) titre.classList.toggle("active");
}

function start(){
    console.log("started......")
    ok=true;
}

function stop(){
    console.log("stoped......")
    ok=false;
}

setInterval(update,1000);
setTimeout(start,10000);
setTimeout(stop,20000);