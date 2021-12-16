var validator = require("validator");

var em = validator.isEmail("Something@gmail.com");
var em1 = validator.isEmpty("");

if (em) {
    console.log("Welcome");
}
else {
    console.log("Bye Bye")
}

if (em1) {
    console.log("Yes");
}
else {
    console.log("No")
}

function test(a, b, c) {
    var total
    if (c=="+") {
        total = a + b
    }
    else if (c=="-") {        
        total = a - b
    }
    else if (c=="*") {        
        total = a * b
    }
    else if (c=="/") {        
        total = a / b
    }
    console.log(total)
}

test(10, 5, "+");
test(10, 5, "-");
test(10, 5, "*");
test(10, 5, "/");


function check(x, y, z) {
    var sum = x+y+z
    if (sum%2==0) {
        console.log("Even")
    }
    else {        
        console.log("Odd")
    }
}
check(1,2,3);


function m1 () {
    var x = 2
    var y = 5
    var total = x + y
    return total

}

function m2 () {
    if (m1()%2==0) {
        console.log("Even")
    }
    else {        
        console.log("Odd")
    }
}
m2();
