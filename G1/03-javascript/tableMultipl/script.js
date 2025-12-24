
for(let n=0; n<=10; n++){
    console.log(`Table de multiplication de: ${n}`);
    for(let i=0; i<=10;i++){
        let c=n*i;
        console.log(`${n}*${i}=${c}`);
    }
}

/*
let n=0;
do{
    console.log(`Table de multiplication de: ${n}`);
    let i=0;
    do{
        let c=n*i;
        console.log(`${n}*${i}=${c}`);
        i=i+1
    }while(i<=10);
    n=n+1;
}while(n<=10)
*/
