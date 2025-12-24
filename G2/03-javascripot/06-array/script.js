
let notes=[12.5,13,16,9,15,18];
console.log("la note num 3 est :"+notes[2]);

let sum=0;
for(let i=0; i<notes.length;i++){
    sum+=notes[i];
}
let moy=sum/notes.length;
console.log("La moyenne est: "+moy)