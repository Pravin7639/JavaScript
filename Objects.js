//undefined
var name;
document.write(name);
document.write("<br/>");

console.log(name)


  // null
name = null;
document.write(name);
document.write("<br/>");
document.write("<hr/>");

document.write(null == undefined);
document.write("<br/>");

document.write(null === undefined);
document.write("<br/>");

document.write(typeof (null));
document.write("<br/>");

document.write(typeof (undefined));
document.write("<br/>");


var Details = ["Pravin", "P1", true, 45];
document.write(Details);
document.write("<br/>");

document.write(Details[1]);
document.write("<br/>");


document.write(Details[10]);    // o/p --> undefined
document.write("<br/>");

Details[1] = "P45";
document.write(Details);
document.write("<br/>");

Details.push(456);
document.write(Details);
document.write("<br/>");


Details.pop();
document.write(Details);
document.write("<br/>");


//Objects are written in the Key-Value Pair

var studentObj = {
    name : "Pawan",
    age : 22,
    drivingLicence : true,
    section: "A1",
};

//to access the element from studentObj there are two methods
// 1. Dot Notation
document.write(studentObj.age);
document.write("<br/>");

document.write("<hr/>");

document.write(studentObj.city);
document.write("<br/>");

studentObj.age = 25;
document.write(studentObj.age);
document.write("<br/>");

//add any Info
studentObj.roll = 456;
document.write(studentObj.roll);
document.write("<br/>");


document.write(studentObj);
document.write("<br/>");

// 2. Bracket Notation
document.write(studentObj["age"]);
document.write("<br/>");

document.write("<hr/>");

document.write(studentObj["city"]);
document.write("<br/>");

studentObj["age"] = 25;
document.write(studentObj["age"]);
document.write("<br/>");

//add any info
studentObj["Hobby"] = "Cricket ";
document.write(studentObj["Hobby"]);
document.write("<br/>");


document.write(studentObj);
document.write("<br/>");

//delete(studentObj("Hobby"));
//document.write(studentObj);
//document.write("<br/>");


//for (var m in studentObj) {
//    document.write(studentObj(key));
//}


document.write("<hr/>");
document.write("<hr/>");
document.write("<hr/>");





var studentObj11 = {
    name: "Pawan",
    age: 22,
    drivingLicence: true,
    hobiies: ["Cricket", "Football", "Vollyball"],
    address: {
        flatNo: 45,
        appartmentName: "Ram Nivas",
        streetName: "Sita-Ram",
        landMark: ["Near Ram Statue.","Near Police Station."],
    },

};


document.write(studentObj11.name);
document.write("<hr/>");


document.write(studentObj11.address.flatNo);
document.write("<hr/>");


//iterating on studentObj11 using for....in loop














