
let str="";
let i,j,k;
for(i=1;i<=5;i++){
    for(j=4;j>=i;j--){
        str+=" "
    }

    for(k=1;k<=i;k++){
        str+="*";
    }
    str+="\n"
}
console.log(str)