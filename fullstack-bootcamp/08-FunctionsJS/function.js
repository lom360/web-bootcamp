// Write a function that determines if a number is even with true/false.
function isEven(num) {
    // if(num % 2 === 0) {
    //     return true;
    // }
    // else {
    //     return false;
    // }

    // Since we are returning true when the statment is true
    // and returning false when the statement is false,
    // then we can go ahead and just return the boolean logic
    // to shorten the code.
    return num % 2 === 0;
}


// Create a function that evaluates factorial.
function factorial(num) {
    if(num === 0) {
        return 1;
    }else {
        return num * factorial(num - 1);
    }
}

// This is another function to evaluate factorial. It's just in a loop version.
function facts(num) {
    // Define a result variable
    let result = 1;

    // Calculate factorial and store value in result
    while(1 < num) {
        result = result * num;
        num--;
    }

    // Return the result variable
    return result;
}

// A function that converts kebab-case to snake_case.
function kebabToSnake(str) {
    // My solution below
    // var count = 0;
    // for(var i = 0; i < str.length; i++) {
    //     if(str[i] == "-") {
    //         count++;
    //     }
    // }
    // while(count > 0) {
    //     str = str.replace("-","_");
    //     count--;
    // }
    // return str;

    // This is the instructor's solution
    var newStr = str.replace(/-/g, "_");
    return newStr;
}