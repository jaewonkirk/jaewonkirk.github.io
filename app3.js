const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function handleLoginButtonClick() {
    const username = loginInput.value;
    if(username === "") {
        alert("Please write your name.");
    } else if(username.length > 15) {
        alert("Your name is too long.");
    } else {
        console.log("Hello", username);
    }
}

loginButton.addEventListener("click", handleLoginButtonClick);