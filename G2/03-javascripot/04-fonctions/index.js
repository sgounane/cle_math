function fact(x){
    if(x<0) return NaN;
    let f=1;
    for(let i=2;i<=x;i++){
        f=f*i;
    }
    return f;
}

function comb(n,k){
    if(n<k) return NaN;
    return fact(n)/(fact(k)*fact(n-k)); 
}

let n=parseInt(prompt("Donnez n: "));
let k=parseInt(prompt("Donnez k: "));
let c=comb(n,k);
alert(`C(${n},${k})=${c}`);