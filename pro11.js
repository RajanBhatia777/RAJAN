function fac(fact){
    let result = 1;
    let n1 = fact-1;
    for(let i = fact; i > 0; i--){
        result = i * n1
        n1 = result
        
    }
    
    return result


}
console.log(fac(4));