let personne={
    nom: "Gounane",
    age:23,
    direBonjour: function(){
        console.log(`Bonjour : ${this.nom}, ${this.age}`);
    }
}

personne.direBonjour();

function Personne(nom, age){
    this.nom=nom;
    this.age=age;
    this.direBonjour=function(){
        console.log(`Bonjour : ${this.nom}, ${this.age}`);
    }
}

function complexNumber(x,y){
    this.real=x;
    this.imagin=y;
    this.sum=function(x){
        let r={};
        r.real=this.real+x.real;
        r.imagin=this.imagin+x.imagin;
        return r;
    }

    this.print=function(){
        console.log(`${this.real}+${this.imagin}i`)
    }
    
}