// function fn1(x1){
//     console.log("i m the function 1st");
// }

// function fn2(x2){
//     console.log('i m the function 2nd');
//     x2();
// }
// fn2(fn1);
// function add(a,b){
//     return a+b;
// }
// function multiply(a,b){
//     return a*b;
// }
// function methd(num1,num2,callback){

//     return callback(num1,num2);
// }
// console.log(methd(3,4,multiply));

function greek(callback){
    let a=101
    callback(a);
}
greek((a)=>{
    console.log("this is first function "+a)
}
);