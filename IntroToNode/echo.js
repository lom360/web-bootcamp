// Node Exercise

// Using the command line, create a file "echo.js"
// Inside the file, write a fucntion named echo that takes 2 arguments: a string and a number
// It should print out the string, number number of times.


function echo(str, num) {
    for(var i = 1; i <= num; i++){
        console.log(str);
    }
}

echo("Echo!!!", 10); // Should print "Echo" 10 times.
echo("Tater Tots", 3); // Should print "Tater Tots" 3 times.