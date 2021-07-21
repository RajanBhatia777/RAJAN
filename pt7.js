
let str="";
let i,j,k,t;
for(i=1;i<=5;i++){
    for(j=4;j>=i;j--){
        str +=" "
    }

    for(k=1;k<=i;k++){
        str +="*";
    
    }
    for(t=1;t<=i;t++){
        str +="*"
    }
    str +=" \n"
    
}
for(i=1;i<=5;i++){
    for(j=2;j<=i;j++){
        str +=" "
    }

    for(k=5;k>=i;k--){
        str +="*";
    
    }
    for(t=5;t>=i;t--){
        str +="*"
    }
    str +=" \n"

}
console.log(str);