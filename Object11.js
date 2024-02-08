// Array

var classsRoom = [
    { Name: 'Pravin', Age : 22 },
{ Name: 'Sachin', Age : 27 },
{ Name : 'Vihhan', Age : 12 },
];

for (var i = 0; i < classsRoom.length; i++) {
    var Info = classsRoom[i];
    //document.write(` Name : ${classsRoom[i].Name}   Age : ${classsRoom[i].Age} `);
    document.write(`Name : ${Info.Name}  Age : ${Info.Age} `);
    
    document.write('<br/>');
}
document.write('<br/>');


var Products = [{ Name: "Speakers", Price : 10000 , Rating: 3 },
    { Name: "Headphones", Price: 3000 , Rating: 4 },
    { Name: "Laptop", Price: 50000 , Rating: 5 },];


var minPrice = Products[0].Price;
for (var i = 0; i < Products.length; i++) {
    if (minPrice > Products[i].Price) {
        minPrice = Products[i].Price;
    }
}
document.write(`Minimum Price : ${minPrice} `);

document.write("<br/>");

for (var i = 0; i < Products.length; i++) {
    if (Products[i].Rating >= 4) {
        document.write(`Name : ${Products[i].Name} Price : ${Products[i].Price} Rating : ${Products[i].Rating}`);
    }
    document.write("<br/>");
}



// Object

var StudentObj = {
    Name: "Pawan",
    Age: 23,
    print: function () {
        document.write("Object Method Inside Object");
    }
}

document.write(`${studentObj.print()}`);



//convert array into Object
var arr1 = ["iphone", "Mac-book", "ipad"];
var arr2 = [50000, 70000, 90000];

var ProductsData = [];

for (var i = 0; i < arr1.length; i++) {
    var obj = {};
    obj.Name = arr1[i];
    obj["price"] = arr2[i];
    ProductsData.push(obj);
}












