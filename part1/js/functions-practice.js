//STEP 1

function halfNumber(no) {
    var dived_no = no/2;
    window.console.log("Half of " + no + " is " + dived_no + ".\n");
    return dived_no;
}
var no = parseFloat(window.prompt("Enter a number to get the half of it:"));

if (!isNaN(no)){
    halfNumber(no);
}
else {
    alert("Enter a valid number to get a result.");
}


/*
//STEP 2
function squareNumber(no) {
    var squared_no = Math.pow(no,2);
    window.console.log("The result of squaring the number " + no + " is " + squared_no + ".\n");
    return squared_no;
}

var no = parseFloat(window.prompt("Enter a number to get its square:"));

if (!isNaN(no)){
    squareNumber(no);
}
else {
    alert("Enter a valid number to get a result.");
}



//STEP 3
function percentOf(no1, no2) {
    var percent_no = (no1/no2) * 100;
    window.console.log(no1 + " is " + percent_no + "% of " + no2 + ".<br>");
    return percent_no;
}

var no1 = parseFloat(window.prompt("Find percentage: Enter the first number:"));
var no2 = parseFloat(window.prompt("Enter the second number:"));

if (!isNaN(no1) && !isNaN(no2)){
    percentOf(no1, no2);
}
else {
    alert("Please enter valid numbers to get a result.");
}




//STEP 4
function findModulus(no1, no2) {
    var mod_no = no2%no1;
    window.console.log(mod_no + " is the modulus of " + no1 + " and " + no2 + ".<br>");
    return mod_no;
}

var no1 = parseFloat(window.prompt("Find Modulid: Enter the first number:"));
var no2 = parseFloat(window.prompt("Enter the second number:"));

if (!isNaN(no1) && !isNaN(no2)){
    findModulus(no1, no2);
}
else {
    alert("Please enter valid numbers to get a result.");
}



//STEP 5
var numbers = [];
var entry, total;
var not_valid = false;

function add_no(no) {
    "use strict";
    numbers.push(no);       
}

function sum(x, y, z, a, b) {
    "use strict";
    return x + y + z + a + b;
}


for (let i = 0; i <5; i++) {
    entry = parseInt(window.prompt("Find Sum: Enter a number:"), 10);

    if (!isNaN(entry)){
        add_no(entry);  
    }
    else {
        not_valid = true;
        alert("Please enter a valid number to get a result.");
        break;
    }
                 
}
            
if (!not_valid){
    total = sum(...numbers);
    window.document.write("The total sum of the following numbers (" + numbers.toString() + ") is " + total); 
}                   
*/







