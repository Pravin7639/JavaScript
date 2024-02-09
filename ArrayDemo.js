
//////// First Way To Declare Array

////////var num1 = [];
//////var num1 = [10,20,30];
//////document.write(`num1 size : ${num1.length} <br/>`);



////////2Way To Declare Array

////////var num2 = new Array();
//////var num2 = new Array(10,20,30,40);
//////document.write(`num2 size : ${num2.length}  <br/>`);





////var num1 = [10, 20, 30,'Pawan','Pravin'];      // Adding different type items
////document.write(`num1 size : ${num1.length} <br/>`);

////document.write('************** Orignal Array ********************<br/>')
////for (var i = 0; i < num1.length; i++) {
////    document.write(`${num1[i]} `);
////}
////document.write('<br/>');


////document.write('*************** Adding New Element In Array ************************<br/>');
////num1[5] = 50;
////for (var i = 0; i < num1.length; i++) {
////    document.write(`${num1[i]} `);
////}
////document.write('<br/>');









//var num = [10, 20, 30];
//document.write(`Num Length : ${num.length} <br/>`);
//document.write('**********  All Items ************ <br/>');
//for (var i = 0; i < num.length; i++) {
//    document.write(`${num[i]} `);
//}
//document.write('<br/>');

////Push function

//num.push(40, 50);
//document.write('**********  All Items After num.push(40, 50) ************ <br/>');
//for (var i = 0; i < num.length; i++) {
//    document.write(`${num[i]} `);
//}
//document.write('<br/>');

////Pop function

//var item = num.pop();
//document.write(`num.pop() : ${item} <br/> `);
//document.write('**********  All Items After num.pop() ************ <br/>');
//for (var i = 0; i < num.length; i++) {
//    document.write(`${num[i]} `);
//}
//document.write('<br/>');


////unshift function

//num.unshift(50);
//document.write('**********  All Items After num.unshft(50) ************ <br/>');
//for (var i = 0; i < num.length; i++) {
//    document.write(`${num[i]} `);
//}
//document.write('<br/>');

////shift function

//var num1 = num.shift(50);
//document.write(`num1 : ${num1} <br/>`);
//document.write('**********  All Items After num.shft(50) ************ <br/>');
//for (var i = 0; i < num.length; i++) {
//    document.write(`${num[i]} `);
//}
//document.write('<br/>');




////splice function
//// --> to add item at any position 
////to add multiplle items at any position
////to remove any item from array
//// to remove multiple item from array



////add two items at the begining
//num.splice(0, 0, 5, 6);
//document.write('**********  All Items After num.splice(0, 0, 5, 6) ************ <br/>');
//for (var i = 0; i < num.length; i++) {
//    document.write(`${num[i]} `);
//}
//document.write('<br/>');




////add two item in between
//num.splice(3, 0, 17, 18);
//document.write('**********  All Items After num.splice(3, 0, 17, 18) ************ <br/>');
//for (var i = 0; i < num.length; i++) {
//    document.write(`${num[i]} `);
//}
//document.write('<br/>');



////delete item from 3rd index
//num.splice(3, 2);
//document.write('**********  All Items After num.splice(3, 2) ************ <br/>');
//for (var i = 0; i < num.length; i++) {
//    document.write(`${num[i]} `);
//}
//document.write('<br/>');



////delete and add at samae time
//num.splice(0, 2, 7, 8);
//document.write('**********  All Items After num.splice(0, 2, 7, 8) ************ <br/>');
//for (var i = 0; i < num.length; i++) {
//    document.write(`${num[i]} `);
//}
//document.write('<br/>');







//// to find index or check whether element is present or not.............

//var index = num.indexOf(10);
//document.write(`index : ${index} <br/>`);

//index = num.lastIndexOf(100);
//document.write(`index : ${index} <br/>`);




////to reverse array

//num.reverse();
//document.write('**********  All Items After num.reverse() ************ <br/>');
//for (var i = 0; i < num.length; i++) {
//    document.write(`${num[i]} `);
//}
//document.write('<br/>');



////to sort array
//var alphabates = ['b', 'a', 'c', 'e', 'd'];
//document.write('************* All Alphabets ***************** <br/>');
//for (var i = 0; i < alphabates.length; i++) {
//    document.write(`${alphabates[i]} `);
//}
//document.write('<br/>');


