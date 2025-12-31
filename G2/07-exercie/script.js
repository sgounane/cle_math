let outerDiv=document.querySelector("#outer");
let innerDiv=document.querySelector("#inner");

function outerClick(event){
    console.log("Outer clecked");
    event.stopPropagation();
}

function innerClick(event){
    console.log("Inner clecked");
    event.stopPropagation();
}

function updatePosition(event){
    let mouseX=event.clientX;
    let mouseY=event.clientY;
    innerDiv.style.top=(200 - mouseY-20)+"px";
    innerDiv.style.left=(200 - mouseX-20)+"px";
    console.log(mouseX, mouseY)
}
 function activate(event){
    innerDiv.classList.add("active")
 }

 function deactivate(event){
    innerDiv.classList.remove("active")
 }

outerDiv.addEventListener("click",outerClick)
outerDiv.addEventListener("mousemove",updatePosition)
innerDiv.addEventListener("click",innerClick)
innerDiv.addEventListener("mouseover",activate)
innerDiv.addEventListener("mouseout",deactivate)