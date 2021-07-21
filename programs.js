
// Program 1

// var num1 = 10;
// var num2 = 20;
// console.log(num1+num2)


// Program 2 

// var a = 10;
// var b = 20
// var c
// c = a
// a = b
// b = c
// console.log(a,b)

// program 3

// var a=10;
// var b=20;
// a = a-b;
// b = b + a
// a = b - a
// console.log(a,b)

// var a =14;
// var b =56;
// b=b-a;
// a=a+b;
// console.log(a,b)

// function checkPositiveNegative(num){
//     if(num < 0){
//         console.log("number is negative")
//     }
//     if(num == 0){
//         console.log("number is zero")
//     }
//     if(num > 0){
//         console.log("number is positive")
//     }
// }

// checkPositiveNegative(0)
// var a=8
// if(a%2==0){
//     console.log("even")

// }
// else
// {
//     console.log("odd")
// }

// function largest(n1,n2,n3){
//     if(n1>n2 && n1>n3){
//         return (`${n1} is greater`)
//     }
//     else if(n2>n3){
//         return (`${n2} is greater`)
//     }else{
//         return (`${n3} is greater`)

//     }
    


// }
// console.log(largest(1,2,5))


function p(n1){
    var a=n1;
    var temp;
    var res=0;
    while(n1>0){
        temp=parseInt( n1%10);
        res=parseInt (res*10+temp);
        n1=parseInt( n1/10);      
    }
    if(res==a){
        console.log("palindrome")
        console.log(`${res}`)
    }
    else{
        console.log("not")
    }
    
}
p(1234321)