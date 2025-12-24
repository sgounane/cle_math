function fact(x){
   let f=1;
    for(let i=2; i<=x; i++){
        f=f*i;
    } 
    return f;
}

let n=6;
let k=4;

console.log(`C(${n},${k})=${fact(n)/(fact(k)*fact(n-k))}`)

/*

let n=20;
let k=6;
let nf=1;
for(let i=2; i<=n; i++){
    nf=nf*i;
}
console.log(`${n}!=${nf}`)

let kf=1;
for(let i=2; i<=k; i++){
    kf=kf*i;
}
console.log(`${k}!=${kf}`)

let nkf=1
for(let i=2; i<=(n-k); i++){
    nkf=nkf*i;
}
console.log(`${n-k}!=${nkf}`)

let c=nf/(kf*nkf)
console.log(`C(n,k)=${c}`)

*/