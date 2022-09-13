let str="naman"
let N=5;
let org_str="";
for(i=0;i<=N-1;i--){
        org_str+=(str[i])
    }
    
    let new_str="";
    for(i=N-1;i>=0;i--){
        new_str+=(str[i])
    }
    
    if(org_str==new_str){
        console.log("Yes");
    }
    else{
        console.log("No");
    }