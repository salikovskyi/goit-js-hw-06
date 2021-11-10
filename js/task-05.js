const usernameInputEl = document.querySelector('#name-input');
const usernameOutputEl = document.querySelector('#name-output');


usernameInputEl.addEventListener('input', event => {
    if (usernameInputEl.value === "") {
        usernameOutputEl.textContent = "Anonymous"
    } else {
          usernameOutputEl.textContent = event.currentTarget.value;
     }

});