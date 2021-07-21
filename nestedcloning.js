let user ={
    name:"Rajan",
    sizes:{
        width:50,
        height:60
    }
};
//copy the element ito another object
let clone = Object.assign({},user);
console.log(user.sizes===clone.sizes)
clone.sizes.width=70;
//console.log(user.sizes.width);
console.log(clone.sizes.width)
