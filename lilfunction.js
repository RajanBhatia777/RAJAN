function ep(email,password){
    //let email;
    //let password;
    if(email=="rajan" && password==1234){
        return "you are done"
    }

    else{
        return "wrong email id and password";
    }
}   

 function login(p,e,callback){
     return callback(p,e);
     
    }
console.log(login("ra",12,ep));
