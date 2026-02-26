


function toggle(icon) {
    icon.classList.toggle("show");

    const input = icon.previousElementSibling;

    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}

document.getElementById("registerForm").addEventListener("submit", function(e){

    const pass = document.getElementById("password").value;
    const confirm = document.getElementById("confirmPassword").value;

    if(pass !== confirm){
        alert("Passwords do not match");
        e.preventDefault();
    }

});

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

    if (!birthdateInput.value || !ageInput.value) return;

    const correctAge = calculateAge(birthdateInput.value);
    const enteredAge = parseInt(ageInput.value);

    if (enteredAge !== correctAge) {
        ageInput.setCustomValidity("Age does not match birthdate");
    } else {
        ageInput.setCustomValidity("");
    }
}

birthdateInput.addEventListener("change", validateAge);
ageInput.addEventListener("input", validateAge);

