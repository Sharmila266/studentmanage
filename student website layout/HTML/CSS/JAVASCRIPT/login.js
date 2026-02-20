// Login Form Validation
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("loginForm");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const togglePassword = document.getElementById("togglePassword");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            let isValid = true;

            // Reset errors
            emailError.textContent = "";
            passwordError.textContent = "";

            // Email Validation
            if (email.value.trim() === "") {
                emailError.textContent = "Email is required";
                isValid = false;
            } else if (!/\S+@\S+\.\S+/.test(email.value)) {
                emailError.textContent = "Enter a valid email address";
                isValid = false;
            }

            // Password Validation
            if (password.value.trim() === "") {
                passwordError.textContent = "Password is required";
                isValid = false;
            } else if (password.value.length < 6) {
                passwordError.textContent = "Password must be at least 6 characters";
                isValid = false;
            }

            // If valid (demo login)
            if (isValid) {
                alert("Login successful!");
                window.location.href = "dashboard.html"; // redirect
            }
        });
    }

    // Show/Hide Password
    if (togglePassword) {
        togglePassword.addEventListener("click", function () {
            if (password.type === "password") {
                password.type = "text";
                this.innerHTML = "<i class='bx bx-hide'></i>";
            } else {
                password.type = "password";
                this.innerHTML = "<i class='bx bx-show'></i>";
            }
        });
    }
});
