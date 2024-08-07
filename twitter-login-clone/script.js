var modal = document.getElementById('id01');
var modal2 = document.getElementById('id02');

// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

var login = document.getElementById('login');
login.onclick=function(event){
    modal.style.display="block";
}

var signup = document.getElementById('signup')
signup.onclick=function(event){
    modal2.style.display="block";
}


