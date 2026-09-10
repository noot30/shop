const loginForm =  document.getElementById("loginForm");
const message = document.getElementById("message");
loginForm.addEventListener('submit', function(e){
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let userName = document.getElementById("username").value;
    let user={
        email: "nootdiea30@gmail.com",
        userName: "nootdiea",
        password: "123456"
    };

    if (email === user.email && password === user.password && userName === user.userName){
        localStorage.setItem("email", email)
        localStorage.setItem("isLoggedIn","true")
        location.href = "./cart.html"
    }else{
        message.innerHTML = ("Email or password is incorrect")
    }
})
document.querySelector(".cartCounter").innerText = cart.length;