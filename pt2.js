let str=""
for(let i =1;i<=5;i++){
    for(let j=1;j<=i;j++){
        str+="*"
    }
        str+="\n"
}
for(let i=1;i<=4;i++){
    for(let j=4;j>=i;j--){
        str+="*"
    }
    str+="\n"
}
console.log(str);