function validateForm() {
    // Get form inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const location = document.getElementById("location").value;
    const robotCheck = document.getElementById("robotCheck").checked;

    // Validate Name (should not be empty)
    if (name.trim() === "") {
        alert("Please enter your name.");
        return false;
    }

    // Validate Email (basic email pattern)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate Phone Number (should be digits and 10-15 characters)
    const phonePattern = /^[0-9]{10,15}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number (10-15 digits).");
        return false;
    }

    // Validate Location selection
    if (location === "") {
        alert("Please select your nearest branch location.");
        return false;
    }

    // Validate Robot Check
    if (!robotCheck) {
        alert("Please confirm you're not a robot.");
        return false;
    }

    // If all validations pass, form is valid
    alert("Form submitted successfully!");
    return true;
}