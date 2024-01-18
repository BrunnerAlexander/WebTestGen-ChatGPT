let registeredUsers = [{ username: "user", password: "pass" }];

function showRegistration() {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("registration-section").style.display = "block";
}

function register() {
    const newUsername = document.getElementById("new-username").value;
    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const registrationError = document.getElementById("registration-error");

    if (newPassword !== confirmPassword) {
        registrationError.textContent = "Passwords do not match.";
        registrationError.style.display = "block";
        return;
    }

    const userExists = registeredUsers.some(user => user.username === newUsername);
    if (userExists) {
        registrationError.textContent = "Username already taken.";
        registrationError.style.display = "block";
        return;
    }

    registeredUsers.push({ username: newUsername, password: newPassword });
    alert("Registration successful. Please login.");
    document.getElementById("registration-section").style.display = "none";
    document.getElementById("login-section").style.display = "block";
}

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginError = document.getElementById("login-error");

    const isAuthenticated = registeredUsers.some(user => user.username === username && user.password === password);
    
    if (isAuthenticated) {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("product-section").style.display = "block";
    } else {
        loginError.style.display = "block";
    }
}

function logout() {
    document.getElementById("product-section").style.display = "none";
    document.getElementById("login-section").style.display = "block";
    clearForm();
}

function clearForm() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("login-error").style.display = "none";
}

function addToCart(product) {
    const cart = document.getElementById("cart");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(product));
    cart.appendChild(li);
}
