console.log("Debut")
let a, rep;
a=Math.floor(Math.random()*10)+1; // 1<=a<=10 entier
rep=parseInt(prompt("Donnez un nombre: "));
if(a===rep){
    console.log("Tu as gangné");
}
else{
    console.log("Tu as perdus!!!");
}
console.log("Fin")