let pro1=function(email,password){
return new Promise(function (resolve,reject){
    if(email=="rajan" && password==1234){
        resolve("you are done");
    }
    else{
        reject("wrong email id and password");
    }
});
}
pro1("rajan",1234).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
});


