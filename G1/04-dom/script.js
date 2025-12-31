let titre=document.querySelector("h1");
let timeDiv=document.querySelector("#time")
let I, i=0;
let txt=titre.innerText;
function update(){
    let d=new Date();
    let s=d.getSeconds();
    let m=d.getMinutes();
    let h=d.getHours();
    i++;
    timeDiv.innerText=h+":"+m+":"+ s
    if(titre.classList.contains("active")){
        titre.classList.remove("active");
    }
    else{
        titre.classList.add("active");
    }
}

function stop(){
    clearInterval(I);
}

I=setInterval(update,1000);

//setTimeout(stop, 10000);