let outer=document.querySelector(".outer");
let inner=document.querySelector(".inner");

function update(event){
    let mousex=event.clientX;
    let mousey=event.clientY;
    inner.style.top=(200-mousey-20)+"px";
    inner.style.left=(200-mousex-20)+"px";
    console.log(mousex, mousey)
} 
function backColor(event){
    inner.style.backgroundColor="red";
}
function noColor(event){
    inner.style.backgroundColor="white";
}
outer.addEventListener("mousemove",update);
inner.addEventListener("mouseover",backColor)
inner.addEventListener("mouseout",noColor)