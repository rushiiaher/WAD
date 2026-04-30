document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user = {
        name: name,
        email: email,
        password: password
    };

    // Get existing users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Push new user
    users.push(user);

    // Save back to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // AJAX POST Request Simulation
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function() {
        if (xhr.status === 201) {
            alert("Registration Successful!");
            document.getElementById("registrationForm").reset();
        }
    };

    xhr.send(JSON.stringify(user));
});