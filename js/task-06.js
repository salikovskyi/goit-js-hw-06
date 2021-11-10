const usernameInputEl = document.querySelector('#validation-input');

usernameInputEl.addEventListener('blur', event => {
    if (usernameInputEl.value.length === Number(usernameInputEl.dataset.length)){
        usernameInputEl.classList.add("valid");
        usernameInputEl.classList.remove("invalid")

    } else {
        usernameInputEl.classList.add("invalid");
        usernameInputEl.classList.remove("valid");

    }
})