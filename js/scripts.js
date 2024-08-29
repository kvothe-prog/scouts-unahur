//login

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username=== 'Eugenia' && password==='123') {
        var url = "admin.html?usuario=" + username;
        window.location.href = url;
    } 
    else if (username=== 'todos' && password==='456'){
        var url = "album.html?usuario=" + username;
        window.location.href = url;
    }
    else {
        alert("Credenciales inválidas");
    }
});