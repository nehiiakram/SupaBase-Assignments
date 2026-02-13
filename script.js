import supabase from "./supabase.js";

console.log("Connected", supabase);

let loginForm = document.getElementById("loginForm");
let signupForm = document.getElementById("signupForm");
let indicator = document.getElementById("indicator");

let loginBtn = document.getElementById("loginBtn");
let signupBtn = document.getElementById("signupBtn");

// Event Listeners for toggle buttons
loginBtn.addEventListener("click", showLogin);
signupBtn.addEventListener("click", showSignup);

// Event Listeners for form submission
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = loginForm.querySelector('input[name="email"]').value;
  const password = loginForm.querySelector('input[name="password"]').value;
  await handleLogin(email, password);
});

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signupForm.querySelector('input[name="email"]').value;
  const password = signupForm.querySelector('input[name="password"]').value;
  await handleSignup(email, password);
});

// Toggle functions
function showLogin() {
  loginForm.style.display = "flex";
  signupForm.style.display = "none";
  indicator.style.left = "0";
}

function showSignup() {
  signupForm.style.display = "flex";
  loginForm.style.display = "none";
  indicator.style.left = "50%";
}

// Supabase authentication functions
async function handleSignup(email, password) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) {
    console.error("Signup error:", error.message);
    alert("Signup error: " + error.message);
  } else {
    console.log("Signup success:", data);
    alert("Signup successful! Please check your email to confirm.");
  }
}

async function handleLogin(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    console.error("Login error:", error.message);
    alert("Login error: " + error.message);
  } else {
    console.log("Login success:", data);
    alert("Login successful!");
  }
}

// Optional: Check auth state
supabase.auth.onAuthStateChange((event, session) => {
  console.log("Auth event:", event, "Session:", session);
});

// Default view
showLogin();
