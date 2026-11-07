document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let country = document.getElementById("country").value.trim();
    let comments = document.getElementById("comments").value.trim();

    if (name === "" || email === "" || country === "" || comments === "") {
        alert("Please fill in all fields.");
    } else if (!document.getElementById("email").checkValidity()) {
        alert("Please enter a valid email address.");
    } else {
        alert("Form submitted successfully!");
        document.getElementById("contactForm").reset();
    }
});
