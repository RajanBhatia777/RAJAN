var global="i m every where";

function frst(){
    let local="I M LOCAL VARIABLE";
    function scnd(){
        
        let  child="i m the child ";
    }
    
    scnd();
    
}
console.log(global);
console.log(local);
console.log(child);
frst();
console.log(global);