//alphabates.sort();
//document.write('************* All Alphabets after sorting ***************** <br/>');
//for (var i = 0; i < alphabates.length; i++) {
//    document.write(`${alphabates[i]} `);
//}
//document.write('<br/>');




//var digits = [5, 6, 4, 7, 3, 8, 2, 9, 1, 0];
//document.write('**********  All Items After  ************ <br/>');
//for (var i = 0; i < digits.length; i++) {
//    document.write(`${digits[i]} `);
//}
//document.write('<br/>');


//digits.sort();
//document.write('**********  All Items After sort  ************ <br/>');
//for (var i = 0; i < digits.length; i++) {
//    document.write(`${digits[i]} `);
//}
//document.write('<br/>');








//digits = [30, 4, 2, 1, 500, 66, 77];
//digits.sort(copareLogic);
//document.write('**********  All Items After sort  ************ <br/>');
//for (var i = 0; i < digits.length; i++) {
//    document.write(`${digits[i]} `);
//}
//document.write('<br/>');








//function copareLogic(a,b) {
//    if (a > b) {
//        return 1;
//    } else if (b > a) {
//        return -1;
//    } else {
//        return 0;
//    }
//}



//////////////////////////////////////////////////////////////////////////




//var numbers = [1, 2, 3, 4, 5, 6];
//document.write('*** All Items ********  <br/> ');
//for (var i = 0; i < numbers.length; i++) {
//    document.write(`${numbers[i]} `);
//}
//document.write("<br/>");
  

//var result = numbers.filter(filterLogic);
//document.write('*** All Items after filter(filterLogic) ********  <br/> ');
//for (var i = 0; i < result.length; i++) {
//    document.write(`${result[i]} `);
//}
//document.write("<br/>");





//function filterLogic(value, index, array) {
//    if (value % 2 == 0) {
//        return true;
//    } else {
//        return false;
//    }

//}







////var numbers = [1, 4, 3, 2, 2, 4];

////document.write('*** All Items ********  <br/> ');
////for (var i = 0; i < numbers.length; i++) {
////    document.write(`${numbers[i]} `);
////}
////document.write("<br/>");


//////////unique Items

////result = numbers.filter(uniqueLogic);
////document.write('*** All Items after filter ********  <br/> ');
////for (var i = 0; i < result.length; i++) {
////    document.write(`${result[i]} `);
////}
////document.write("<br/>");


//// ////1, 4, 3, 2, 2, 4
////function uniqueLogic(value, index, array) {
////    var i = array.indexOf(value);


////    if (isNaN(value)) {
////        return false;
////    }


////    if (i == index) { 
////        return true;
////    } else {
////        return false;
////    }
////}


///////// 1,4,3,2 
////var r1 =[1,4,3,2];
////document.write('*** All Items after filter(filterLogic) ********  <br/> ');
////for (var i = 0; i < r1.length; i++) {
////    var high = r1[i];
////    if (high < r1[i + 1])
////    {
////        high = r1[i + 1];
        
////    }
////    for (var i = 0; i < r1.length; i++) {
////        document.write(r1(i) + "vk")
////    }

////   // document.write(`${r1[i]} `);
////}
////document.write("<br/>");







//var numbers = [1, 2, 3, 4, 5, 6];
//document.write('*** All Items ********  <br/> ');
//for (var i = 0; i < numbers.length; i++) {
//    document.write(`${numbers[i]} `);
//}
//document.write("<br/>");


//var result = numbers.map(mapLogic);
//document.write('*** All Items after numbers.map() ********  <br/> ');
//for (var i = 0; i < result.length; i++) {
//    document.write(`${result[i]} `);
//}
//document.write("<br/>");



//function mapLogic(value, index, array) {
//    //square of all items

//    return value * value; 

//}



const ab = [1, 2, 3, 4];
ab.push(5);
for (var i = 0; i < ab.length; i++) {
    document.write( `${ab[i]} ` );
}
document.write('<br/>');
ab[1] = 6;
for (var i = 0; i < ab.length; i++) {
    document.write(`${ab[i]} `);
}
document.write('<br/>');


var a = [1, 2];
a = ab;
for (var i = 0; i < a.length; i++) {
    document.write(`${a[i]} `);
}



//const a = 10;
//a = 10;
//document.write(a +" <br/>");

