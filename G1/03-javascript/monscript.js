/*
let a=5
let b=7
let c=a+b
console.log("Hi from external file ....");
console.log(a +  "+"  + b +"=" + c)
console.log(`${a}+${b}=${c}`);
a=parseInt(prompt("Donnez note 1:"));
b=parseInt(prompt("Donnez Note 2: "));
let moy;
if(isNaN(a) || isNaN(b)|| a<0 || a>20 || b<0 || b>20) {
    alert("l'une des notes n'est pas valide!!!");
}   
else {
    moy=(a+b)/2
    alert(`la moyenne est: ${moy}`);
    if(moy<10){
        alert("redouble!!!")
    }
    else if(moy<12){
        alert("Passable")
    }
    else{
        alert("Bien")
    }
}
moy>=10?alert("Module Validé"):alert("Modele Non Validé")
*/
let secret=Math.floor(Math.random()*10+1) 
let rep;
while(rep!=secret){
    rep=parseInt(prompt("Donnez un nombre (0<x<10) :"));
    if(rep<secret) alert("PLUS")
    else if(rep>secret) alert("MOIN")
    else alert("Bingooo!!!")

}