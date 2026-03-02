// Toggle password visibility
function toggle(icon) {
    icon.classList.toggle("show");

    const input = icon.previousElementSibling;

    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}

// Validate registration form if exists
const registerForm = document.getElementById("registerForm");
if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
        const pass = document.getElementById("password").value;
        const confirm = document.getElementById("confirmPassword").value;

        if (pass !== confirm) {
            alert("Passwords do not match");
            e.preventDefault();
        }
    });
}

// Validate age based on birthdate
const birthdateInput = document.getElementById("birthdate");
const ageInput = document.getElementById("age");

function calculateAge(birthdate) {
    const today = new Date();
    const birth = new Date(birthdate);

    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
}

function validateAge() {
    if (!birthdateInput || !ageInput) return;
    if (!birthdateInput.value || !ageInput.value) return;

    const correctAge = calculateAge(birthdateInput.value);
    const enteredAge = parseInt(ageInput.value);

    if (enteredAge !== correctAge) {
        ageInput.setCustomValidity("Age does not match birthdate");
    } else {
        ageInput.setCustomValidity("");
    }
}

if (birthdateInput && ageInput) {
    birthdateInput.addEventListener("change", validateAge);
    ageInput.addEventListener("input", validateAge);
}

// Auto-hide success and error messages after 3 seconds
window.addEventListener("load", function () {
    const messages = document.querySelectorAll(".error-message, .success-message");

    messages.forEach(msg => {
        setTimeout(() => {
            msg.style.transition = "opacity 0.5s ease";
            msg.style.opacity = "0";
            setTimeout(() => {
                if (msg.parentNode) msg.parentNode.removeChild(msg);
            }, 500);
        }, 3000);
    });

    // Remove query string so message doesn't reappear on refresh
    if (window.history.replaceState) {
        const url = window.location.protocol + "//" + window.location.host + window.location.pathname;
        window.history.replaceState({ path: url }, "", url);
    }
});