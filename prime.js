let num=13;
let count=2;
for(let i=1;i<=num;i++){
        if(num%i==0){
            count++;
        }
    }
    if(count<=2){
        console.log("Yes");
    }
    else{
        console.log("No");
    }