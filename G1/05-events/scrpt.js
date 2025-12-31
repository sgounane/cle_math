let btn1=document.querySelector("#btn1");
let btn2=document.querySelector("#btn2");
let cmd=document.querySelector("#cmd");
let keyboard=document.querySelector("#keyboard")
let input=document.querySelector("#input")

function clickBtn1(event){
    console.log("Checkout clecked ......");
    event.stopPropagation();
}

function clickBtn2(event){
    console.log("Cancel clecked ......");
    event.stopPropagation();
}

function clickCmd(event){
    console.log("CMD clecked ....")
}

function clickBtn(event){
    console.log(event.target.innerText)
    input.innerText+=event.target.innerText
}

//btn1.onclick=clickBtn1;
//btn2.onclick=clickBtn2;

btn1.addEventListener("click",clickBtn1);
btn2.addEventListener("click",clickBtn2);
cmd.addEventListener("click",clickCmd);

for(let i=0; i<10;i++){
    let btn=document.createElement("button")
    btn.setAttribute("id","b"+i);
    btn.classList.add("btn");
    btn.addEventListener("click", clickBtn)

    let txt=document.createTextNode(i)
    btn.appendChild(txt);
    keyboard.appendChild(btn);
}