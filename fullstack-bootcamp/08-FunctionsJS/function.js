// Write a function that determines if a number is even with true/false.
function isEven(num) {
    if(num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
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
    let answer = num;
    while(num > 1) {
        answer = answer * (num - 1);
        num--;
    }
    return answer;
}