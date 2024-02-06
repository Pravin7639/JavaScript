
////without form tag
//document.getElementById('submit').addEventListener("click", submitForm);

//function submitForm() {
//    var userName = document.getElementById('username').value;
//    var password = document.getElementById('password').value;

//    console.log(userName, password);

//}




//with form tag

document.querySelector('#loginForm').addEventListener('submit', printValues);


function printValues() {
    event.preventDefault();
    var userName = document.getElementById('username').value;
     var password = document.getElementById('password').value;

    console.log(userName, password);

    document.querySelector('#head1').innerText = userName;
}





