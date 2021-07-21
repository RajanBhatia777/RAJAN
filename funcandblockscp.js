// The Difference Between Function and Block Scope in JavaScript
var age = 100;
    
  if (age > 12){
    let dogYears = age * 7;
  //  console.log(`You are ${dogYears} dog years old!`);
    console.log(dogYears)
  }
    console.log(age);

   // In other words, var is not limited to the curly brackets. It is the function which defines the scope.