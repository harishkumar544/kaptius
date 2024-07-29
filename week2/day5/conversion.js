
var str = prompt("Enter string to convert to number ");
var num = parseInt(prompt("Enter number to convert to string "));
var bo = prompt("Enter boolean (true/false) to convert to string ");
var n1 = parseInt(prompt("Enter number to convert to boolean "));


function convertStringToNumber(str) {
    var n = parseFloat(str);
    console.log("\nConverted string to number is " + n);
    console.log("Type: " + typeof(n));
}

function convertNumberToString(num) {
    var a = String(num);
    console.log("\nConverted number to string is " + a);
    console.log("Type: " + typeof(a));
}

function convertBooleanToString(bo) {
    var b = String(bo);
    console.log("\nConverted boolean to string is " + b);
    console.log("Type: " + typeof(b));
}

function convertNumberToBoolean(n1) {
    var c = Boolean(n1);
    console.log("\nConverted number to boolean is " + c);
    console.log("Type: " + typeof(c));
}

convertStringToNumber(str);
convertNumberToString(num);
convertBooleanToString(bo);
convertNumberToBoolean(n1);
