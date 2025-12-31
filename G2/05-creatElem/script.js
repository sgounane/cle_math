let root=document.querySelector("#root");
let i=0;
let I;
function addBtn(){
    let d=document.createElement("div");
    d.classList.add("btn");
    let txt=document.createTextNode(i);
    d.appendChild(txt);
    root.appendChild(d);
    i++;
    if(i>10) clearInterval(I);
}

I=setInterval(addBtn,1000)