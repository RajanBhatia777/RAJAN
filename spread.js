//let x=[1,2,3,4]

//let y=[5,6,7,8]
//let z=[9,0,1,2,3,4,5,6]
//console.log(...x,...y);


//console.log(x.concat(...y));


//console.log(...x,...y,...z)


//through function

// let m =[1,2,3,7]
// let spread =function(...arg){

//     console.log(arg);
// }
// spread(...m);


// let arr=[5,5,10];

// function sprd(...arg){
    
    
//     let sum=0;
//     for(let i in arg){

//         sum=arg[i]+sum;
//     }
    
//     console.log(sum);

// }



// sprd(...arr);


// let arr=[1,3,5,6];

// console.log([...arr]);


// function sprd(a,b,c){
//     console.log(a+b+c);

// }
// let arr=[2,4,5]
// sprd(...arr);



// let arr=[3,3,3,3,3,3]

// let sprd=function(...arg) {
    
//     let sum =0;
//     for(let i in arg){
//         sum=sum+arg[i];
//     }
//     console.log(sum)

// }
// sprd(...arr);

let arr1=[1,2,3,4]
let arr2=[...arr1,5,6,7];
console.log(arr2);
console.log(arr1);