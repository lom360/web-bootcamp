// 'var' vs 'let'
// The difference between the two is scope.

// The scope of 'var' is set to globally or the nearest function.
// That means in the example below the variable
// 'i' within the console.log outside the "for loop"
// will be the same as the the variable 'i' inside
// the for loop.

// The scope of 'let' is set to only the block statement or within
// a parenthesis or curly braces. That means in the example below.
// If the 'let' was used to initialized the variable 'i' instead
// of 'var'. Then the variable 'i' outside the "for loop" within
// the console.log will not be a valid variable.

// The typescript compiler is actually very intelligent. It's because even
// if the typescript file has an error it can still compile valid javascript code.
// For example if we did use 'let' instead of 'var'. Compiling the code
// will still give us valid javascript.

function doSomething() {
    for(var i = 0; i < 5; i++){
        console.log(i);
    }
    console.log('Finally: ' + i);
}

doSomething();