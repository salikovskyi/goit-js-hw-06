const usernameInputEl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')


usernameInputEl.addEventListener('input',  event => {
    textEl.style.fontSize = `${usernameInputEl.value}px`;
})