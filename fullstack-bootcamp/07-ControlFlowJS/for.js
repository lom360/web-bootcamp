// PROBLEM 1
console.log("PRINT ALL NUMBER BETWEEN -10 AND 19");
for(var i = -10; i < 10; i++) {
    console.log(i);
}

// PROBLEM 2
console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40");
for(var i = 10; i <= 40; i+=2){
    console.log(i);
}

// PROBLEM 3
console.log("PRINT ALL ODD NUMBERS BETWEEN 300 AND 333");
for(var i = 300; i <= 333; i++) {
    if(i % 2 !== 0) {
        console.log(i);
    }
}

// PROBLEM 4
console.log("PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");
for(var i = 5; i < 50; i++){
    if((i % 5) == 0 && (i % 3) == 0){
        console.log(i);
    }
}