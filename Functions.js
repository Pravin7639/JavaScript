
//simple type function
function add() {
    document.write("Addition is successfully..");
}
add();

document.write("<br/>");

//function without name       /// anonymous function
var p = function () {
    document.write('No Name Function.');
}
p();
document.write("<br/>");


//function with arguments
function sum(a, b) {
    document.write(`${a + b} `);
}
sum(5, 6);
document.write("<br/>");



//CallBack function

function sum1(a, b) {
    return a + b;
}

var z = sum1(5, 5);
document.write(`Sum1 = ${z} `);
document.write("<br/>");

function product(a, b) {
    return a * b;
}
var x = product(z, 5);
document.write(`Sum1 = ${x } `);
document.write("<br/>");

//another examples
function BreakFast(callback, item) {
    callback();
    document.write(`I want to eat ${item} i morning...`);
}
BreakFast(doBrush, "Dosa");
document.write("<br/>");


function doBrush() {
    document.write("Brush your teeth first..");
}
doBrush();
document.write("<br/>");





var sweets = ['Gulab Jamun', 'Kova', 'Laddu', 'kalakand'];

for (var i = 0; i < sweets.length; i++) {
    document.write(`${sweets[i]}  `);
}
document.write("<br/>");


sweets.forEach(function (element, index, array) {
    document.write(`${element}  ${index} ${array} `)
    document.write("<br/>");
    });
document.write("<br/>");
 


/ Map

var box = [];
for (var i = 0; i < sweets.length; i++) {
    box.push(sweets[i]);

}

for (var i = 0; i < box.length; i++) {
    document.write(`${box[i]}  `);
}
document.write('<br/>');


using Map

var res = sweets.map(function (element) {
    return element;
});

for (var i = 0; i < res.length; i++) {
    document.write(`${res[i]}  `);
}
document.write('<br/>');




var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var output = num.map(function (ele) {
    if (ele % 2 == 0) {
        return ele;
    } else {
        return false;
    }
});

for (var i = 0; i < output.length; i++) {
    document.write(`${output[i]} `);
}
document.write('<br/>');




/ reduce ///

var nums = [1, 2, 3, 4];

var sum = 0;
for (var i = 0; i < nums.length; i++) {
    sum += nums[i];
}
document.write(`Sum = ${sum} `);
document.write('<br/>');




without initial value

var out = nums.reduce(function (acc, ele) {
    return acc + ele;
});

document.write(` SUM : ${out} `);
document.write('<br/>');


with initial value

var accumulator = function (acc, ele) {
    return acc + ele;
}

var res = nums.reduce(accumulator, 0);

document.write(`Sum = ${res } `);
document.write('<br/>');



//////// Chaining

var result = nums.map(function (ele) {
    return ele ** 3;
});


for (var i = 0; i < result.length; i++) {
    document.write(`${result[i]}  `);
}
document.write('<br/>');







