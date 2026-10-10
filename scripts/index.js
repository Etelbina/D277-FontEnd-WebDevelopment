const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
    const email = document.getElementById("email").value;
    const confirmation = document.getElementById("confirmation").value;

    if (email !== confirmation) {
        alert("The email addresses do not match.");
        event.preventDefault();
    }
});