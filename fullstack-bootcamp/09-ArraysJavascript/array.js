// Print array in reverse.
function printReverse(arr) {
    for(i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

// Return true if all elements are identical.
function isUniform(arr) {
    for(i = 1; i < arr.length; i++) {
        // arr[0] is our value to compare to the rest of the list.
        if(arr[0] !== arr[i]) {
            return false;
        }
    }
    return true;
}

// The instructor was expecting us to use loops.
// But I went ahead and coded using recursion.
function sumArray(arr) {
    var sum = arr[0];
    if(arr.length > 1) {
        return sum + sumArray(arr.splice(1));
    }else {
        return sum;
    }
}

// Find highest value in array.
function max(arr) {
    var max = -9999;
    for(var i = 0; i < arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}