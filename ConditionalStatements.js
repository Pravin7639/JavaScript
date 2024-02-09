var num = prompt('Please enter a number')

document.write(`Input : ${num} <br/>`);

if (num == 10) {
    document.write('TEN <br/>');
} else {
    document.write('NOT TEN <br/>');

}


var num1 = (num == 10) ? 'TEN' : 'NOT TEN';
document.write(`${num1} <br/>`);


if (num == 10) {
    document.write('TEN <br/>');
} else if (num == 20) {
    document.write('TWENTY <br/>');
} else if (num == 30) {
    document.write('THIRTY <br/>');
} else {
    document.write('NOT TEN, TWENTY AND THIRTY <br/>');
}


document.write('------------------SWITCH------------------------ <br/>');

switch (parseInt(num)) {
    case 10:
        document.write('TEN <br/>');
        break;
    case 20:
        document.write('TWENTY <br/>');
        break;
    case 30:
        document.write('THIRTY <br/>');
        break;
    default:
        document.write('NOT TEN TWENTY AND THIRTY <br/>');
        break;
}







//Function

function findHighest() {
    var a = (document.getElementById('first').value);
    var b = (document.getElementById('second').value);
    var c = (document.getElementById('third').value);

    if (a == '' || b == '' || c == '') {
        alert('Please enter a valid number');
        return;
    }


    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert('Please enter a valid number');
        return;
    }


    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);



    if (a > b) {
        if (a > c) {
            document.getElementById('highest').value = a;
        } else {
            document.getElementById('highest').value = c;
        }
    } else if (b > a) {
        if (b > c) {
            document.getElementById('highest').value = b;
        } else {
            document.getElementById('highest').value = c;
        }
    } else {
        if (a < c) {
            document.getElementById('highest').value = c;
        } else {
            document.getElementById('highest').value = a;
        }
    }



}








