const create_account_button = document.getElementById("create-account-button");

create_account_button.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
        form.reportValidity();
        
        return;
    }

    const password = document.getElementById("password").value;
    const confirmed_password = document.getElementById("confirmed-password").value;

    if(password !== confirmed_password) {
        alert("Passwords do not match");

        return;
    }

    console.log("Passwords match!")
});