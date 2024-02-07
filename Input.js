
function catchValue() {
    var inputData = document.getElementById('input');
    console.log(inputData.value);
    // document.write(inputData.value);
    document.getElementById('head2').innerHTML = inputData.value;
    console.log(inputData.value);
}
 

function selectValue(){
    var gen = document.getElementById('gender');
    console.log(gen.value);
    // document.write(gen.value);
}


// using js we can provide style to text/content;;


var para = document.getElementById('p1');
para.style.color = "teal";
para.style.fontWeight = 'bold';

var para2 = document.querySelectorAll('.p2');
for (var i = 0; i < para2.length; i++) {
    para2[i].style.color = 'red';
    para2[i].style.fontSize = 'bold';

}




























