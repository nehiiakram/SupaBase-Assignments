const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const indicator = document.getElementById("indicator");

function showLogin(){
  loginForm.style.display = "flex";
  signupForm.style.display = "none";
  indicator.style.left = "0";
}

function showSignup(){
  signupForm.style.display = "flex";
  loginForm.style.display = "none";
  indicator.style.left = "50%";
}

showLogin(); // default show login
