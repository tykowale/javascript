// Trying out recursion to figure if a number is even or odd...

function oddOrEven(x) {
    if (x == 0) {
        console.log("Your number is even.");
    } else if (x == 1) {
        console.log("Your number is odd.");
    } else {
        oddOrEven(x - 2);
    }
}

oddOrEven(76)