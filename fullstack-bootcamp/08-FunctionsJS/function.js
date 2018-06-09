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

// A function that converts kebab-case to snake_case.
function kebabToSnake(str) {
    var count = 0;
    for(var i = 0; i < str.length; i++) {
        if(str[i] == "-") {
            count++;
        }
    }
    while(count >= 0) {
        str = str.replace("-","_");
        count--;
    }
    return str;
}