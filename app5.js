const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function handleLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loadGreetingText(username);
}

function handleLinkClick(event){
    event.preventDefault();
    console.log("Clicked!");
    console.log(event);
}

function loadGreetingText(username){
    greeting.innerText = `Hello ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

link.addEventListener("click", handleLinkClick);

const localStorageUsername = localStorage.getItem(USERNAME_KEY);

if(localStorageUsername === null){
    //show the form
    greeting.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", handleLoginSubmit);
} else {
    //hide the form
    loginForm.classList.add(HIDDEN_CLASSNAME);
    loadGreetingText(localStorageUsername);
}