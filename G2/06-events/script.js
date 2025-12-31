let btn=document.querySelector(".btn")

function updateBtn(event){
    console.log("clicked ....");
    btn.classList.toggle("active")
}

//btn.onclick=updateBtn;
btn.addEventListener("click", updateBtn)